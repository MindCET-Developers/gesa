import { getCliClient } from "sanity/cli";

if (!process.env.SANITY_API_TOKEN) {
  throw new Error("SANITY_API_TOKEN is missing. Add it to .env.local before importing.");
}

const client = getCliClient({
  apiVersion: "2024-10-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const pages = {
  2025: "copy-of-2024-winners",
  2024: "copy-of-2023-winners",
  2023: "2023-winners",
  2022: "2022-winners",
  2021: "2021-winners",
  2020: "2020-winners",
  2019: "2019-winners",
  2018: "winners2018",
};

const mappings = [
  [2025, "CARTEDO", "Best EdTech Solution", "Cartedo_edited.png"],
  [2025, "PLADDRA", "Innovation", "Pladdra_edited.png"],
  [2025, "CBOARD", "Best Social Impact Solution", "7d9067_b1b387892ad740f5b3df8776cdb95e2a~mv2.png"],
  [2025, "YIYA", "Best Emerging Markets Solution", "Yiya.png"],
  [2025, "MULTI FOR ALL", "Popular Vote", "7d9067_2bebda433d304a178667ba08bc4eb829~mv2.png"],
  [2025, "INCLUEDU", "Female Founders Special Track", "image_edited.jpg"],
  [2025, "ARTCENTRICA", "Creativity Special Track", "ArtCentrica.png"],
  [2025, "CLASSROOM ADVENTURE", "R&D Special Track", "Classroom Adventure.png"],
  [2025, "GOEDDY (TINYTAP)", "Language Literacy Special Track", "Go Eddy.png"],
  [2025, "EKIDZ", "Language Literacy Special Track", "ekidz.png"],
  [2025, "CAPIT LEARNING", "Language Literacy Special Track", "Capit.png"],
  [2025, "MULTI FOR ALL", "Language Literacy Special Track", "7d9067_2bebda433d304a178667ba08bc4eb829~mv2.png"],
  [2024, "Solfeg.io", "Best EdTech Solution", "offical-logo-solfegio-black.png"],
  [2024, "eldes", "Innovation", "LATAM_edited_edited.png"],
  [2024, "STEMpedia", "Emerging Markets", "STEMpedia-2.png"],
  [2024, "Unlocked Labs", "Social Impact", "usa_edited.png"],
  [2024, "Nick Academy", "People's Choice", "nick academy2.png"],
  [2023, "Nolej", "Best EdTech Solution", "NOLEJ.png"],
  [2023, "Storywizard.ai", "Innovation", "SW.png"],
  [2023, "Angaza Elimu", "Emerging Markets", "ANGAZA.png"],
  [2023, "SignLab", "Social Impact", "BoTlxHPAhajfODrGYK_T9ooM4d6mJKTtzyFCXeh2p9g.png"],
  [2023, "Arvore", "People's Choice", "ARVORE.png"],
  [2023, "mAIk", "Bridging the AI Gap", "maik (002).png"],
  [2023, "Skillsvista", "HR Track", "3T3k3msp_XA0WE66VIN8ZD5DIfjGoCRYeDO5M-2H9xA.png"],
  [2023, "Jool", "R&D Cutting-Edge Learning Solutions", "Op3NFfpo3o1ooNdr4H3HN8a_TNbXOLZxdB3jsciCAMo.jpg"],
  [2022, "Noodle Factory", "Best EdTech Solution", "Noodle Factory - 500 x 500.png"],
  [2022, "Arcana Instruments", "Innovation", "Untitled.png"],
  [2022, "InspireLearn", "Emerging Markets", "Logo Orange.png"],
  [2022, "{Parças} Developers School®", "Social Impact", "Parças_rosa_fundo_transparente.png"],
  [2022, "Storybook", "People's Choice", "Storybook_logo.png"],
  [2022, "Zenius Education", "Popular Vote", "b6c873b3.png"],
  [2022, "ADA Intelligence", "Safe and Trustworthy AI", "ADA Intelligente.png"],
  [2022, "Audemic", "Next Gen Higher Education", "Logo-Audemic-ISOTIPOS-35.png"],
  [2022, "Evidence-Driven Education Research Council", "R&D Cutting-Edge Learning Solutions", "EDE.png"],
  [2022, "As Simple As That", "Tarboot – Re-booting Cultural Treasures", "logo-big.png"],
  [2022, "Neuro Mindset", "A.I. Enabling Self-Regulated Learning", "p9orWK-oAjTc3rRqm9iraIF74Sv3HP8xxSJCV_gNILA_jfif.jpg"],
  [2022, "DreamShaper", "Connect, Transform, Achieve!", "dreamshaper_logo_no.png"],
  [2021, "SkillGym", "Winner", "Skillgym.png"],
  [2021, "EarlyBird Education", "First Runner-up", "early-bird-main-hd.png"],
  [2021, "Grapho Game", "Second Runner-up", "01e87cf0.png"],
  [2021, "Zenius Education", "Popular Vote", "b6c873b3.png"],
  [2021, "Beagle Learning", "Next Gen Higher Education", "7f90669affe181250af562df2e75b50a66065851-1800x523.png"],
  [2021, "Classum", "Hybrid Learning – Personalize it, Print it!", "33633a7e.png"],
  [2021, "9ijaKids", "Leveraging EdTech to Address Learning Differences", "01c86c1e.png"],
  [2021, "Mosabi", "That’s Geography! Cultivating Empathy for the Earth", "e03ee339.png"],
  [2021, "LearnWiz", "R&D Cutting-Edge Learning Solutions", "image.png"],
  [2021, "ISpeak", "Voice Assistants Empowering Learning", "57327614.png"],
  [2021, "Sharpen", "The New Age Learners", "SharpenYellowGradientBTWITHOUTLINE.png"],
  [2021, "Lessonspace", "Unboxing School", "d0d11c7d.png"],
  [2020, "Slang App", "Winner", "slang_logo.png"],
  [2020, "Key2Enable", "First Runner-up", "719a786d.png"],
  [2020, "Bookful", "Second Runner-up", "7e71f8c4.png"],
  [2020, "Pearprogramming", "Popular Vote", "88358dde.png"],
  [2020, "Centrica", "That’s Geography – Special Track", "logoslogan-1.png"],
  [2020, "Movva", "School Dropouts – Special Track", "MOVVA_LOGO.png"],
  [2020, "Ment.io", "R&D Innovation – Special Track", "ment_logo@2x-1.png"],
  [2020, "Shmonster", "Learn & Connect – Special Track", "shmonsterLogo_tif.png"],
  [2020, "PleiQ", "EdTech Post COVID-19 – Special Track", "pleiq_logo_square.png"],
  [2019, "Genial.ly", "Winner", "genialy.png"],
  [2019, "MyBuddy.AI", "Innovation Winner", "buddy.png"],
  [2019, "Kaligo", "Runner-up", "0.png"],
  [2019, "Blackbullion", "Runner-up", "blackbullion gesa19.jpg"],
  [2018, "UPTALE", "First Place", "69f6a1_a724e96ee25f4506811223b583e8c825~mv2.png"],
  [2018, "LYFTA", "Second Place", "Lyftablack.png"],
  [2018, "INSIMU", "Third Place", "Insimu_logo.png"],
  [2018, "Nikkei Innovation Lab", "R&D Track", "Nikkei.jpg"],
  [2018, "EDUTAPPS", "Innovation Track", "Edutapps.jpg"],
];

const mediaByYear = new Map();
const uploadedByUrl = new Map();

async function getPageMedia(year) {
  if (mediaByYear.has(year)) return mediaByYear.get(year);
  const pageUrl = `https://www.globaledtechawards.org/${pages[year]}`;
  const response = await fetch(pageUrl, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!response.ok) throw new Error(`Could not fetch ${pageUrl}: ${response.status}`);
  const html = await response.text();
  const urls = [...html.matchAll(/https:\/\/static\.wixstatic\.com\/media\/[^"'\\ ]+/g)]
    .map(([url]) => url.replaceAll("&amp;", "&"));
  mediaByYear.set(year, urls);
  return urls;
}

function originalUrl(url) {
  const match = decodeURIComponent(url).match(/https:\/\/static\.wixstatic\.com\/media\/([^/]+)/);
  if (!match) throw new Error(`Invalid Wix media URL: ${url}`);
  return `https://static.wixstatic.com/media/${match[1]}`;
}

async function uploadLogo(year, filename) {
  const urls = await getPageMedia(year);
  const match = urls.find((url) => decodeURIComponent(url).split("/").pop().split("?")[0] === filename);
  if (!match) throw new Error(`${year}: could not find ${filename}`);
  const url = originalUrl(match);
  if (uploadedByUrl.has(url)) return uploadedByUrl.get(url);

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not download ${url}: ${response.status}`);
  const asset = await client.assets.upload("image", Buffer.from(await response.arrayBuffer()), {
    filename,
    source: { id: url, name: "GESAwards winners archive", url },
  });
  uploadedByUrl.set(url, asset._id);
  return asset._id;
}

let updated = 0;
const failures = [];

for (const [year, name, track, filename] of mappings) {
  try {
    const document = await client.fetch(
      `*[_type == "winner" && year == $year && name == $name && track == $track][0]{_id}`,
      { year, name, track },
    );
    if (!document?._id) throw new Error("winner document not found");
    const assetId = await uploadLogo(year, filename);
    await client.patch(document._id).set({
      logo: { _type: "image", asset: { _type: "reference", _ref: assetId } },
    }).commit();
    updated += 1;
    console.log(`${updated}/${mappings.length} ${year} ${name}`);
  } catch (error) {
    failures.push({ year, name, message: error.message });
    console.error(`FAILED ${year} ${name}: ${error.message}`);
  }
}

const withLogos = await client.fetch(`count(*[_type == "winner" && defined(logo.asset)])`);
console.log(`Linked ${updated} records; Sanity now has ${withLogos} winners with logos.`);
if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exitCode = 1;
}
