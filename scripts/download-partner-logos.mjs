// scripts/download-partner-logos.mjs
//
// Downloads every logoUrl in lib/content/regional-semifinals-source.ts and saves it under
// public/brand/partners/, writing a manifest.json (partner name -> local path) that
// scripts/build-regional-semifinals.mjs reads. Airtable attachment URLs are signed and
// expire — always re-run this BEFORE build-regional-semifinals.mjs when refreshing data.
//
// Partners with no logo attachment in Airtable can still get a logo by adding an entry to
// scripts/manual-partner-logos.json (partner name -> direct image URL on their own site).
// Those are downloaded here too and merged into the manifest, so they survive re-running
// npm run refresh:semifinals. Remove the entry once the partner uploads a logo to Airtable.

import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public/brand/partners");
mkdirSync(outDir, { recursive: true });

const { RAW_PARTNERS } = await import("../lib/content/regional-semifinals-source.ts");

const manualLogosPath = path.join(__dirname, "manual-partner-logos.json");
const manualLogos = existsSync(manualLogosPath)
  ? JSON.parse(readFileSync(manualLogosPath, "utf8"))
  : {};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extFromContentType(contentType) {
  if (contentType.includes("svg")) return "svg";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return "jpg";
  return "png";
}

const manifest = {};

for (const partner of RAW_PARTNERS) {
  if (!partner.logoUrl) continue;

  let res;
  try {
    res = await fetch(partner.logoUrl, { signal: AbortSignal.timeout(15_000) });
  } catch (err) {
    console.warn(`Failed to download logo for "${partner.name}": ${err.message}`);
    continue;
  }
  if (!res.ok) {
    console.warn(`Failed to download logo for "${partner.name}": HTTP ${res.status}`);
    continue;
  }
  const contentType = res.headers.get("content-type") ?? "image/png";
  if (!contentType.startsWith("image/")) {
    console.warn(
      `Skipping "${partner.name}": attachment content-type is "${contentType}", not an image ` +
        `(this is the known-broken Learnlaunch upload — fix it in Airtable and re-run).`
    );
    continue;
  }

  const ext = extFromContentType(contentType);
  const filename = `${slugify(partner.name)}.${ext}`;
  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(path.join(outDir, filename), buffer);

  manifest[partner.name] = `/brand/partners/${filename}`;
  console.log(`Saved ${partner.name} -> public/brand/partners/${filename}`);
}

const airtableNames = new Set(RAW_PARTNERS.filter((p) => p.logoUrl).map((p) => p.name));

for (const [name, url] of Object.entries(manualLogos)) {
  if (airtableNames.has(name)) continue; // Airtable logo takes precedence

  // A value that isn't an http(s) URL is treated as a local path already under public/
  // (e.g. a logo dropped in by hand that has no download source). Just register it in the
  // manifest so it survives re-running the refresh — no download needed.
  if (!/^https?:\/\//i.test(url)) {
    const localPath = path.join(root, "public", url.replace(/^\//, ""));
    if (existsSync(localPath)) {
      manifest[name] = url.startsWith("/") ? url : `/${url}`;
      console.log(`Registered ${name} (local file) -> ${manifest[name]}`);
    } else {
      console.warn(`Skipping "${name}": local logo "${url}" not found at ${localPath}.`);
    }
    continue;
  }

  let res;
  try {
    res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
      signal: AbortSignal.timeout(15_000),
    });
  } catch (err) {
    console.warn(`Failed to download manual logo for "${name}": ${err.message}`);
    continue;
  }
  if (!res.ok) {
    console.warn(`Failed to download manual logo for "${name}": HTTP ${res.status}`);
    continue;
  }
  const contentType = res.headers.get("content-type") ?? "image/png";
  if (!contentType.startsWith("image/")) {
    console.warn(`Skipping manual logo for "${name}": content-type is "${contentType}", not an image.`);
    continue;
  }

  const ext = extFromContentType(contentType);
  const filename = `${slugify(name)}.${ext}`;
  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(path.join(outDir, filename), buffer);

  manifest[name] = `/brand/partners/${filename}`;
  console.log(`Saved ${name} (manual override) -> public/brand/partners/${filename}`);
}

writeFileSync(
  path.join(outDir, "manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);
console.log(`\nWrote manifest with ${Object.keys(manifest).length} logos.`);
