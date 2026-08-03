// scripts/download-partner-logos.mjs
//
// Downloads every logoUrl in lib/content/regional-semifinals-source.ts and saves it under
// public/brand/partners/, writing a manifest.json (partner name -> local path) that
// scripts/build-regional-semifinals.mjs reads. Airtable attachment URLs are signed and
// expire — always re-run this BEFORE build-regional-semifinals.mjs when refreshing data.
//
// Partners who also supply a wide lockup (wideLogoUrl) get it saved as <slug>-wide.<ext> and
// listed in wide-manifest.json — solo semifinal tiles use that version.
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

const manifestPath = path.join(outDir, "manifest.json");
// Wide lockups live in their own manifest so the primary one stays a plain name -> logo map.
const wideManifestPath = path.join(outDir, "wide-manifest.json");

/* Start from the manifest already on disk rather than from scratch. Airtable attachment
 * URLs expire, so a snapshot that has gone stale downloads nothing at all — rebuilding the
 * manifest from those results would wipe every logo we had already saved, even though the
 * files are still sitting in this directory. Entries whose file has since been deleted are
 * dropped; everything else survives a failed run and is simply overwritten by a good one. */
function carryOverManifest(filePath, label) {
  const carried = {};
  if (!existsSync(filePath)) return carried;
  for (const [name, url] of Object.entries(JSON.parse(readFileSync(filePath, "utf8")))) {
    if (!existsSync(path.join(root, "public", url.replace(/^\//, "")))) {
      console.warn(`Dropping "${name}" from the ${label}: ${url} no longer exists.`);
      continue;
    }
    carried[name] = url;
  }
  return carried;
}

const manifest = carryOverManifest(manifestPath, "manifest");
const wideManifest = carryOverManifest(wideManifestPath, "wide manifest");
const carriedOver = Object.keys(manifest).length;

// Partners whose Airtable logo downloaded successfully *this run* — see the manual-override
// loop below, which fills in for anyone whose download failed.
const savedFromAirtable = new Set();
let failed = 0;

for (const partner of RAW_PARTNERS) {
  if (!partner.logoUrl) continue;

  let res;
  try {
    res = await fetch(partner.logoUrl, { signal: AbortSignal.timeout(15_000) });
  } catch (err) {
    console.warn(`Failed to download logo for "${partner.name}": ${err.message}`);
    failed++;
    continue;
  }
  if (!res.ok) {
    console.warn(`Failed to download logo for "${partner.name}": HTTP ${res.status}`);
    failed++;
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
  savedFromAirtable.add(partner.name);
  console.log(`Saved ${partner.name} -> public/brand/partners/${filename}`);
}

/* The wide lockup of a partner's mark, saved as <slug>-wide.<ext> next to the square one.
 * A failure here is never fatal: solo tiles just keep using the square logo. */
for (const partner of RAW_PARTNERS) {
  if (!partner.wideLogoUrl) continue;

  let res;
  try {
    res = await fetch(partner.wideLogoUrl, { signal: AbortSignal.timeout(15_000) });
  } catch (err) {
    console.warn(`Failed to download wide logo for "${partner.name}": ${err.message}`);
    failed++;
    continue;
  }
  if (!res.ok) {
    console.warn(`Failed to download wide logo for "${partner.name}": HTTP ${res.status}`);
    failed++;
    continue;
  }
  const contentType = res.headers.get("content-type") ?? "image/png";
  if (!contentType.startsWith("image/")) {
    console.warn(
      `Skipping wide logo for "${partner.name}": content-type is "${contentType}", not an image.`
    );
    continue;
  }

  const filename = `${slugify(partner.name)}-wide.${extFromContentType(contentType)}`;
  writeFileSync(path.join(outDir, filename), Buffer.from(await res.arrayBuffer()));

  wideManifest[partner.name] = `/brand/partners/${filename}`;
  console.log(`Saved ${partner.name} (wide) -> public/brand/partners/${filename}`);
}

for (const [name, url] of Object.entries(manualLogos)) {
  // A manual override only ever FILLS A GAP: it never displaces a logo we downloaded from
  // Airtable this run, nor one already carried over from disk. These sources are usually
  // weaker (a favicon, a scaled-down site asset), so letting them win whenever an Airtable
  // link happens to be expired would quietly downgrade good logos on every failed run.
  if (savedFromAirtable.has(name) || manifest[name]) continue;

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

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\nWrote manifest with ${Object.keys(manifest).length} logos (${carriedOver} already on disk).`);

writeFileSync(wideManifestPath, JSON.stringify(wideManifest, null, 2) + "\n");
console.log(`Wrote wide manifest with ${Object.keys(wideManifest).length} logo(s).`);

if (failed) {
  console.warn(
    `\n${failed} Airtable download(s) failed. HTTP 410 means the snapshot's signed URLs have\n` +
      `expired — run "npm run refresh:semifinals" for a fresh snapshot, then re-run this script.\n` +
      `Logos already saved were kept, so the site is unaffected either way.`
  );
}
