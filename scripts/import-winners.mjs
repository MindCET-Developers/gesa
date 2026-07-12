import { getCliClient } from "sanity/cli";

const source = "https://www.globaledtechawards.org";

const winners = [
  [2025, "CARTEDO", "Best EdTech Solution"],
  [2025, "PLADDRA", "Innovation"],
  [2025, "CBOARD", "Best Social Impact Solution"],
  [2025, "YIYA", "Best Emerging Markets Solution"],
  [2025, "MULTI FOR ALL", "Popular Vote"],
  [2025, "INCLUEDU", "Female Founders Special Track"],
  [2025, "ARTCENTRICA", "Creativity Special Track"],
  [2025, "CLASSROOM ADVENTURE", "R&D Special Track"],
  [2025, "GOEDDY (TINYTAP)", "Language Literacy Special Track"],
  [2025, "EKIDZ", "Language Literacy Special Track"],
  [2025, "CAPIT LEARNING", "Language Literacy Special Track"],
  [2025, "MULTI FOR ALL", "Language Literacy Special Track"],

  [2024, "Solfeg.io", "Best EdTech Solution"],
  [2024, "eldes", "Innovation"],
  [2024, "STEMpedia", "Emerging Markets"],
  [2024, "Unlocked Labs", "Social Impact"],
  [2024, "Nick Academy", "People's Choice"],

  [2023, "Nolej", "Best EdTech Solution"],
  [2023, "Storywizard.ai", "Innovation"],
  [2023, "Angaza Elimu", "Emerging Markets"],
  [2023, "SignLab", "Social Impact"],
  [2023, "Arvore", "People's Choice"],
  [2023, "mAIk", "Bridging the AI Gap"],
  [2023, "Skillsvista", "HR Track"],
  [2023, "Jool", "R&D Cutting-Edge Learning Solutions"],

  [2022, "Noodle Factory", "Best EdTech Solution"],
  [2022, "Arcana Instruments", "Innovation"],
  [2022, "InspireLearn", "Emerging Markets"],
  [2022, "{Parças} Developers School®", "Social Impact"],
  [2022, "Storybook", "People's Choice"],
  [2022, "Zenius Education", "Popular Vote"],
  [2022, "ADA Intelligence", "Safe and Trustworthy AI"],
  [2022, "Audemic", "Next Gen Higher Education"],
  [2022, "Evidence-Driven Education Research Council", "R&D Cutting-Edge Learning Solutions"],
  [2022, "As Simple As That", "Tarboot – Re-booting Cultural Treasures"],
  [2022, "Neuro Mindset", "A.I. Enabling Self-Regulated Learning"],
  [2022, "DreamShaper", "Connect, Transform, Achieve!"],

  [2021, "SkillGym", "Winner"],
  [2021, "EarlyBird Education", "First Runner-up"],
  [2021, "Grapho Game", "Second Runner-up"],
  [2021, "Zenius Education", "Popular Vote"],
  [2021, "Beagle Learning", "Next Gen Higher Education"],
  [2021, "Classum", "Hybrid Learning – Personalize it, Print it!"],
  [2021, "9ijaKids", "Leveraging EdTech to Address Learning Differences"],
  [2021, "Mosabi", "That’s Geography! Cultivating Empathy for the Earth"],
  [2021, "LearnWiz", "R&D Cutting-Edge Learning Solutions"],
  [2021, "ISpeak", "Voice Assistants Empowering Learning"],
  [2021, "Sharpen", "The New Age Learners"],
  [2021, "Lessonspace", "Unboxing School"],

  [2020, "Slang App", "Winner", undefined, "Enables organizations to create custom professional-English development programs using AI-driven software to automate course creation across a diverse array of fields."],
  [2020, "Key2Enable", "First Runner-up", undefined, "Empowers people with disabilities to develop skills, navigate computers and audiovisual activities, and helps paralyzed individuals write and vocalize."],
  [2020, "Bookful", "Second Runner-up", undefined, "An augmented-reality and 3D reading and educational games app featuring hundreds of titles from leading publishers."],
  [2020, "Pearprogramming", "Popular Vote", undefined, "PearUp is digital game-based learning for computer science, where students progress according to their individual learning style, pace and goals."],
  [2020, "Centrica", "That’s Geography – Special Track", undefined, "ArtCentrica lets teachers and students explore, compare, measure and correlate artworks inside and outside the classroom."],
  [2020, "Movva", "School Dropouts – Special Track", undefined, "Motivates students to engage in school activities through frequent reminders and encouragement sent to students and caregivers."],
  [2020, "Ment.io", "R&D Innovation – Special Track", undefined, "An AI-based discussion board designed to facilitate deeper and more rational discussions among students in hybrid environments."],
  [2020, "Shmonster", "Learn & Connect – Special Track", undefined, "PuppetMaster enables children to make animated videos from their own artwork and learn while doing it."],
  [2020, "PleiQ", "EdTech Post COVID-19 – Special Track", undefined, "Uses mobile AR, MR and VR for curriculum-based activities through interactive books and cubes, with adaptive assessment and personalized reports."],

  [2019, "Genial.ly", "Winner", "Spain", "A content-creation tool for building interactive learning resources and digital materials."],
  [2019, "MyBuddy.AI", "Innovation Winner", "Russia", "Helps children practice spoken English by talking with an AI-powered virtual cartoon character in a mobile app."],
  [2019, "Kaligo", "Runner-up", "France", "A handwriting exercise book that can be adapted to individual learners’ needs."],
  [2019, "Blackbullion", "Runner-up", "United Kingdom", "Helps students build the financial capability they need for university and beyond."],

  [2018, "UPTALE", "First Place", "France", "A platform that lets teachers and educators create live, interactive 360° virtual-reality experiences."],
  [2018, "LYFTA", "Second Place", "Finland", "Teaches global citizenship through immersive human stories and original video production."],
  [2018, "INSIMU", "Third Place", "Hungary", "A simulator where doctors can practice clinical diagnostic work, gain experience and learn from mistakes without risk to patients."],
  [2018, "Nikkei Innovation Lab", "R&D Track"],
  [2018, "EDUTAPPS", "Innovation Track"],
];

const slug = (value) =>
  value
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

if (!process.env.SANITY_API_TOKEN) {
  throw new Error("SANITY_API_TOKEN is missing. Add it to .env.local before importing.");
}

const client = getCliClient({
  apiVersion: "2024-10-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
let transaction = client.transaction();

for (const [year, name, track, country, description] of winners) {
  transaction = transaction.createOrReplace({
    _id: `winner-${year}-${slug(name)}-${slug(track)}`,
    _type: "winner",
    name,
    year,
    track,
    ...(country ? { country } : {}),
    ...(description ? { description } : {}),
    sourceUrl: `${source}/${year === 2018 ? "winners2018" : year === 2024 ? "copy-of-2023-winners" : year === 2025 ? "copy-of-2024-winners" : `${year}-winners`}`,
  });
}

const result = await transaction.commit();
console.log(`Imported ${winners.length} verified winner records in transaction ${result.transactionId}.`);

const counts = await client.fetch(`
  *[_type == "winner"]{
    year
  }
`);
const byYear = Object.entries(
  counts.reduce((totals, { year }) => {
    totals[year] = (totals[year] ?? 0) + 1;
    return totals;
  }, {}),
).sort(([a], [b]) => Number(b) - Number(a));
console.log(`Verified ${counts.length} winner records: ${byYear.map(([year, count]) => `${year}=${count}`).join(", ")}.`);
