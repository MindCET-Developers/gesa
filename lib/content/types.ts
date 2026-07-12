// Shared content types for the GESAwards site.
// These mirror the Sanity schemas in /sanity/schemaTypes so the content layer
// can switch from local seed data to the CMS without touching components.

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: "facebook" | "linkedin" | "youtube" | "instagram" | "x";
  href: string;
};

export type SiteSettings = {
  siteName: string;
  tagline: string;
  logoText: string;
  nav: NavItem[];
  applyUrl: string;
  videoUrl: string;
  social: SocialLink[];
  poweredByUrl: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Criterion = {
  index: number;
  title: string;
};

export type TimelineEvent = {
  date: string;
  label: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type HomeContent = {
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  gallery: GalleryImage[];
  introTitle: string;
  stats: Stat[];
  joinTitle: string;
  joinBody: string;
  criteriaTitle: string;
  criteria: Criterion[];
  editionYear: number;
  timelineTitle: string;
  timeline: TimelineEvent[];
  currentEditionKicker: string;
  currentEditionTitle: string;
  currentEditionBody: string;
  newsletterTitle: string;
  newsletterBody: string;
};

export type PrizeCategory = {
  title: string;
  description: string;
  image?: string;
  color: "brand" | "yellow" | "red" | "sky";
};

export type Judge = {
  name: string;
  title: string;
  company: string;
  photo: string;
  linkedin?: string;
};

export type Partner = {
  name: string;
  logo: string;
  url?: string;
  type: "powered-by" | "worldwide" | "prize-sponsor";
};

export type RegionalSemifinal = {
  name: string;
  region: string;
  country?: string;
  logo: string;
  url?: string;
};

export type Track = {
  title: string;
  year: number;
  description: string;
  sponsor?: string;
};

export type Winner = {
  year: number;
  name: string;
  track: string;
  country?: string;
  description?: string;
  logo?: string;
};

export type RichPage = {
  slug: string;
  title: string;
  intro?: string;
  /** Simple ordered list of paragraph/heading blocks for v1. */
  body: { type: "h2" | "p"; text: string }[];
};
