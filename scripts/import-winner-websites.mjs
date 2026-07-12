import { getCliClient } from "sanity/cli";

if (!process.env.SANITY_API_TOKEN) {
  throw new Error("SANITY_API_TOKEN is missing. Add it to .env.local before importing.");
}

const client = getCliClient({
  apiVersion: "2024-10-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Links published by the original GESAwards winners archive. Missing or
// obviously misdirected links in the Wix pages are intentionally omitted.
const websites = [
  [2025, "CARTEDO", "https://www.cartedo.com"],
  [2025, "PLADDRA", "https://app.pladdra.com"],
  [2025, "CBOARD", "https://www.cboard.io"],
  [2025, "YIYA", "https://www.yiyasolutions.org"],
  [2025, "MULTI FOR ALL", "https://gomulti.org"],
  [2025, "INCLUEDU", "https://incluedu.org"],
  [2025, "ARTCENTRICA", "https://www.artcentrica.com"],
  [2025, "CLASSROOM ADVENTURE", "https://www.classroom-adventure.com"],
  [2025, "GOEDDY (TINYTAP)", "https://www.goeddy.com"],
  [2025, "EKIDZ", "https://ekidzwebappdewest.azurewebsites.net"],
  [2025, "CAPIT LEARNING", "https://www.capitlearning.com"],
  [2024, "Solfeg.io", "https://solfeg.io"],
  [2024, "eldes", "https://www.somoseldes.com"],
  [2024, "STEMpedia", "https://thestempedia.com"],
  [2024, "Unlocked Labs", "https://unlockedlabs.org"],
  [2024, "Nick Academy", "https://nick-academy.maven-dev.co.il"],
  [2023, "Nolej", "https://nolej.io"],
  [2023, "Storywizard.ai", "https://www.storywizard.ai"],
  [2023, "Angaza Elimu", "https://angazaelimu.com"],
  [2023, "SignLab", "https://signlab.co"],
  [2023, "Arvore", "https://www.arvore.com.br"],
  [2021, "SkillGym", "https://www.skillgym.com"],
  [2021, "EarlyBird Education", "https://earlybirdeducation.com"],
  [2021, "Grapho Game", "https://www.graphogame.com"],
  [2021, "Zenius Education", "https://www.zenius.net"],
  [2020, "Slang App", "https://slangapp.com"],
  [2020, "Key2Enable", "https://key2enable.com"],
  [2020, "Bookful", "https://inceptionxr.com"],
  [2020, "Pearprogramming", "https://www.pearprogramming.eu"],
  [2020, "Centrica", "https://www.centrica.it"],
  [2020, "Movva", "https://movva.tech"],
  [2020, "Ment.io", "https://www.ment.io"],
  [2020, "Shmonster", "https://www.shmonster.com"],
  [2020, "PleiQ", "https://pleiq.com"],
  [2019, "Genial.ly", "https://www.genial.ly"],
  [2019, "MyBuddy.AI", "https://mybuddy.ai"],
  [2019, "Kaligo", "https://www.kaligo-apps.com"],
  [2019, "Blackbullion", "https://www.blackbullion.com"],
  [2018, "UPTALE", "https://www.uptale.io"],
  [2018, "LYFTA", "https://www.lyfta.com"],
  [2018, "INSIMU", "https://insimu.com"],
  [2018, "EDUTAPPS", "https://www.maphi.app"],
];

let transaction = client.transaction();
let updated = 0;

for (const [year, name, website] of websites) {
  const documents = await client.fetch(
    `*[_type == "winner" && year == $year && name == $name]{_id}`,
    { year, name },
  );
  for (const document of documents) {
    transaction = transaction.patch(document._id, (patch) => patch.set({ website }));
    updated += 1;
  }
}

await transaction.commit();
const total = await client.fetch(`count(*[_type == "winner" && defined(website)])`);
console.log(`Updated ${updated} records; Sanity now has ${total} winners with verified websites.`);
