import { extname } from "node:path";
import { getCliClient } from "sanity/cli";
import { homeContent, judges } from "../lib/content/seed";

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
  if (existing?._id) {
    assetIds.set(sourceUrl, existing._id);
    return existing._id;
  }
  const response = await fetch(sourceUrl);
  if (!response.ok) throw new Error(`Could not download ${sourceUrl}: ${response.status}`);
  const asset = await client.assets.upload("image", Buffer.from(await response.arrayBuffer()), {
    filename,
    source: { id: sourceUrl, name: "GESAwards legacy content", url: sourceUrl },
  });
  assetIds.set(sourceUrl, asset._id);
  return asset._id;
}

async function main() {
  console.log(`${dryRun ? "Would import" : "Importing"} ${judges.length} judges.`);
  if (dryRun) return;

  const transaction = client.transaction();
  for (const [index, judge] of judges.entries()) {
    const photo = judge.photo
      ? {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: await uploadRemote(
              judge.photo,
              `judge-${index + 1}${extname(originalWixUrl(judge.photo))}`,
            ),
          },
        }
      : undefined;
    transaction.createOrReplace({
      _id: `gesawards-judge-${index + 1}`,
      _type: "judge",
      name: judge.name,
      title: judge.title,
      company: judge.company,
      photo,
      edition: homeContent.editionYear,
      order: index + 1,
    });
    console.log(`  ${index + 1}. ${judge.name}${photo ? " (photo uploaded)" : ""}`);
  }
  await transaction.commit();
  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
