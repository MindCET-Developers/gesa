/* Cecilia's request (17 Nov 2026): the "Prizes offered by our partners" row on the
 * home page drops Amazon Web Services and shows DOHE, EduEvidence and Seventh
 * Sibling instead. The logos are the original files she supplied, already in
 * public/. Run from the repo root with .env.local holding a Sanity write token:
 *
 *   node scripts/swap-aws-for-prize-sponsors.mjs --dry   # print mutations only
 *   node scripts/swap-aws-for-prize-sponsors.mjs
 *
 * Rollback: the AWS document (gesawards-partner-5) is in
 * scripts/partners-backup-2026-09-08.json; its image asset stays in Sanity, so a
 * createOrReplace of that JSON restores it. */
import { mutate, uploadImage } from "./sanity-lib.mjs";

const DRY = process.argv.includes("--dry");
const AWS_ID = "gesawards-partner-5";

const sponsors = [
  { id: "gesawards-partner-prize-dohe", name: "DOHE", file: "public/brand/partners/dohe.png" },
  { id: "gesawards-partner-prize-eduevidence", name: "EduEvidence", file: "public/brand/sponsors/eduevidence.png" },
  {
    id: "gesawards-partner-prize-seventh-sibling",
    name: "Seventh Sibling",
    file: "public/brand/sponsors/seventh-sibling.png",
    url: "https://seventhsibling.co.uk/",
  },
];

const mutations = [];
for (const [i, s] of sponsors.entries()) {
  const asset = DRY ? `<upload ${s.file}>` : await uploadImage(s.file);
  mutations.push({
    createOrReplace: {
      _id: s.id,
      _type: "partner",
      name: s.name,
      type: "prize-sponsor",
      order: 5 + i,
      knockout: false,
      ...(s.url ? { url: s.url } : {}),
      logo: { _type: "image", asset: { _type: "reference", _ref: asset } },
    },
  });
}
mutations.push({ delete: { id: AWS_ID } });

if (DRY) {
  console.log(JSON.stringify(mutations, null, 1));
} else {
  await mutate(mutations);
  console.log("removed Amazon Web Services; added", sponsors.map((s) => s.name).join(", "));
}
