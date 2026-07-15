// scripts/build-regional-semifinals.mjs
//
// Transforms lib/content/regional-semifinals-source.ts into lib/content/regionalSemifinals.ts.
// Run manually whenever the Airtable source data changes: `node scripts/build-regional-semifinals.mjs`
//
// Transform rules (see docs/superpowers/specs/2026-07-12-regional-semifinals-redesign-design.md):
// 1. Collapse "USA - <State>" entries into a single "United States".
// 2. Drop duplicate/legacy country names (kept as a single canonical name in the source file).
// 3. Split a partner's countries by continent — a partner with countries in N continents
//    produces N entries, each holding only that continent's countries.
// 4. Look up each country's ISO2 code; log (not throw) on any miss.
// 5. Attach the local logo path from Task 6's download manifest, if present.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// Load the TS source data via a tiny require-free eval: import the compiled values by
// re-reading the .ts file is not possible from plain Node, so this script instead imports
// the *type-stripped* runtime data from a sibling .mjs mirror kept in sync manually is
// error-prone — instead, run this script with Node's TS loader:
//   node --experimental-strip-types scripts/build-regional-semifinals.mjs
// (Node 22.6+ ships --experimental-strip-types; the repo's Next.js 16 / React 19 stack
// already requires a current Node LTS, so this is available.)

// Try to load semifinals-source first; fall back to regional-semifinals-source for legacy partners
let RAW_SEMIFINALS = [];
let RAW_PARTNERS = [];
let COUNTRY_TO_CONTINENT = {};
let COUNTRY_TO_ISO2 = {};

try {
  const semifinalsData = await import("../lib/content/semifinals-source.ts");
  RAW_SEMIFINALS = semifinalsData.RAW_SEMIFINALS || [];
  COUNTRY_TO_CONTINENT = semifinalsData.COUNTRY_TO_CONTINENT || {};
  COUNTRY_TO_ISO2 = semifinalsData.COUNTRY_TO_ISO2 || {};
} catch {
  console.log("No semifinals-source.ts found, loading legacy regional-semifinals-source.ts");
}

// If no semifinals data, load legacy partners data
if (RAW_SEMIFINALS.length === 0) {
  const legacyData = await import("../lib/content/regional-semifinals-source.ts");
  RAW_PARTNERS = legacyData.RAW_PARTNERS || [];
  COUNTRY_TO_CONTINENT = legacyData.COUNTRY_TO_CONTINENT || {};
  COUNTRY_TO_ISO2 = legacyData.COUNTRY_TO_ISO2 || {};
}

const logoManifestPath = path.join(root, "public/brand/partners/manifest.json");
let logoManifest = {};
try {
  logoManifest = JSON.parse(readFileSync(logoManifestPath, "utf8"));
} catch {
  console.warn(
    "No logo manifest found at public/brand/partners/manifest.json — " +
      "run scripts/download-partner-logos.mjs first if you want logos in the output. " +
      "Continuing with initials-only fallback for all partners."
  );
}

function normalizeCountryName(name) {
  if (name.startsWith("USA - ")) return "United States";
  return name;
}

const missingContinent = new Set();
const missingIso = new Set();
const entries = [];

// Process new semifinals data (multiple partners per entry)
if (RAW_SEMIFINALS.length > 0) {
  console.log(`Processing ${RAW_SEMIFINALS.length} semifinal entries with multiple partners…`);

  for (const semifinal of RAW_SEMIFINALS) {
    const countries = semifinal.countries.map((name) => {
      const code = COUNTRY_TO_ISO2[name];
      if (!code) missingIso.add(name);
      return { name, code: code ?? "" };
    });

    const partners = semifinal.partners.map((p) => ({
      name: p.name.trim(),
      logo: logoManifest[p.name] ?? undefined,
    }));

    entries.push({
      partners,
      continent: semifinal.continent,
      countries,
      date: semifinal.date,
      winner: semifinal.winner,
    });
  }
} else {
  // Legacy: process individual partners (single partner per entry)
  console.log(`Processing ${RAW_PARTNERS.length} legacy partner entries…`);

  for (const partner of RAW_PARTNERS) {
    if (partner.countries.length === 0) continue; // no linked countries yet — skip for now

    // Dedupe + normalize, preserving first-seen order.
    const seen = new Set();
    const normalized = [];
    for (const raw of partner.countries) {
      const name = normalizeCountryName(raw);
      if (seen.has(name)) continue;
      seen.add(name);
      normalized.push(name);
    }

    // Group by continent.
    const byContinent = new Map();
    for (const name of normalized) {
      const continent = COUNTRY_TO_CONTINENT[name];
      if (!continent) {
        missingContinent.add(name);
        continue;
      }
      if (!byContinent.has(continent)) byContinent.set(continent, []);
      byContinent.get(continent).push(name);
    }

    for (const [continent, names] of byContinent) {
      const countries = names.map((name) => {
        const code = COUNTRY_TO_ISO2[name];
        if (!code) missingIso.add(name);
        return { name, code: code ?? "" };
      });

      entries.push({
        partners: [{ name: partner.name.trim(), logo: logoManifest[partner.name] ?? undefined }],
        continent,
        countries,
      });
    }
  }
}

if (missingContinent.size > 0) {
  console.warn(
    "Countries with no continent mapping (excluded from output):",
    [...missingContinent].sort()
  );
}
if (missingIso.size > 0) {
  console.warn(
    "Countries with no ISO2 mapping (will render with an empty flag code):",
    [...missingIso].sort()
  );
}

// Stable ordering: continent, then first partner name.
const continentOrder = [
  "north-america", "europe", "middle-east", "asia", "latin-america", "africa",
  "rest-of-world",
];
entries.sort((a, b) => {
  const c = continentOrder.indexOf(a.continent) - continentOrder.indexOf(b.continent);
  if (c !== 0) return c;
  // Sort by first partner name for stability
  const aFirst = a.partners[0]?.name ?? "";
  const bFirst = b.partners[0]?.name ?? "";
  return aFirst.localeCompare(bFirst);
});

const header = `// GENERATED FILE — do not edit by hand.
// Produced by scripts/build-regional-semifinals.mjs from
// lib/content/regional-semifinals-source.ts. Re-run that script to regenerate.

import type { RegionalSemifinalEntry } from "./types";

export const regionalSemifinals: RegionalSemifinalEntry[] = `;

const body = JSON.stringify(entries, null, 2)
  // JSON.stringify quotes keys; TS is fine with quoted keys in an object literal, so
  // no further transform is needed.
  .replace(/"code": ""/g, '"code": "" /* unmapped — see build warnings */');

writeFileSync(
  path.join(root, "lib/content/regionalSemifinals.ts"),
  header + body + ";\n"
);

console.log(`Wrote ${entries.length} entries to lib/content/regionalSemifinals.ts`);
