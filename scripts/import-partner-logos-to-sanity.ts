// scripts/import-partner-logos-to-sanity.ts
//
// Uploads every partner logo from public/brand/partners/manifest.json (synced from the
// GESAwards Airtable base by scripts/download-partner-logos.mjs) into Sanity as
// type:"worldwide" partner documents, so the homepage "Worldwide partners" group shows
// the full unified list. Also names the two legacy placeholder docs and re-numbers the
// whole worldwide group alphabetically.
//
// Idempotent: documents use deterministic ids (gesawards-partner-worldwide-<slug>), so
// re-running replaces rather than duplicates. Run with:
//   npx sanity exec scripts/import-partner-logos-to-sanity.ts --with-user-token

import { createReadStream, readFileSync } from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2024-10-01" });
const root = path.join(__dirname, "..");

const manifest: Record<string, string> = JSON.parse(
  readFileSync(path.join(root, "public/brand/partners/manifest.json"), "utf8")
);

// Legacy migration docs that predate the Airtable sync — identified visually.
const LEGACY_RENAMES: Record<string, string> = {
  "gesawards-partner-3": "Future Education Modena",
  "gesawards-partner-4": "Global EdTech Impact Alliance",
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function run() {
  const uploaded: Array<{ name: string; assetId: string }> = [];

  for (const [name, localPath] of Object.entries(manifest)) {
    const file = path.join(root, "public", localPath);
    const asset = await client.assets.upload("image", createReadStream(file), {
      filename: path.basename(localPath),
    });
    uploaded.push({ name, assetId: asset._id });
    console.log(`Uploaded ${name} -> ${asset._id}`);
  }

  // One alphabetical ordering across the whole worldwide group (new + legacy docs),
  // numbered after the powered-by docs (order 1-2) with room before prize sponsors.
  const allNames = [...uploaded.map((u) => u.name), ...Object.values(LEGACY_RENAMES)].sort(
    (a, b) => a.localeCompare(b)
  );
  const orderOf = (name: string) => 10 + allNames.indexOf(name);

  let tx = client.transaction();

  for (const { name, assetId } of uploaded) {
    tx = tx.createOrReplace({
      _id: `gesawards-partner-worldwide-${slugify(name)}`,
      _type: "partner",
      name,
      type: "worldwide",
      order: orderOf(name),
      logo: { _type: "image", asset: { _type: "reference", _ref: assetId } },
    });
  }

  for (const [id, name] of Object.entries(LEGACY_RENAMES)) {
    tx = tx.patch(id, (p) => p.set({ name, order: orderOf(name) }));
  }

  const result = await tx.commit();
  console.log(`\nCommitted ${result.results.length} mutations.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
