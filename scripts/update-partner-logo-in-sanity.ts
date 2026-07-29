// scripts/update-partner-logo-in-sanity.ts
//
// Replaces the logo asset on a SINGLE partner document, leaving every other field
// (order, knockout, url, type) untouched. Use this when a partner re-uploads their logo
// to Airtable and only that one tile needs to follow — scripts/import-partner-logos-to-sanity.ts
// is the bulk path and would createOrReplace all 30 docs, wiping fields editors set by hand.
//
// The source file is the local mirror written by scripts/download-partner-logos.mjs, so run
// `npm run refresh:semifinals` first to pull the current Airtable attachment.
//
// Run with:
//   npx sanity exec scripts/update-partner-logo-in-sanity.ts --with-user-token

import { createReadStream, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";

const PARTNER_NAME = process.env.PARTNER_NAME ?? "Tech Monterrey";

const client = getCliClient({ apiVersion: "2024-10-01" });
const root = path.join(__dirname, "..");

const manifest: Record<string, string> = JSON.parse(
  readFileSync(path.join(root, "public/brand/partners/manifest.json"), "utf8")
);

async function run() {
  const localPath = manifest[PARTNER_NAME];
  if (!localPath) throw new Error(`"${PARTNER_NAME}" is not in the partner logo manifest.`);

  const file = path.join(root, "public", localPath);
  if (!existsSync(file)) throw new Error(`Logo file missing: ${file}`);

  const docs: { _id: string; name: string }[] = await client.fetch(
    `*[_type == "partner" && name == $name]{_id, name}`,
    { name: PARTNER_NAME }
  );
  if (docs.length !== 1) {
    throw new Error(`Expected exactly one partner named "${PARTNER_NAME}", found ${docs.length}.`);
  }
  const doc = docs[0]!;

  const asset = await client.assets.upload("image", createReadStream(file), {
    filename: path.basename(localPath),
  });
  console.log(`Uploaded ${localPath} -> ${asset._id}`);

  await client
    .patch(doc._id)
    .set({ logo: { _type: "image", asset: { _type: "reference", _ref: asset._id } } })
    .commit();
  console.log(`Patched ${doc._id} (${doc.name}) — logo only, other fields untouched.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
