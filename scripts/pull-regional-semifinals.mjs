// scripts/pull-regional-semifinals.mjs
//
// One-command refresh of the regional semifinals data:
//   1. Pulls "Partners" + "all countries" from the GESAwards Airtable base via REST API.
//   2. Applies the cleanup rules (skip empty records, canonicalize names, dedupe countries)
//      and regenerates lib/content/regional-semifinals-source.ts.
//   3. Chains scripts/download-partner-logos.mjs and scripts/build-regional-semifinals.mjs.
//
// Requires AIRTABLE_API_KEY in the environment or .env.local — a Personal Access Token
// with data.records:read scope on base appyTu8uOPQUVXD4x (https://airtable.com/create/tokens).
//
// Run: npm run refresh:semifinals
// Then review `git diff` before committing/deploying.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const BASE_ID = "appyTu8uOPQUVXD4x";
const PARTNERS_TABLE = "tblAfv3rYs6GyXQEF";
const COUNTRIES_TABLE = "tbl7wFk8g0AbGx7ee";

// Field IDs (stable even if columns are renamed in Airtable).
const F_PARTNER_NAME = "fldGtodmZwz4tEIL1";
const F_PARTNER_COUNTRIES = "fldPhyaaNW13gcztm"; // linked records -> array of country rec IDs
const F_PARTNER_LOGO = "fldjzYaS859kIMA5q";
const F_COUNTRY_NAME = "fld2EoxYQJ14Sb1Y4";
const F_COUNTRY_AREA = "fld1A4UPsFR1Bji3N";

// Airtable record names that need canonicalizing before display.
const PARTNER_NAME_OVERRIDES = {
  "SEK Lab/ ?": "SEK Lab",
};
const COUNTRY_NAME_OVERRIDES = {
  "Eswatini (formerly Swaziland)": "Eswatini",
  "Swaziland (renamed to Eswatini)": "Eswatini",
};

/**
 * ISO 3166-1 alpha-2 (lowercase) per canonical country name — maintained here, the
 * generated file only receives the entries actually referenced by partners.
 * flag-icons keys its classes by this code (e.g. "fi-us").
 */
const COUNTRY_TO_ISO2 = {
  "United States": "us", Canada: "ca", Spain: "es", Portugal: "pt", France: "fr",
  Netherlands: "nl", Italy: "it", Denmark: "dk", Sweden: "se", Estonia: "ee",
  Finland: "fi", Iceland: "is", Latvia: "lv", Lithuania: "lt", Norway: "no",
  "United Kingdom (UK)": "gb", Austria: "at", Germany: "de", Albania: "al",
  Belgium: "be", Croatia: "hr", Cyprus: "cy", "Czech Republic": "cz",
  Greece: "gr", Hungary: "hu", Malta: "mt", Moldova: "md", Monaco: "mc",
  Serbia: "rs", Slovenia: "si", Switzerland: "ch", Ukraine: "ua",
  Andorra: "ad", Belarus: "by", "Bosnia and Herzegovina": "ba", Bulgaria: "bg",
  Kosovo: "xk", Liechtenstein: "li", Luxembourg: "lu",
  "Macedonia (FYROM)": "mk", Montenegro: "me", Poland: "pl", Romania: "ro",
  "San Marino": "sm", Slovakia: "sk", Ireland: "ie", Japan: "jp",
  "South Korea": "kr", "North Korea": "kp", India: "in", China: "cn",
  "Hong Kong": "hk", Macau: "mo", "Sri Lanka": "lk", Maldives: "mv",
  Bhutan: "bt", Afghanistan: "af", Israel: "il", Iran: "ir", Yemen: "ye",
  Oman: "om", Qatar: "qa", Bahrain: "bh", Syria: "sy", Palestine: "ps",
  Singapore: "sg", Brunei: "bn", Cambodia: "kh", Indonesia: "id", Laos: "la",
  Malaysia: "my", Philippines: "ph", Thailand: "th", "East Timor": "tl",
  Vietnam: "vn", "Myanmar (formerly Burma)": "mm", Taiwan: "tw",
  Bangladesh: "bd", Nepal: "np", Pakistan: "pk", Australia: "au",
  "New Zealand": "nz", Fiji: "fj", "Papua New Guinea": "pg", Iraq: "iq",
  Jordan: "jo", Kuwait: "kw",
  Lebanon: "lb", "Saudi Arabia": "sa", Turkey: "tr",
  "United Arab Emirates (UAE)": "ae", Brazil: "br", Argentina: "ar", Peru: "pe",
  Chile: "cl", Colombia: "co", Uruguay: "uy", Paraguay: "py", Bolivia: "bo",
  Ecuador: "ec", Guyana: "gy", Suriname: "sr", Venezuela: "ve", Belize: "bz",
  "Costa Rica": "cr", "El Salvador": "sv", Guatemala: "gt", Honduras: "hn",
  Mexico: "mx", Nicaragua: "ni", Panama: "pa", Cuba: "cu",
  "Dominican Republic": "do", Haiti: "ht", Jamaica: "jm", Bahamas: "bs",
  Barbados: "bb", "Trinidad and Tobago": "tt", Nigeria: "ng", Ethiopia: "et",
  Egypt: "eg", "Democratic Republic of the Congo": "cd",
  "Republic of the Congo": "cg", Tanzania: "tz", "South Africa": "za",
  Kenya: "ke", Sudan: "sd", Uganda: "ug", Algeria: "dz", Morocco: "ma",
  Angola: "ao", Ghana: "gh", Mozambique: "mz", Madagascar: "mg",
  "Ivory Coast": "ci", Cameroon: "cm", Niger: "ne", Mali: "ml",
  "Burkina Faso": "bf", Malawi: "mw", Zambia: "zm", Chad: "td", Somalia: "so",
  Senegal: "sn", Zimbabwe: "zw", Guinea: "gn", Benin: "bj", Rwanda: "rw",
  Burundi: "bi", Tunisia: "tn", "South Sudan": "ss", Togo: "tg",
  "Sierra Leone": "sl", Libya: "ly", Liberia: "lr",
  "Central African Republic (CAR)": "cf", Mauritania: "mr", Eritrea: "er",
  Namibia: "na", Gambia: "gm", Gabon: "ga", Botswana: "bw", Lesotho: "ls",
  "Guinea-Bissau": "gw", "Equatorial Guinea": "gq", Mauritius: "mu",
  Eswatini: "sz", Djibouti: "dj", Comoros: "km", "Cape Verde": "cv",
  "Sao Tome and Principe": "st", Seychelles: "sc", Russia: "ru",
  Azerbaijan: "az", Kazakhstan: "kz", Armenia: "am", Kyrgyzstan: "kg",
  Uzbekistan: "uz", Tajikistan: "tj", Turkmenistan: "tm", Mongolia: "mn",
  Georgia: "ge",
};

// ---------------------------------------------------------------------------

function loadApiKey() {
  if (process.env.AIRTABLE_API_KEY) return process.env.AIRTABLE_API_KEY;
  const envPath = path.join(root, ".env.local");
  if (existsSync(envPath)) {
    const match = readFileSync(envPath, "utf8").match(/^AIRTABLE_API_KEY=(.+)$/m);
    if (match) return match[1].trim();
  }
  console.error(
    "Missing AIRTABLE_API_KEY. Create a Personal Access Token with data.records:read " +
      `scope on base ${BASE_ID} at https://airtable.com/create/tokens and add ` +
      "AIRTABLE_API_KEY=... to .env.local"
  );
  process.exit(1);
}

const API_KEY = loadApiKey();

// Some Airtable names contain non-breaking spaces (U+00A0) — normalize to plain spaces.
function cleanName(name) {
  return name.replace(/ /g, " ").replace(/\s+/g, " ").trim();
}

async function fetchAllRecords(tableId) {
  const records = [];
  let offset;
  do {
    const url = new URL(`https://api.airtable.com/v0/${BASE_ID}/${tableId}`);
    url.searchParams.set("returnFieldsByFieldId", "true");
    url.searchParams.set("pageSize", "100");
    if (offset) url.searchParams.set("offset", offset);
    const res = await fetch(url, { headers: { Authorization: `Bearer ${API_KEY}` } });
    if (!res.ok) {
      console.error(`Airtable request failed: HTTP ${res.status} ${await res.text()}`);
      process.exit(1);
    }
    const page = await res.json();
    records.push(...page.records);
    offset = page.offset;
  } while (offset);
  return records;
}

console.log("Pulling Airtable tables…");
const [countryRecords, partnerRecords] = await Promise.all([
  fetchAllRecords(COUNTRIES_TABLE),
  fetchAllRecords(PARTNERS_TABLE),
]);
console.log(`Fetched ${partnerRecords.length} partners, ${countryRecords.length} countries.`);

// Country record ID -> { name, area } (area = Airtable "Geographic Area" select name).
const countryById = new Map();
for (const rec of countryRecords) {
  const name = rec.fields[F_COUNTRY_NAME];
  if (!name) continue;
  countryById.set(rec.id, { name: cleanName(name), area: rec.fields[F_COUNTRY_AREA] ?? null });
}

function areaToContinentKey(area) {
  return area.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^rest-of-the-world$/, "rest-of-world");
}

const KNOWN_CONTINENTS = new Set([
  "europe", "asia", "middle-east", "north-america", "latin-america", "africa", "rest-of-world",
]);

const partners = [];
const usedCountries = new Set();
const continentByCountry = new Map();
const warnings = [];

for (const rec of partnerRecords) {
  const rawName = rec.fields[F_PARTNER_NAME];
  if (!rawName || !rawName.trim()) continue; // empty/stub Airtable record

  const name = PARTNER_NAME_OVERRIDES[cleanName(rawName)] ?? cleanName(rawName);

  const seen = new Set();
  const countries = [];
  for (const linkedId of rec.fields[F_PARTNER_COUNTRIES] ?? []) {
    const country = countryById.get(linkedId);
    if (!country) {
      warnings.push(`Partner "${name}" links unknown country record ${linkedId} — skipped.`);
      continue;
    }
    const countryName = COUNTRY_NAME_OVERRIDES[country.name] ?? country.name;
    if (seen.has(countryName)) continue;
    seen.add(countryName);
    countries.push(countryName);

    // Record continent under the name the build script looks up (US states collapse).
    const canonical = countryName.startsWith("USA - ") ? "United States" : countryName;
    usedCountries.add(canonical);
    if (country.area) {
      const key = areaToContinentKey(country.area);
      if (!KNOWN_CONTINENTS.has(key)) {
        warnings.push(`Country "${canonical}" has unknown Geographic Area "${country.area}".`);
      } else {
        continentByCountry.set(canonical, key);
      }
    }
  }

  const attachment = (rec.fields[F_PARTNER_LOGO] ?? [])[0];
  let logoUrl;
  if (attachment) {
    if (attachment.type?.startsWith("image/")) {
      logoUrl = attachment.url;
    } else {
      warnings.push(
        `Partner "${name}" logo attachment is "${attachment.type}", not an image — ` +
          "omitted (re-upload it in Airtable). Falls back to initials badge."
      );
    }
  }

  partners.push({ name, countries, logoUrl });
}

partners.sort((a, b) => a.name.localeCompare(b.name));

// Countries with no Geographic Area in Airtable (mainly Hong Kong) fall back to
// rest-of-world, matching the previous hand-maintained behavior.
for (const country of usedCountries) {
  if (!continentByCountry.has(country)) {
    continentByCountry.set(country, "rest-of-world");
    warnings.push(`Country "${country}" has no Geographic Area in Airtable — treated as Rest of World.`);
  }
  if (!COUNTRY_TO_ISO2[country]) {
    warnings.push(
      `Country "${country}" has no ISO2 code — add it to COUNTRY_TO_ISO2 in scripts/pull-regional-semifinals.mjs.`
    );
  }
}

// ---------------------------------------------------------------------------
// Generate lib/content/regional-semifinals-source.ts

const q = JSON.stringify;

function formatStringArray(values, indent) {
  if (values.length === 0) return "[]";
  const pad = " ".repeat(indent);
  let lines = [];
  let line = pad;
  for (const value of values) {
    const piece = `${q(value)}, `;
    if (line.length + piece.length > 96 && line.trim()) {
      lines.push(line.trimEnd());
      line = pad;
    }
    line += piece;
  }
  if (line.trim()) lines.push(line.trimEnd());
  return `[\n${lines.join("\n")}\n${" ".repeat(indent - 2)}]`;
}

const partnerBlocks = partners.map((p) => {
  const lines = [`  {`, `    name: ${q(p.name)},`];
  lines.push(`    countries: ${formatStringArray(p.countries, 6)},`);
  if (p.logoUrl) lines.push(`    logoUrl:\n      ${q(p.logoUrl)},`);
  lines.push(`  },`);
  return lines.join("\n");
});

const sortedCountries = [...usedCountries].sort();
const continentEntries = sortedCountries
  .map((c) => `  ${q(c)}: ${q(continentByCountry.get(c))},`)
  .join("\n");
const isoEntries = sortedCountries
  .filter((c) => COUNTRY_TO_ISO2[c])
  .map((c) => `  ${q(c)}: ${q(COUNTRY_TO_ISO2[c])},`)
  .join("\n");

const today = new Date().toISOString().slice(0, 10);

const output = `// lib/content/regional-semifinals-source.ts
//
// GENERATED FILE — do not edit by hand. Regenerate with: npm run refresh:semifinals
// (scripts/pull-regional-semifinals.mjs pulls the GESAwards Airtable base ${BASE_ID}
// and rewrites this file, then re-downloads logos and rebuilds regionalSemifinals.ts.)
//
// Sources:
// - Table "Partners" (${PARTNERS_TABLE}): partner name + linked countries + logo attachment.
// - Table "all countries" (${COUNTRIES_TABLE}): each country's real "Geographic Area".
// Last refreshed: ${today}.

export type RawPartner = {
  /** Canonicalized Airtable record name. */
  name: string;
  /** Country names as linked in Airtable (US states not yet deduped). */
  countries: string[];
  /** Airtable attachment URL for the Logo field, if an image was uploaded. Expires —
   * scripts/download-partner-logos.mjs mirrors it locally. */
  logoUrl?: string;
};

export const RAW_PARTNERS: RawPartner[] = [
${partnerBlocks.join("\n")}
];

/**
 * "Geographic Area" from Airtable's "all countries" table, keyed by country name after
 * US-state collapsing. Countries without an area in Airtable (mainly Hong Kong) default
 * to "rest-of-world".
 */
export const COUNTRY_TO_CONTINENT: Record<string, ContinentKeyRaw> = {
${continentEntries}
};
type ContinentKeyRaw =
  | "europe" | "asia" | "middle-east" | "north-america"
  | "latin-america" | "africa" | "rest-of-world";

/**
 * ISO 3166-1 alpha-2 (lowercase) for every country name used above, after US-state
 * collapsing. flag-icons keys its classes by this code (e.g. "fi-us").
 * Maintained in scripts/pull-regional-semifinals.mjs — add new codes there.
 */
export const COUNTRY_TO_ISO2: Record<string, string> = {
${isoEntries}
};
`;

writeFileSync(path.join(root, "lib/content/regional-semifinals-source.ts"), output);
console.log(`Wrote lib/content/regional-semifinals-source.ts (${partners.length} partners).`);

if (warnings.length) {
  console.log("\nWarnings:");
  for (const w of warnings) console.warn(`  - ${w}`);
}

// ---------------------------------------------------------------------------
// Chain: download logos, then rebuild the generated content file.

for (const script of ["download-partner-logos.mjs", "build-regional-semifinals.mjs"]) {
  console.log(`\nRunning scripts/${script}…`);
  const result = spawnSync(
    process.execPath,
    ["--experimental-strip-types", "--disable-warning=MODULE_TYPELESS_PACKAGE_JSON", path.join(__dirname, script)],
    { stdio: "inherit", cwd: root }
  );
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log("\nDone. Review `git diff` before committing.");
