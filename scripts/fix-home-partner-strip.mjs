import { query, mutate, uploadImage } from "./sanity-lib.mjs";

const DRY = process.argv.includes("--dry");

// Airtable renamed these partners; the logo files are byte-identical, so these are
// the same organisations under new names.
const RENAMES = {
  "gesawards-partner-worldwide-dohe": "DOHE - EdTech HUB",
  "gesawards-partner-worldwide-edtech-italy": "EdTech Italia",
  "gesawards-partner-worldwide-esperanza": "Esperanza Life",
  "gesawards-partner-worldwide-xedu": "Nordic",
};

const step1 = [];
for (const [_id, name] of Object.entries(RENAMES)) {
  step1.push({ patch: { id: _id, set: { name } } });
}

// MindCET Labs belongs in both groups: it runs the awards and it is a partner in
// its own right, so it appears under "Powered by" and in the worldwide strip.
// See scripts/swap-sek-lab-for-mindcet.mjs, which puts it there in place of SEK Lab.

// EdTech HUB has no `type`, so the home-page strip filters it out of every group.
step1.push({ patch: { id: "977d9e0f-c75e-4428-9836-6f884df72fdb", set: { type: "worldwide" } } });

if (DRY) {
  console.log("step1 mutations:", JSON.stringify(step1, null, 1));
} else {
  // The home-page strip wants the wide wordmark; the circle tiles keep the square icon
  // via scripts/circle-logo-overrides.json.
  const franceAsset = await uploadImage("public/brand/partners/edtech-france.png");
  console.log("uploaded France wordmark:", franceAsset);
  step1.push({
    patch: {
      id: "gesawards-partner-worldwide-edtech-france",
      set: { logo: { _type: "image", asset: { _type: "reference", _ref: franceAsset } } },
    },
  });

  const ltAsset = await uploadImage("public/brand/partners/edtech-lithuania.png");
  console.log("uploaded EdTech Lithuania:", ltAsset);
  step1.push({
    createIfNotExists: {
      _id: "gesawards-partner-worldwide-edtech-lithuania",
      _type: "partner",
      name: "EdTech Lithuania",
      type: "worldwide",
      knockout: false,
      logo: { _type: "image", asset: { _type: "reference", _ref: ltAsset } },
    },
  });

  await mutate(step1);
  console.log("step1 applied:", step1.length, "mutations");
}

// Step 2: renumber every worldwide partner alphabetically, so nothing is stranded
// at the end for want of an `order`.
const worldwide = await query('*[_type=="partner" && type=="worldwide"]{_id,name}');
worldwide.sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
const step2 = worldwide.map((p, i) => ({ patch: { id: p._id, set: { order: 10 + i } } }));
if (DRY) {
  console.log("\nstep2 order (would be):");
  worldwide.forEach((p, i) => console.log(` ${10 + i}\t${p.name}`));
} else {
  await mutate(step2);
  console.log("step2 applied: reordered", step2.length, "worldwide partners");
}
