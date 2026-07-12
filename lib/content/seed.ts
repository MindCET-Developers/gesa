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

export const judges: Judge[] = [
  { name: "Avi Warshavsky", title: "CEO", company: "MindCET", photo: "" },
  { name: "Betsy Corcoran", title: "Founder", company: "EdSurge", photo: "" },
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
    name: "Donatella Solda",
    title: "CEO & Managing Director",
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
    name: "Jean Hammond",
    title: "General Partner & Co-Founder",
    company: "LearnLaunch",
    photo: "",
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
