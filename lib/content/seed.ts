import type {
  HomeContent,
  Judge,
  Partner,
  PrizeCategory,
  RichPage,
  SiteSettings,
  Track,
  Winner,
} from "./types";

/* ----------------------------------------------------------------------------
   Seed content migrated from the live globaledtechawards.org (Wix) site.
   Images currently point at the existing Wix CDN; migrate them into Sanity
   assets (or /public) when the CMS goes live. All copy is editable.
---------------------------------------------------------------------------- */

const AIRTABLE_APPLY =
  "https://airtable.com/appEAyMD4UhcamkNW/shrfEPmUEerujTDnf";

/** Build a square Wix CDN image URL (crops to fill). */
const wixSquare = (id: string, ext = "jpg", size = 256) =>
  `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_${size},h_${size},al_c,q_85,enc_avif,quality_auto/photo.${ext}`;

/** Build a landscape Wix CDN image URL (crops to fill). */
const wixWide = (id: string, ext = "jpg", w = 640, h = 440) =>
  `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_${w},h_${h},al_c,q_85,enc_avif,quality_auto/photo.${ext}`;

/** Build a logo URL that preserves aspect ratio (fit, not crop). */
const wixLogo = (id: string, ext = "png", w = 320, h = 160) =>
  `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fit/w_${w},h_${h},q_90,enc_avif,quality_auto/logo.${ext}`;

export const siteSettings: SiteSettings = {
  siteName: "Global EdTech Startup Awards",
  tagline:
    "The largest EdTech startup competition and community in the world.",
  logoText: "GESAwards",
  nav: [
    { label: "About", href: "/about" },
    { label: "Tracks", href: "/tracks" },
    { label: "Semifinals", href: "/semifinals" },
    { label: "Winners", href: "/winners" },
    { label: "Terms", href: "/terms-and-condition" },
  ],
  applyUrl: AIRTABLE_APPLY,
  videoUrl: "https://www.youtube.com/embed/PlPOyNYeVR4",
  social: [
    { platform: "facebook", href: "https://www.facebook.com/GlobalEdTechAwards/" },
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/company/global-edtech-startups-awards/",
    },
    { platform: "youtube", href: "https://youtu.be/PlPOyNYeVR4" },
  ],
  poweredByUrl: "http://www.mindcet.org",
};

export const homeContent: HomeContent = {
  heroKicker: "Global EdTech Startup Awards · 2026",
  heroTitle: "This is your moment.\nStep onto the global EdTech stage.",
  heroSubtitle:
    "GESAwards is the largest EdTech competition and community in the world — connecting the most promising startups with investors, mentors and partners across the globe.",
  gallery: [
    { src: wixWide("69f6a1_cc74cf146af246fc836dcfbf57af9eef"), alt: "GESAwards finalists on stage" },
    { src: wixWide("7d9067_384e8d7fe43d425ba8de7470f6e6089f"), alt: "A founder pitching at the global finals" },
    { src: wixWide("69f6a1_c1d156fbdba84309bd3edcdced3930e7"), alt: "Award winners celebrating" },
    { src: wixWide("69f6a1_19fbb7a50d6c40c5b14b2fcf86df24cc"), alt: "Judges and mentors at GESAwards" },
    { src: wixWide("69f6a1_64479c2de2cc4704833dbdbaf1ff7742"), alt: "EdTech community networking" },
    { src: wixWide("69f6a1_8530abb811894f2eab16b527d744e5d8"), alt: "Regional semifinal pitch session" },
    { src: wixWide("7d9067_851d43daa8fc43ec958bb6f3cc2fb8b0"), alt: "GESAwards trophy ceremony" },
    { src: wixWide("7d9067_fe8d19da008444de8affc6988418444e"), alt: "Founders at the global finals" },
  ],
  introTitle:
    "Global EdTech Startup Awards (GESAwards) is the largest EdTech competition and community in the world",
  stats: [
    { value: "9,000+", label: "Startups" },
    { value: "155", label: "Countries" },
    { value: "87", label: "Judges" },
  ],
  joinTitle:
    "Join the most promising EdTech startups of the year, from all corners of the world",
  joinBody:
    "Applications are open to early- and growth-stage EdTech startups worldwide. Compete in your region, reach the global finals, and join a community that has championed education innovation for over a decade.",
  criteriaTitle: "How startups are judged",
  criteria: [
    { index: 1, title: "Address a clear pain point, relevant to the market" },
    { index: 2, title: "Provide an innovative pedagogical approach" },
    { index: 3, title: "Offer a relevant user experience" },
    { index: 4, title: "Show potential for growth based on a sustainable business model" },
    { index: 5, title: "Demonstrate product viability" },
  ],
  editionYear: 2026,
  timelineTitle: "The 2026 journey",
  timeline: [
    { date: "March 2026", label: "Official launch of 2026 applications at SXSW EDU" },
    { date: "Sept 15, 2026", label: "Deadline for startup submissions" },
    { date: "Oct–Nov 2026", label: "Regional semifinals around the world" },
    { date: "January 2027", label: "Finals week at Bett Global, London" },
  ],
  currentEditionKicker: "2026 Edition",
  currentEditionTitle: "Regional semifinals, then the global stage",
  currentEditionBody:
    "Startups compete first in regional semifinals across the globe. Regional champions advance to the global finals at Bett London, where the world's leading EdTech ventures are recognised.",
  newsletterTitle: "I want to be updated",
  newsletterBody:
    "Get application deadlines, regional events and finalist announcements straight to your inbox.",
};

export const prizeCategories: PrizeCategory[] = [
  {
    title: "Best EdTech Solution",
    description: "The standout product delivering measurable impact in education.",
    color: "brand",
  },
  {
    title: "Innovation",
    description: "Breakthrough technology pushing the boundaries of how we learn.",
    color: "sky",
  },
  {
    title: "Social Impact",
    description: "Solutions widening access, equity and inclusion in education.",
    color: "red",
  },
  {
    title: "Emerging Markets",
    description: "High-potential ventures transforming learning in growing regions.",
    color: "yellow",
  },
];

/* Judges imported from https://www.globaledtechawards.org/copy-of-home-4 (page order). */
export const judges: Judge[] = [
  {
    name: "Amanda Slavin",
    title: "Author and Educator",
    company: "",
    photo: wixSquare("69f6a1_eece792df9ba464d96df87e768f95609", "png"),
  },
  {
    name: "Felix Lopez",
    title: "Director",
    company: "SEK Lab EdTech Accelerator",
    photo: wixSquare("69f6a1_a16dbb6de09845f48b714ea4220d1038", "png"),
  },
  {
    name: "Avi Warshavsky",
    title: "CEO",
    company: "MindCET",
    photo:
      "https://static.wixstatic.com/media/c2de03_c8cb12108ef74850b8da8f9bc9b60bbc~mv2_d_4500_3000_s_4_2.jpg/v1/fill/w_256,h_256,al_c,q_85,enc_avif,quality_auto/photo.jpg",
  },
  {
    name: "Betsy Corcoran",
    title: "Founder",
    company: "EdSurge",
    photo: wixSquare("69f6a1_436438b83bb941fab3ffe942294e3992"),
  },
  {
    name: "Jean Hammond",
    title: "General Partner & Co-Founder",
    company: "LearnLaunch",
    photo: wixSquare("69f6a1_e77dd4ef222d49f7b4c74780736e1587", "jpeg"),
  },
  {
    name: "Marcelo Burbano",
    title: "Managing Partner & Co-founder",
    company: "Prismapar",
    photo: wixSquare("69f6a1_fec599db6d53495aa88a3d1c8f5e3875"),
  },
  {
    name: "Tobias Himmerich",
    title: "Founder and Managing Director",
    company: "EDUvation",
    photo: wixSquare("69f6a1_f5a62a262b2440dfbe3ef048a9343ce9"),
  },
  {
    name: "Caroline Wright",
    title: "Director General",
    company: "BESA",
    photo: wixSquare("69f6a1_8a544d2545654555a0babab6aea2c8a7"),
  },
  {
    name: "Moshe Mor",
    title: "Partner",
    company: "aMoon Fund",
    photo: wixSquare("69f6a1_9e04e76c9bce4977b2d84c5c65a94666"),
  },
  {
    name: "Juan Luis Vilchez",
    title: "EMEA EdTech Lead",
    company: "AWS",
    photo: wixSquare("69f6a1_5eecd8b1650546ae9d1cfefd13f40880"),
  },
  {
    name: "Pierre-Antoine Ullmo",
    title: "CEO",
    company: "Tyme Education",
    photo: wixSquare("69f6a1_aaec69dd86084f07830a81963ea0b88d", "png"),
  },
  {
    name: "Marie Christine Levet",
    title: "Founder & Partner",
    company: "Educapital",
    photo: wixSquare("69f6a1_89deeeaa707f452faae4e7b39dda6471"),
  },
  {
    name: "Erez Toker",
    title: "CEO",
    company: "Trinity College London",
    photo: wixSquare("69f6a1_15e4b08b0d6a46199564b9f5a690a060"),
  },
  {
    name: "Rebeca Barbalat",
    title: "EdTech R&D Expert",
    company: "",
    photo: wixSquare("69f6a1_00a044a888f3498b8aba571fae9b3870"),
  },
  {
    name: "Norihisa Wada",
    title: "Director",
    company: "Global EdTech Acceleration Committee",
    photo:
      "https://static.wixstatic.com/media/c2de03_dbe340d4470f4e048b2a489fc2e98785~mv2_d_2832_4256_s_4_2.jpg/v1/fill/w_256,h_256,al_c,q_85,enc_avif,quality_auto/photo.jpg",
  },
  {
    name: "Ash Kaluarachchi",
    title: "CEO & Managing Director",
    company: "Started",
    photo: wixSquare("69f6a1_4ffb07fb123b4e18b2c5dd6fa4e5509a"),
  },
  {
    name: "Donatella Solda",
    title: "Director",
    company: "FEM",
    photo: wixSquare("69f6a1_c71463222d5e45249c11a0d6e4815a16", "png"),
  },
  {
    name: "Irit Touitou",
    title: "CEO",
    company: "CET",
    photo: wixSquare("69f6a1_c3183cccbf8e4fa8b3e2e09bdcf11567"),
  },
  {
    name: "Patrick Hayes",
    title: "Chief Development Officer",
    company: "Times Higher Education",
    photo: wixSquare("69f6a1_8f7d5e2dca83462d80112e1ac80b0a1b"),
  },
  {
    name: "Carla Aerts",
    title: "Strategic Consultant",
    company: "ErasmusX",
    photo: wixSquare("69f6a1_1ca969e2044442ce84fed3885019d09f"),
  },
  {
    name: "Tamas Haiman",
    title: "Co-Founder",
    company: "Supercharge Ventures",
    photo: wixSquare("69f6a1_fc30e29594414406bcc27f82e852409e"),
  },
  {
    name: "Ronni Kenneth",
    title: "CEO",
    company: "MindCET Capital",
    photo: wixSquare("69f6a1_16dc11e4e6a8420b8bea72e4e98521fc"),
  },
  {
    name: "Harris Goodman",
    title: "Senior VP Marketing & Growth",
    company: "BrainPOP",
    photo: wixSquare("69f6a1_adc3dfdee3d34972b52f68c733624d6d"),
  },
  {
    name: "Hailey Carter",
    title: "VP",
    company: "Owl Ventures",
    photo: wixSquare("69f6a1_207611d5313246d9a0bc9cc0068779d5"),
  },
  {
    name: "Jose Escamilla",
    title: "Director of TecLabs",
    company: "Tec de Monterrey",
    photo: wixSquare("69f6a1_7490bf90f70544158db7c72ca78bd22a"),
  },
  {
    name: "Kate Lee Carey",
    title: "EdTech",
    company: "Cooley LLP",
    photo: wixSquare("69f6a1_cdde81898f524b57afe4ad4361018482", "png"),
  },
  {
    name: "Ernest Gavor",
    title: "Technology Entrepreneur and Innovator",
    company: "",
    photo: wixSquare("69f6a1_caa440e9895649ada07a33df8f80f019"),
  },
  {
    name: "Julia Himmerich",
    title: "CEO",
    company: "EDUvation",
    photo: wixSquare("69f6a1_ec5f0f6da1974a0093b2ece10cb835f2"),
  },
  {
    name: "Fernando Valenzuela",
    title: "Global Digital Education Thought Leader",
    company: "",
    photo: wixSquare("69f6a1_99aac115650a4c9f87a816eea2cb2344"),
  },
  {
    name: "Valentina Redondo",
    title: "",
    company: "EdTech France",
    photo: wixSquare("69f6a1_7eef1f8d1f024b10a7ff77523188255d", "png"),
  },
  {
    name: "Michaël Bijaoui",
    title: "Partner & COO",
    company: "East Wind Advisors",
    photo: wixSquare("69f6a1_5d0d22dc49df4ef9a49181eae58a666d"),
  },
  {
    name: "Shlomy Kattan",
    title: "Managing Director",
    company: "Tyton Partners",
    photo: wixSquare("69f6a1_77716a26c1e34db19e1ef2b4461dd557", "png"),
  },
  {
    name: "Hilla Ovil Brenner",
    title: "CEO",
    company: "Yazamiyot – Women Entrepreneurs",
    photo: wixSquare("69f6a1_4e79f4ba72c04984be9be4d2a0ad7191"),
  },
  {
    name: "Enrico Poli",
    title: "CEO",
    company: "Zanichelli Venture",
    photo: wixSquare("69f6a1_703ec92e2f5349b6a829ffbabcc5fc9c"),
  },
  {
    name: "Roy Zur",
    title: "CEO",
    company: "ThriveDX Enterprise",
    photo: wixSquare("69f6a1_3d1b76be8ce34c8ea06d710b7aef3310"),
  },
  {
    name: "Michael Spencer",
    title: "CEO",
    company: "Global Expansion Strategies",
    photo: wixSquare("b03be3_acdef73ae7f14373b54198b68ba75bd1"),
  },
  {
    name: "Lucian Cosinschi",
    title: "EdTech Consultant",
    company: "",
    photo: wixSquare("69f6a1_7eee165e31b246a0a027ef4f754ee722", "jpeg"),
  },
  {
    name: "Cesar Sanchez",
    title: "Accelerator Manager",
    company: "IFE Launch",
    photo: wixSquare("69f6a1_b371ae567a04426db9d6cae14f358088"),
  },
  {
    name: "Niv Gross",
    title: "VP Technology",
    company: "CET",
    photo: wixSquare("69f6a1_853bd1cf27ca4f8c9e105e875331233d"),
  },
  {
    name: "Stephen Jull",
    title: "Founder and Investor",
    company: "",
    photo: wixSquare("69f6a1_6735a970f0f642ebb06b01e345e07fce"),
  },
  {
    name: "Alex Ng",
    title: "Managing Director",
    company: "EduSpaze",
    photo: wixSquare("69f6a1_1f56f14412c348d18d83e8b3cd8b8e1b", "png"),
  },
  {
    name: "Nick Barniville",
    title: "Founder",
    company: "Gomera Tech",
    photo: wixSquare("69f6a1_d1142c65c6124db08a65445b5e240ebe"),
  },
  {
    name: "Litzie Maarek",
    title: "Co-Founder and Managing Partner",
    company: "Educapital",
    photo: wixSquare("69f6a1_b7ac3bb31222498ebd4dfc8773473f19"),
  },
  {
    name: "Dr. Yuliana Topazly",
    title: "Director of Strategy",
    company: "DOHE",
    photo: wixSquare("69f6a1_02b710b79df546feaebe11ee5b012d57"),
  },
  {
    name: "Rachel Chan",
    title: "Co-Founder",
    company: "Esperanza",
    photo: wixSquare("69f6a1_546e7c87a10341e2b096dd55a7bb4b26"),
  },
  {
    name: "Hun (JH) Jong",
    title: "CEO",
    company: "Learning Spark",
    photo: wixSquare("69f6a1_6ba38d07fe1a4d4caae0fdb956c536c5", "jpeg"),
  },
  {
    name: "Alex Paiva",
    title: "Head of Products",
    company: "Postivio",
    photo: wixSquare("69f6a1_f4a360602483426281e8457987590dd1", "jpeg"),
  },
  {
    name: "Jitske van Os",
    title: "Managing Director",
    company: "Dutch EdTech",
    photo: wixSquare("69f6a1_11e4fe3c19e7431893a1d375d6c09d79"),
  },
  {
    name: "Apoorv Bamba",
    title: "Founding Partner",
    company: "Ingenious Faces",
    photo: wixSquare("69f6a1_2eb28e3dfec949c6be2f2cb5a960c598"),
  },
  {
    name: "Emile Pesce",
    title: "",
    company: "AFINEF",
    photo: wixSquare("69f6a1_013e09d01666429e8298b731cbe6dc61"),
  },
  {
    name: "Alex Sarlin",
    title: "Founder and CEO",
    company: "EdTech Insiders",
    photo: wixSquare("7d9067_a0e3e54abd364b5aae7fae4481bf2e11"),
  },
  {
    name: "Adora Mora",
    title: "Chief of Staff and AI Lead",
    company: "Curriculum Associates",
    photo: wixSquare("69f6a1_7b0bb663bcdc4844b89c081a701cdb66"),
  },
  {
    name: "Jessica Millstone",
    title: "VC and Angel Investor",
    company: "",
    photo: wixSquare("7d9067_ffdfb4c636404807bee4ad7bf7c5da21"),
  },
  {
    name: "Mohamad Abo Nada",
    title: "CEO",
    company: "Ibtikar BaseCamp",
    photo: wixSquare("b03be3_a9060ca2657b4d59aaf1fdae0999b10c"),
  },
  {
    name: "Ofir Amami",
    title: "Foreign Trade Administration",
    company: "Ministry of Economy and Industry",
    photo: wixSquare("b03be3_11ee8c1a693441e88e9309e4b5a6f0eb", "jpeg"),
  },
  {
    name: "Leo Gmeiner",
    title: "Director",
    company: "Founder Institute Brazil and School Guardian",
    photo: wixSquare("69f6a1_01fe5d879c4846f2932e807d013afc4d"),
  },
  {
    name: "Valery Platonov",
    title: "GESAwards EuroAsia Contest Chair",
    company: "",
    photo: wixSquare("69f6a1_c75befe1895c43b29ba38921b111cf17", "png"),
  },
  {
    name: "Dr. Cristine Legare",
    title: "Professor",
    company: "University of Texas at Austin",
    photo: wixSquare("69f6a1_0f7bbcf597454cfcac9cfcaa6a1cd5e2", "jpeg"),
  },
];

export const partners: Partner[] = [
  {
    name: "CET — Center for Educational Technology",
    logo: wixLogo("69f6a1_d6535a0845064baf838fe4018f816e16", "jpg", 360, 150),
    url: "https://home.cet.ac.il/",
    type: "powered-by",
  },
  {
    name: "MindCET",
    logo: "/brand/mindcet.png",
    url: "http://www.mindcet.org",
    type: "powered-by",
  },
  {
    name: "Worldwide Partner",
    logo: wixLogo("7d9067_fb5b8d27d8d24cdcacf4538bfe470a0d", "png", 280, 160),
    type: "worldwide",
  },
  {
    name: "Worldwide Partner",
    logo: wixLogo("7d9067_ab306a5a671743d79fab87fbc36841ca", "png", 280, 160),
    type: "worldwide",
  },
  {
    name: "Prize Sponsor",
    logo: wixLogo("7d9067_880910682e4246148af96f5a8a360efb", "png", 280, 160),
    type: "prize-sponsor",
  },
];

export const tracks: Track[] = [
  {
    title: "Closing the Workforce Skills Gap",
    slug: "closing-the-workforce-skills-gap",
    year: 2026,
    order: 1,
    description:
      "The GESAwards Workforce Learning Track addresses the critical global skills gap by focusing on accelerated, continuous workplace learning. With data indicating that nearly 60% of workers will require reskilling by 2030, current corporate strategies and standard software are proving insufficient for the rapid pace of change. To combat this, GESAwards is looking for startup companies that offer innovative learning solutions, so they can be identified and seen by enterprises that need to transform their workforce to stay competitive.",
    benefits: [
      "Global visibility.",
      "A direct connection with industry leaders.",
      "An invitation to join the most prestigious and exclusive EdTech encounter in the world.",
      "A place at the Bett Arena in London.",
    ],
    logos: [
      {
        name: "GESAwards winner trophy",
        role: "award",
        image:
          "https://static.wixstatic.com/media/69f6a1_789a645b669043f49122a02ee8a948bb~mv2.png/v1/fill/w_230,h_225,al_c,lg_1,q_85,enc_avif,quality_auto/trophy.png",
      },
    ],
    sourceUrl:
      "https://www.globaledtechawards.org/closing-the-workforce-skills-gap",
  },
  {
    title: "Hacking Education with Vibe Coding",
    slug: "hacking-education-with-vibe-coding",
    year: 2026,
    order: 2,
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
    title: "Female Founders Track",
    slug: "female-founders-track",
    year: 2026,
    order: 3,
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
    logos: [
      {
        name: "GESAwards winner trophy",
        role: "award",
        image:
          "https://static.wixstatic.com/media/69f6a1_789a645b669043f49122a02ee8a948bb~mv2.png/v1/fill/w_230,h_225,al_c,lg_1,q_85,enc_avif,quality_auto/trophy.png",
      },
    ],
    sourceUrl: "https://www.globaledtechawards.org/femalefounderstrack",
  },
  {
    title: "Learning by Creating",
    slug: "learning-by-creating",
    year: 2026,
    order: 4,
    subtitle: "The Amichai Witzen Award",
    description:
      "Not every student succeeds on the standard K-12 path. Some learn best by making. Those who struggle in the ordinary system may build real success through what they create. This track seeks early-stage Israeli startups whose products let students learn, grow, and prove themselves through creation: building, designing, producing, inventing, in the digital and the physical world. Creation is not just a way to measure learning - it is how students who don't fit the standard mold, pave their own way to success.",
    benefits: [
      "EBN - Legal",
      "Deloitte - Accounting",
      "Aleph Accounting - CFO, Bookkeeping",
      "NovoDia - EdTech consulting",
    ],
    logos: [
      {
        name: "GESAwards winner trophy",
        role: "award",
        image:
          "https://static.wixstatic.com/media/69f6a1_789a645b669043f49122a02ee8a948bb~mv2.png/v1/fill/w_230,h_225,al_c,lg_1,q_85,enc_avif,quality_auto/trophy.png",
      },
    ],
    sourceUrl: "https://www.globaledtechawards.org/learning-by-creating",
  },
];

export const winners: Winner[] = [
  // Populate per edition in the CMS. The /winners/[year] template renders any
  // entries grouped by year; left empty here so the page shows its empty state.
];

export const pages: RichPage[] = [
  {
    slug: "about",
    title: "About GESAwards",
    intro:
      "The Global EdTech Startup Awards (GESAwards) is the largest EdTech startup competition and community in the world.",
    body: [
      {
        type: "p",
        text: "Since its founding, GESAwards has connected more than 9,000 startups from 155 countries with the investors, mentors and partners who help education innovation scale. Each edition runs through regional semifinals on every continent, culminating in a global finals week at Bett London.",
      },
      { type: "h2", text: "Our mission" },
      {
        type: "p",
        text: "We exist to surface and champion the EdTech ventures shaping the future of learning — giving founders a global stage, a trusted network, and the visibility to grow.",
      },
      { type: "h2", text: "Powered by CET & MindCET" },
      {
        type: "p",
        text: "GESAwards is powered by CET (the Center for Educational Technology) and organised by MindCET, its EdTech innovation centre, alongside a worldwide network of regional partners.",
      },
    ],
  },
  {
    slug: "terms-and-condition",
    title: "Terms & Conditions",
    intro:
      "Please read the competition terms before applying. These terms summarise eligibility and participation; the full legal terms are provided during the application process.",
    body: [
      { type: "h2", text: "Eligibility" },
      {
        type: "p",
        text: "The competition is open to EdTech startups developing technology-based products or services for education. Startups apply through the official application form and compete in their relevant region.",
      },
      { type: "h2", text: "Judging" },
      {
        type: "p",
        text: "Entries are evaluated by an international panel of judges against the published competition criteria: addressing a clear pain point, an innovative pedagogical approach, a relevant user experience, potential for sustainable growth, and product viability.",
      },
      { type: "h2", text: "Participation" },
      {
        type: "p",
        text: "By applying, startups agree to the use of their submitted materials for the purposes of running and promoting the competition. Regional champions advance to the global finals.",
      },
    ],
  },
];
