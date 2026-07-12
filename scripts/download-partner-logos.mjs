// scripts/download-partner-logos.mjs
//
// Downloads every logoUrl in lib/content/regional-semifinals-source.ts and saves it under
// public/brand/partners/, writing a manifest.json (partner name -> local path) that
// scripts/build-regional-semifinals.mjs reads. Airtable attachment URLs are signed and
// expire — always re-run this BEFORE build-regional-semifinals.mjs when refreshing data.

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public/brand/partners");
mkdirSync(outDir, { recursive: true });

const { RAW_PARTNERS } = await import("../lib/content/regional-semifinals-source.ts");

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

writeFileSync(
  path.join(outDir, "manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);
console.log(`\nWrote manifest with ${Object.keys(manifest).length} logos.`);
