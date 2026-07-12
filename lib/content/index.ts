import {
  homeContent,
  judges,
  pages,
  partners,
  prizeCategories,
  siteSettings,
  tracks,
  winners,
} from "./seed";
import { regionalSemifinals } from "./regionalSemifinals";
import type { Partner, RichPage } from "./types";

/* ----------------------------------------------------------------------------
   Content access layer.

   Components import ONLY from here, never from ./seed or the Sanity client
   directly. Today these return local seed data. To go live with the CMS,
   replace each body with the matching GROQ query from lib/sanity/queries.ts
   (the function signatures stay identical, so no component changes are needed).
---------------------------------------------------------------------------- */

export async function getSiteSettings() {
  return siteSettings;
}

export async function getHomeContent() {
  return homeContent;
}

export async function getPrizeCategories() {
  return prizeCategories;
}

export async function getJudges() {
  return judges;
}

export async function getPartners(type?: Partner["type"]) {
  return type ? partners.filter((p) => p.type === type) : partners;
}

export async function getRegionalSemifinals() {
  return regionalSemifinals;
}

export async function getTracks(year?: number) {
  return year ? tracks.filter((t) => t.year === year) : tracks;
}

export async function getWinnerYears() {
  return [...new Set(winners.map((w) => w.year))].sort((a, b) => b - a);
}

export async function getWinnersByYear(year: number) {
  return winners.filter((w) => w.year === year);
}

export async function getPage(slug: string): Promise<RichPage | undefined> {
  return pages.find((p) => p.slug === slug);
}

export * from "./types";
