/* MindCET runs the awards and belongs in the worldwide strip alongside the
 * regional partners, in place of SEK Lab, which no longer partners with us.
 * The worldwide tile reuses the "Powered by" logo asset, a cropped wordmark that
 * fills the 160x64 tile — the square file in public/brand/partners would render
 * as a thumbnail-sized mark. Run with --dry to print the mutations only.
 *
 * Rollback: the SEK Lab document is in scripts/partners-backup-2026-09-08.json;
 * its image asset stays in Sanity, so a createOrReplace of that JSON restores it. */
import { query, mutate } from "./sanity-lib.mjs";

const DRY = process.argv.includes("--dry");
const MINDCET_ID = "gesawards-partner-worldwide-mindcet-labs";
const SEK_ID = "gesawards-partner-worldwide-sek-lab";

const poweredBy = await query(
  '*[_type=="partner" && type=="powered-by" && name match "MindCET*"][0]{name,"asset":logo.asset._ref,url}'
);
if (!poweredBy?.asset) throw new Error("no MindCET logo asset on the powered-by partner");

const mutations = [
  {
    createOrReplace: {
      _id: MINDCET_ID,
      _type: "partner",
      name: poweredBy.name,
      type: "worldwide",
      knockout: false,
      url: poweredBy.url || "https://mindcet.io",
      logo: { _type: "image", asset: { _type: "reference", _ref: poweredBy.asset } },
    },
  },
  { delete: { id: SEK_ID } },
];

if (DRY) {
  console.log(JSON.stringify(mutations, null, 1));
} else {
  await mutate(mutations);
  console.log(`added ${poweredBy.name} to the worldwide partners, removed SEK Lab`);
}

// Renumber the whole group so MindCET lands in alphabetic order rather than last.
const worldwide = await query('*[_type=="partner" && type=="worldwide"]{_id,name}');
worldwide.sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
if (DRY) {
  console.log("\norder would be:");
  worldwide.forEach((p, i) => console.log(` ${10 + i}\t${p.name}`));
} else {
  await mutate(worldwide.map((p, i) => ({ patch: { id: p._id, set: { order: 10 + i } } })));
  console.log("reordered", worldwide.length, "worldwide partners");
}
