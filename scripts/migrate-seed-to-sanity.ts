import { getCliClient } from "sanity/cli";
import {
  homeContent,
  judges,
  pages,
  partners,
  prizeCategories,
  siteSettings,
  tracks,
  winners,
} from "../lib/content/seed";

const client = getCliClient({ apiVersion: "2024-10-01" });
const dryRun = process.argv.includes("--dry-run");

function id(type: string, index = 0) {
  return `gesawards-${type}-${index + 1}`;
}

function keyed<T extends object>(items: T[]) {
  return items.map((item, index) => ({ ...item, _key: `${index + 1}` }));
}

const documents: Array<Record<string, unknown> & { _id: string; _type: string }> = [
  { _id: "gesawards-site-settings", _type: "siteSettings", ...siteSettings },
  {
    _id: "gesawards-home-page",
    _type: "homePage",
    ...homeContent,
    // Images stay on the existing site until they are uploaded as Sanity assets.
    gallery: undefined,
    stats: keyed(homeContent.stats),
    criteria: keyed(homeContent.criteria),
    timeline: keyed(homeContent.timeline),
  },
  ...prizeCategories.map((category, index) => ({
    _id: id("prize-category", index),
    _type: "prizeCategory",
    title: category.title,
    description: category.description,
    color: category.color,
    order: index + 1,
  })),
  ...judges.map((judge, index) => ({
    _id: id("judge", index),
    _type: "judge",
    name: judge.name,
    title: judge.title,
    company: judge.company,
    linkedin: judge.linkedin,
    edition: homeContent.editionYear,
    order: index + 1,
  })),
  ...partners.map((partner, index) => ({
    _id: id("partner", index),
    _type: "partner",
    name: partner.name,
    url: partner.url,
    type: partner.type,
    order: index + 1,
  })),
  ...tracks.map((track, index) => ({
    _id: id("track", index),
    _type: "track",
    ...track,
  })),
  ...winners.map((winner, index) => ({
    _id: id("winner", index),
    _type: "winner",
    year: winner.year,
    name: winner.name,
    track: winner.track,
    country: winner.country,
    description: winner.description,
  })),
  ...pages.map((page, index) => ({
    _id: id("page", index),
    _type: "page",
    slug: { _type: "slug", current: page.slug },
    title: page.title,
    intro: page.intro,
    body: page.body.map((block, blockIndex) => ({
      _key: `${blockIndex + 1}`,
      _type: "block",
      style: block.type === "h2" ? "h2" : "normal",
      markDefs: [],
      children: [{ _key: "1", _type: "span", marks: [], text: block.text }],
    })),
  })),
];

async function main() {
  console.log(`${dryRun ? "Would import" : "Importing"} ${documents.length} documents.`);

  if (dryRun) return;

  const transaction = client.transaction();
  documents.forEach((document) =>
    transaction.createOrReplace(
      document as Parameters<typeof transaction.createOrReplace>[0],
    ),
  );
  await transaction.commit();
  console.log("Sanity seed migration complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
