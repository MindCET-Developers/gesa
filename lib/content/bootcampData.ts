export interface BootcampSession {
  time: string;
  title: string;
  category?: "keynote" | "panel" | "workshop" | "break" | "networking";
  speakers?: string[];
  description?: string;
}

export interface BootcampSpeaker {
  name: string;
  role: string;
  company: string;
  photo?: string;
  category?: "mindcet" | "investor" | "expert" | "founder";
}

export const bootcampDays: {
  id: string;
  date: string;
  dayNumber: string;
  title: string;
  location: string;
  sessions: BootcampSession[];
}[] = [
  {
    id: "day-1",
    dayNumber: "Day 01",
    date: "January 19",
    title: "Global Ecosystems & Market Readiness",
    location: "Cooley — 22 Bishopsgate, London EC2N 4BQ",
    sessions: [
      {
        time: "09:30",
        title: "GESAwards: The Largest Global EdTech Network",
        category: "keynote",
        speakers: ["Cecilia Waismann"],
        description: "Opening keynote on the global scale, reach, and vision of the GESAwards community across 155 countries.",
      },
      {
        time: "10:15",
        title: "EdTech Fast Forward",
        category: "keynote",
        speakers: ["Avi Warshavsky"],
        description: "Navigating market shifts, technological disruption, and long-term value creation in global EdTech.",
      },
      {
        time: "11:00",
        title: "Networking — Getting to Know YOU",
        category: "networking",
        speakers: ["Ilan Ben Yaakov", "Ran Magen"],
        description: "Interactive session connecting cohort founders with peers, regional semi-finalists, and partners.",
      },
      {
        time: "11:45",
        title: "EdTech for Leadership Wellbeing: Supporting Those at the Top When It Matters Most",
        category: "keynote",
        speakers: ["Lord Jim Knight"],
        description: "Essential perspectives on founder resilience, leadership strain, and mental health in high-stakes environments.",
      },
      {
        time: "12:15",
        title: "EdTech Investment Today: Signals from a Changing Market",
        category: "keynote",
        speakers: ["Benoit Wirz"],
        description: "Actionable venture intelligence on valuation realities, capital allocation, and current LP priorities.",
      },
      {
        time: "12:30 – 13:30",
        title: "Lunch & Informal Networking",
        category: "break",
        description: "Curated lunch break with cohort founders and partner representatives.",
      },
      {
        time: "13:30",
        title: "Panel of Investors",
        category: "panel",
        speakers: ["Victoria Throen Longhi", "Benoit Wirz"],
        description: "Direct discussion on what top-tier global venture firms look for before writing checks.",
      },
      {
        time: "14:15",
        title: "Go to Market: Building EdTech on Proof, Not Hope",
        category: "workshop",
        speakers: ["Michael Forshaw"],
        description: "Frameworks for validating educational efficacy, institutional procurement proof-points, and sustainable pipelines.",
      },
      {
        time: "15:00",
        title: "Designing Education Kids Actually Want",
        category: "panel",
        speakers: ["Amanda Slavin", "Heather Lyons", "Houtan Froushan"],
        description: "Pedagogy meets gamification and authentic engagement in modern K-12 learning experiences.",
      },
      {
        time: "15:45",
        title: "EdTech Driving Dynamic Corporate Upskilling",
        category: "workshop",
        speakers: ["Lucian Cosinschi", "Wayne Holmes"],
        description: "How workforce trends, continuous reskilling, and enterprise L&D create lucrative B2B expansion opportunities.",
      },
      {
        time: "16:15",
        title: "Built to Invest: Getting Market-Ready and Protecting What Matters",
        category: "panel",
        speakers: ["Katie Lee Carey", "Helen Pantelides", "Aaron Archer", "Leo Spicer-Phelps"],
        description: "Legal structuring, IP protection, cross-border expansion, and regulatory compliance by Cooley LLP experts.",
      },
      {
        time: "17:00",
        title: "Future-Proofing Your Business: Compliance, HR and M&A Readiness",
        category: "workshop",
        speakers: ["Russell Anderson", "Rita Sobral", "Caroline Hobson", "Chris Stack"],
        description: "Navigating international labor laws, data privacy (GDPR / COPPA), and readiness for future acquisitions.",
      },
      {
        time: "17:45",
        title: "One Region, Many Markets: Understanding Asia's Rapid Transformation",
        category: "panel",
        speakers: ["Valeriy Platonov", "Seonghye Yoon", "Norihisa Wada", "Glenn Low"],
        description: "Strategic entryways, regulatory specifics, and consumer nuances across East & Southeast Asian EdTech markets.",
      },
      {
        time: "18:30",
        title: "Dynamic Roundtables Led by Industry Experts",
        category: "networking",
        speakers: ["Pierre-Antoine Ullmo", "Norihisa Wada", "Michael Forshaw", "Jitske van Os", "Tamas Haiman"],
        description: "Small breakout circles tackling localized growth challenges, fundraising roadblocks, and partnership opportunities.",
      },
    ],
  },
  {
    id: "day-2",
    dayNumber: "Day 02",
    date: "January 20",
    title: "AI Frontier, Global Scaling & Investor Roundtables",
    location: "Cooley — 22 Bishopsgate, London EC2N 4BQ",
    sessions: [
      {
        time: "09:30",
        title: "Welcome Coffee & Day 2 Kickoff",
        category: "break",
        description: "Morning gathering with tea, coffee, and cohort discussions.",
      },
      {
        time: "10:00",
        title: "HolonIQ: EdTech Global Market Intelligence",
        category: "keynote",
        speakers: ["Meg Hamel"],
        description: "Data-driven global macro trends, funding flows, and regional growth trajectories in education technology.",
      },
      {
        time: "10:45",
        title: "Step Into the Spotlight: The Power of the Founder Brand",
        category: "workshop",
        speakers: ["Elinor Honigstein", "Ilan Ben Yaakov"],
        description: "Positioning founding stories, building executive presence, and amplifying voice across media and communities.",
      },
      {
        time: "11:30",
        title: "Women Who Built EdTech Businesses",
        category: "panel",
        speakers: [
          "Anna Cejudo",
          "Morayo Ojikutu",
          "Yana Crispil",
          "Anna Moustakas",
          "Yesim Ozsoz",
          "Shweta Homji",
          "Irit Touitou",
          "Giannina Honorio Heredia",
        ],
        description: "High-impact stories, fundraising realities, resilience, and operational scale from women entrepreneurs at the forefront.",
      },
      {
        time: "12:15",
        title: "Not Just Gimmicks: The Real Power of AI Avatars in EdTech",
        category: "workshop",
        speakers: ["Alan Bekker"],
        description: "Deep dive into generative avatars, scalable personalized video instruction, and human-like tutoring interfaces.",
      },
      {
        time: "12:45 – 13:45",
        title: "Lunch Break",
        category: "break",
        description: "Relaxed lunch and one-on-one founder catchups.",
      },
      {
        time: "13:45",
        title: "Hype, Hope, and Hard Truths: AI in EdTech",
        category: "panel",
        speakers: ["Daniel Landau", "AI for Learning", "Cognitii", "Mathew", "Pladdra", "Logbook"],
        description: "Pragmatic startup showcase: separating real classroom utility from short-lived generative AI wrappers.",
      },
      {
        time: "14:30",
        title: "High Growth, High Change: Capturing Opportunity in LATAM & Africa",
        category: "panel",
        speakers: ["Ernest Gavor", "Alex Paiva", "Fernando Valenzuela"],
        description: "Market penetration, payment infrastructure, and mobile-first adoption in rapidly evolving emerging continents.",
      },
      {
        time: "15:15",
        title: "Europe's Growing EdTech Market",
        category: "panel",
        speakers: ["Pierre-Antoine Ullmo", "Félix López Capel", "Matteo Bagnato"],
        description: "Cross-border expansion within the EU, navigating public school procurement, and private accelerator backing.",
      },
      {
        time: "16:00",
        title: "What Gets Funded and Why",
        category: "panel",
        speakers: ["Matt Johnson", "Melody Lang", "Monique Malcolm-Hay", "Tamas Haiman"],
        description: "Critical signals: unit economics, distribution moats, churn benchmarks, and defensible tech advantages.",
      },
      {
        time: "16:45",
        title: "Investors & Funders Round Tables",
        category: "workshop",
        speakers: [
          "Vincent Fung",
          "Stephen Jull",
          "Matt Johnson",
          "Melody Lang",
          "Monique Malcolm-Hay",
          "Norihisa Wada",
          "Avi Warshavsky",
        ],
        description: "Intimate pitch feedback, fast-paced Q&A, and direct feedback loops between finalists and institutional investors.",
      },
      {
        time: "17:30 – 20:00",
        title: "Cooley & EdTech Hub Invite: GESAwards Network Drinks",
        category: "networking",
        speakers: ["All Bootcamp Participants"],
        description: "Exclusive evening reception, cocktail networking, and celebration at Cooley's 22 Bishopsgate panoramic terrace.",
      },
    ],
  },
];

const wixSquare = (id: string, ext = "jpg", size = 256) =>
  `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_${size},h_${size},al_c,q_85,enc_avif,quality_auto/photo.${ext}`;

export const bootcampSpeakers: BootcampSpeaker[] = [
  {
    name: "Avi Warshavsky",
    role: "CEO",
    company: "MindCET",
    photo: "https://static.wixstatic.com/media/c2de03_c8cb12108ef74850b8da8f9bc9b60bbc~mv2_d_4500_3000_s_4_2.jpg/v1/fill/w_256,h_256,al_c,q_85,enc_avif,quality_auto/photo.jpg",
    category: "mindcet",
  },
  { name: "Cecilia Waismann", role: "VP", company: "MindCET", category: "mindcet" },
  { name: "Lord Jim Knight", role: "Director", company: "Suklaa Ltd", category: "expert" },
  { name: "Benoit Wirz", role: "Founding Partner", company: "Brighteye VC", category: "investor" },
  { name: "Meg Hamel", role: "VP", company: "HolonIQ", category: "expert" },
  {
    name: "Victoria Throen Longhi",
    role: "Investor",
    company: "Owl Ventures",
    photo: wixSquare("69f6a1_207611d5313246d9a0bc9cc0068779d5"),
    category: "investor",
  },
  { name: "Irit Touitou", role: "CEO", company: "CET", category: "expert" },
  { name: "Alan Bekker", role: "CTO", company: "Kaltura", category: "expert" },
  {
    name: "Stephen Jull",
    role: "Venture Partner",
    company: "Emerge Education",
    photo: wixSquare("69f6a1_6735a970f0f642ebb06b01e345e07fce"),
    category: "investor",
  },
  { name: "Melody Lang", role: "Partner", company: "MPA Capital", category: "investor" },
  { name: "Matt Johnson", role: "Director EdTech", company: "Oppenheimer Fund", category: "investor" },
  { name: "Monique Malcolm-Hay", role: "VP", company: "Rethink Capital", category: "investor" },
  { name: "Vincent Fung", role: "Partner", company: "IBIS Capital", category: "investor" },
  {
    name: "Tamas Haiman",
    role: "Co-Founder",
    company: "SuperCharger Ventures",
    photo: wixSquare("69f6a1_fc30e29594414406bcc27f82e852409e"),
    category: "investor",
  },
  {
    name: "Pierre-Antoine Ullmo",
    role: "CEO",
    company: "TYME EDUCATION",
    photo: wixSquare("69f6a1_aaec69dd86084f07830a81963ea0b88d", "png"),
    category: "expert",
  },
  { name: "Michael Forshaw", role: "CEO", company: "EdTech Impact", category: "founder" },
  {
    name: "Amanda Slavin",
    role: "Founder",
    company: "The Future Frequency",
    photo: wixSquare("69f6a1_eece792df9ba464d96df87e768f95609", "png"),
    category: "founder",
  },
  { name: "Wayne Holmes", role: "Professor AI", company: "UCL", category: "expert" },
  {
    name: "Fernando Valenzuela",
    role: "CEO",
    company: "Edlatam Alliance",
    photo: wixSquare("69f6a1_99aac115650a4c9f87a816eea2cb2344"),
    category: "expert",
  },
  {
    name: "Félix López Capel",
    role: "Director",
    company: "SEK Lab EdTech Accelerator",
    photo: wixSquare("69f6a1_a16dbb6de09845f48b714ea4220d1038", "png"),
    category: "expert",
  },
  {
    name: "Norihisa Wada",
    role: "Director",
    company: "Global EdTech Acceleration Committee",
    photo: "https://static.wixstatic.com/media/c2de03_dbe340d4470f4e048b2a489fc2e98785~mv2_d_2832_4256_s_4_2.jpg/v1/fill/w_256,h_256,al_c,q_85,enc_avif,quality_auto/photo.jpg",
    category: "expert",
  },
  { name: "Elinor Honigstein", role: "Global Marketing", company: "WeWork", category: "expert" },
  { name: "Ilan Ben Yaakov", role: "VP Learning Experience", company: "MindCET", category: "mindcet" },
  { name: "Ran Magen", role: "VP Product Innovation", company: "MindCET", category: "mindcet" },
  {
    name: "Alex Paiva",
    role: "Head of Products",
    company: "Positivo Tecnologia",
    photo: wixSquare("69f6a1_f4a360602483426281e8457987590dd1", "jpeg"),
    category: "expert",
  },
  {
    name: "Ernest Gavor",
    role: "Co-Founder",
    company: "Ghana Society Edu Tech",
    photo: wixSquare("69f6a1_caa440e9895649ada07a33df8f80f019"),
    category: "founder",
  },
  { name: "Houtan Froushan", role: "Programme Director", company: "UCL EdTech Labs", category: "expert" },
  {
    name: "Jitske van Os",
    role: "Managing Director",
    company: "Dutch EdTech",
    photo: wixSquare("69f6a1_11e4fe3c19e7431893a1d375d6c09d79"),
    category: "expert",
  },
  { name: "Heather Lyons", role: "Founder", company: "Kita", category: "founder" },
  { name: "Morayo Ojikutu", role: "Founder", company: "Flow", category: "founder" },
  { name: "Daniel Landau", role: "Founder & CEO", company: "Avris", category: "founder" },
  {
    name: "Kate Lee Carey",
    role: "Partner",
    company: "Cooley LLP",
    photo: wixSquare("69f6a1_cdde81898f524b57afe4ad4361018482", "png"),
    category: "expert",
  },
  { name: "Aaron Archer", role: "Partner", company: "Cooley LLP", category: "expert" },
  { name: "Chris Stack", role: "Partner", company: "Cooley LLP", category: "expert" },
  {
    name: "Patrick Hayes",
    role: "Chief Development Officer",
    company: "Times Higher Education",
    photo: wixSquare("69f6a1_8f7d5e2dca83462d80112e1ac80b0a1b"),
    category: "expert",
  },
  {
    name: "Valeriy Platonov",
    role: "Co-organizer",
    company: "EdCrunch",
    photo: wixSquare("69f6a1_c75befe1895c43b29ba38921b111cf17", "png"),
    category: "expert",
  },
  { name: "Seonghye Yoon", role: "CRO", company: "Learningspark", category: "founder" },
];
