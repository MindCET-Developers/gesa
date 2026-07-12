import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2024-10-01" });

const trophyUrl =
  "https://static.wixstatic.com/media/69f6a1_789a645b669043f49122a02ee8a948bb~mv2.png/v1/fill/w_230,h_225,al_c,lg_1,q_85,enc_avif,quality_auto/trophy.png";
let trophyAsset = await client.fetch(
  `*[_type == "sanity.imageAsset" && originalFilename == "gesawards-trophy.png"][0]{_id}`,
);
if (!trophyAsset) {
  const trophyResponse = await fetch(trophyUrl);
  if (!trophyResponse.ok) {
    throw new Error(`Could not download the legacy trophy asset: ${trophyResponse.status}`);
  }
  trophyAsset = await client.assets.upload(
    "image",
    Buffer.from(await trophyResponse.arrayBuffer()),
    { filename: "gesawards-trophy.png", contentType: "image/png" },
  );
}
const trophyLogo = {
  _key: "gesawards-trophy",
  name: "GESAwards winner trophy",
  role: "award",
  image: {
    _type: "image",
    asset: { _type: "reference", _ref: trophyAsset._id },
  },
};

const tracks = [
  {
    _id: "gesawards-track-1",
    order: 1,
    title: "Closing the Workforce Skills Gap",
    slug: { _type: "slug", current: "closing-the-workforce-skills-gap" },
    description:
      "The GESAwards Workforce Learning Track addresses the critical global skills gap by focusing on accelerated, continuous workplace learning. With data indicating that nearly 60% of workers will require reskilling by 2030, current corporate strategies and standard software are proving insufficient for the rapid pace of change. To combat this, GESAwards is looking for startup companies that offer innovative learning solutions, so they can be identified and seen by enterprises that need to transform their workforce to stay competitive.",
    benefits: [
      "Global visibility.",
      "A direct connection with industry leaders.",
      "An invitation to join the most prestigious and exclusive EdTech encounter in the world.",
      "A place at the Bett Arena in London.",
    ],
    logos: [trophyLogo],
    sourceUrl:
      "https://www.globaledtechawards.org/closing-the-workforce-skills-gap",
  },
  {
    _id: "gesawards-track-2",
    order: 2,
    title: "Hacking Education with Vibe Coding",
    slug: { _type: "slug", current: "hacking-education-with-vibe-coding" },
    subtitle: "Where creativity meets GenAI to transform learning.",
    description:
      "This Special Track celebrates the trailblazers who are reimagining education through the emerging world of vibe coding: a movement blending intuitive, expressive, and low-friction coding experiences with meaningful learning. Whether it's no-code tools, generative AI, or micro-apps built for impact, this track seeks startups that empower learners and educators to build, create, and solve real problems, without needing a computer science degree. If your product turns passive learners into active creators, or leverages vibe coding platforms to build incredible EdTech solutions, this track is for you.",
    criteria: [
      "Rapid user growth and proven product traction",
      "Creative integration of vibe coding tools (e.g. low-code/AI builders, drag-and-drop logic, no-code automation)",
      "Accessibility for diverse learners, regardless of prior experience",
    ],
    sourceUrl:
      "https://www.globaledtechawards.org/hackingeducationwithvibecoding",
  },
  {
    _id: "gesawards-track-3",
    order: 3,
    title: "Female Founders Track",
    slug: { _type: "slug", current: "female-founders-track" },
    subtitle: "Spotlighting Innovation. Driving Equity.",
    sponsor: "Copper Wire Ventures",
    description:
      "The Female Founders Special Track is a dedicated category within the GESAwards, the world's largest EdTech startup competition. This track was created to address a stark imbalance: while women make up nearly 30% of EdTech founders, they receive only 3.8% of venture funding. We aim to elevate the voices and ventures of women leading the way in education innovation, bringing their ideas to global stages, building meaningful connections, and unlocking the support they need to thrive.",
    criteria: [
      "Female-led or co-founded EdTech startups.",
      "Working on solutions that impact learning, teaching, skills, or workforce development.",
      "At any stage, from early traction to growth.",
      "Demonstrating innovation, scalability, and a clear vision for impact.",
    ],
    benefits: [
      "Cash prize",
      "Global recognition through the GESAwards platform",
      "A chance to pitch at international events and showcases",
      "Exposure to investors, media, and EdTech partners",
      "Tailored mentorship opportunities and strategic guidance",
      "A powerful network of female founders, leaders, and supporters",
      "Inclusion in thought leadership and storytelling campaigns focused on women in EdTech",
    ],
    logos: [trophyLogo],
    sourceUrl: "https://www.globaledtechawards.org/femalefounderstrack",
  },
  {
    _id: "gesawards-track-4",
    order: 4,
    title: "Learning by Creating",
    slug: { _type: "slug", current: "learning-by-creating" },
    subtitle: "The Amichai Witzen Award",
    description:
      "Not every student succeeds on the standard K-12 path. Some learn best by making. Those who struggle in the ordinary system may build real success through what they create. This track seeks early-stage Israeli startups whose products let students learn, grow, and prove themselves through creation: building, designing, producing, inventing, in the digital and the physical world. Creation is not just a way to measure learning - it is how students who don't fit the standard mold, pave their own way to success.",
    benefits: [
      "EBN - Legal",
      "Deloitte - Accounting",
      "Aleph Accounting - CFO, Bookkeeping",
      "NovoDia - EdTech consulting",
    ],
    logos: [trophyLogo],
    sourceUrl: "https://www.globaledtechawards.org/learning-by-creating",
  },
].map((track) => ({ ...track, _type: "track", year: 2026 }));

let transaction = client.transaction();
for (const track of tracks) transaction = transaction.createOrReplace(track);
await transaction.commit();

const imported = await client.fetch(
  `*[_type == "track" && year == 2026] | order(_id asc){
    _id, order, "slug": slug.current, title, subtitle, sponsor, description,
    criteria, benefits, logos[]{name, role, "image": image.asset->url}, sourceUrl
  }`,
);
console.log(JSON.stringify(imported, null, 2));
console.log(`Imported and verified ${imported.length} tracks for 2026.`);
