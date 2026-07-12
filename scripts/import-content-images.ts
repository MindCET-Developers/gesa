import { readFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { getCliClient } from "sanity/cli";
import { homeContent, judges, partners } from "../lib/content/seed";

if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN is missing.");

const client = getCliClient({
  apiVersion: "2024-10-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
const dryRun = process.argv.includes("--dry-run");
const assetIds = new Map<string, string>();

function originalWixUrl(url: string) {
  const match = decodeURIComponent(url).match(/https:\/\/static\.wixstatic\.com\/media\/([^/]+)/);
  if (!match) throw new Error(`Invalid Wix media URL: ${url}`);
  return `https://static.wixstatic.com/media/${match[1]}`;
}

async function uploadRemote(url: string, filename: string) {
  const sourceUrl = originalWixUrl(url);
  const cached = assetIds.get(sourceUrl);
  if (cached) return cached;
  const existing = await client.fetch<{ _id: string } | null>(
    `*[_type == "sanity.imageAsset" && source.url == $sourceUrl][0]{_id}`,
    { sourceUrl },
  );
  if (existing?._id) return existing._id;
  const response = await fetch(sourceUrl);
  if (!response.ok) throw new Error(`Could not download ${sourceUrl}: ${response.status}`);
  const asset = await client.assets.upload("image", Buffer.from(await response.arrayBuffer()), {
    filename,
    source: { id: sourceUrl, name: "GESAwards legacy content", url: sourceUrl },
  });
  assetIds.set(sourceUrl, asset._id);
  return asset._id;
}

async function uploadLocal(path: string) {
  const filename = basename(path);
  const existing = await client.fetch<{ _id: string } | null>(
    `*[_type == "sanity.imageAsset" && originalFilename == $filename][0]{_id}`,
    { filename },
  );
  if (existing?._id) return existing._id;
  const data = await readFile(join(process.cwd(), "public", path.replace(/^\//, "")));
  return (await client.assets.upload("image", data, { filename }))._id;
}

const imageReference = (assetId: string) => ({
  _type: "image",
  asset: { _type: "reference", _ref: assetId },
});

async function main() {
  if (dryRun) {
    console.log(`Would link ${homeContent.gallery.length} gallery images, ${judges.filter((judge) => judge.photo).length} judge photos, and ${partners.length} partner logos.`);
    return;
  }
  const gallery = await Promise.all(homeContent.gallery.map(async (image, index) => ({
    _key: `gallery-${index + 1}`,
    ...imageReference(await uploadRemote(image.src, `gallery-${index + 1}${extname(originalWixUrl(image.src))}`)),
    alt: image.alt,
  })));
  const judgePhotos = await Promise.all(judges.map(async (judge, index) => judge.photo ? [
    `gesawards-judge-${index + 1}`,
    imageReference(await uploadRemote(judge.photo, `judge-${index + 1}${extname(originalWixUrl(judge.photo))}`)),
  ] as const : null));
  const partnerLogos = await Promise.all(partners.map(async (partner, index) => [
    `gesawards-partner-${index + 1}`,
    imageReference(partner.logo.startsWith("http")
      ? await uploadRemote(partner.logo, `partner-${index + 1}${extname(originalWixUrl(partner.logo))}`)
      : await uploadLocal(partner.logo)),
  ] as const));

  let transaction = client.transaction().patch("gesawards-home-page", (patch) => patch.set({ gallery }));
  for (const entry of judgePhotos) if (entry) transaction = transaction.patch(entry[0], (patch) => patch.set({ photo: entry[1] }));
  for (const [documentId, logo] of partnerLogos) transaction = transaction.patch(documentId, (patch) => patch.set({ logo }));
  await transaction.commit();
  const counts = await client.fetch<{ gallery: number; judges: number; partners: number }>(`{
    "gallery": count(*[_id == "gesawards-home-page"][0].gallery[defined(asset)]),
    "judges": count(*[_type == "judge" && defined(photo.asset)]),
    "partners": count(*[_type == "partner" && defined(logo.asset)])
  }`);
  console.log(`Verified Sanity images: ${counts.gallery} gallery, ${counts.judges} judges, ${counts.partners} partners.`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
