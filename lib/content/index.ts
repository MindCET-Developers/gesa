import { sanityClient } from "@/lib/sanity/client";
import {
  homeQuery,
  judgesQuery,
  pageQuery,
  partnersQuery,
  prizeCategoriesQuery,
  siteSettingsQuery,
  trackBySlugQuery,
  tracksQuery,
  winnerYearsQuery,
  winnersByYearQuery,
} from "@/sanity/queries";
import { regionalSemifinals } from "./regionalSemifinals";
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

/* Components read content only through this module. Sanity is the primary
 * source; seed data keeps the site complete while individual CMS fields or
 * images are still being migrated. */

async function fetchCms<T>(query: string, fallback: T, params: Record<string, unknown> = {}) {
  if (!sanityClient) return fallback;

  try {
    return (await sanityClient.fetch<T | null>(query, params)) ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const content = await fetchCms<Partial<SiteSettings>>(siteSettingsQuery, {});
  return { ...siteSettings, ...content, nav: content.nav?.length ? content.nav : siteSettings.nav };
}

export async function getHomeContent(): Promise<HomeContent> {
  const content = await fetchCms<Partial<HomeContent>>(homeQuery, {});
  return {
    ...homeContent,
    ...content,
    gallery: content.gallery?.length ? content.gallery : homeContent.gallery,
    stats: content.stats?.length ? content.stats : homeContent.stats,
    criteria: content.criteria?.length ? content.criteria : homeContent.criteria,
    timeline: content.timeline?.length ? content.timeline : homeContent.timeline,
  };
}

export async function getPrizeCategories(): Promise<PrizeCategory[]> {
  const content = await fetchCms<PrizeCategory[]>(prizeCategoriesQuery, []);
  return content.length ? content : prizeCategories;
}

export async function getJudges(): Promise<Judge[]> {
  const content = await fetchCms<Partial<Judge>[]>(judgesQuery, []);
  if (!content.length) return judges;

  return content.map((judge) => {
    const fallback = judges.find((item) => item.name === judge.name);
    return { ...fallback, ...judge, photo: judge.photo || fallback?.photo || "" } as Judge;
  });
}

export async function getPartners(type?: Partner["type"]): Promise<Partner[]> {
  const content = await fetchCms<Partial<Partner>[]>(partnersQuery, []);
  const allPartners = content.length
    ? content.map((partner, index) => {
        const fallback = partners[index];
        return { ...fallback, ...partner, logo: partner.logo || fallback?.logo || "" } as Partner;
      })
    : partners;

  return type ? allPartners.filter((partner) => partner.type === type) : allPartners;
}

export async function getRegionalSemifinals() {
  return regionalSemifinals;
}

export async function getTracks(year?: number): Promise<Track[]> {
  const content = await fetchCms<Track[]>(tracksQuery, [], { year: year ?? null });
  if (content.length) return content;
  return year ? tracks.filter((track) => track.year === year) : tracks;
}

export async function getTrackBySlug(slug: string): Promise<Track | undefined> {
  const fallback = tracks.find((track) => track.slug === slug);
  return fetchCms<Track | undefined>(trackBySlugQuery, fallback, { slug });
}

export async function getWinnerYears(): Promise<number[]> {
  const years = await fetchCms<number[]>(winnerYearsQuery, []);
  return years.length
    ? years
    : [...new Set(winners.map((winner) => winner.year))].sort((a, b) => b - a);
}

export async function getWinnersByYear(year: number): Promise<Winner[]> {
  const content = await fetchCms<Winner[]>(winnersByYearQuery, [], { year });
  return content.length ? content : winners.filter((winner) => winner.year === year);
}

export async function getPage(slug: string): Promise<RichPage | undefined> {
  type CmsPage = Omit<RichPage, "body"> & {
    body?: { style?: "h2" | "normal"; children?: { text?: string }[] }[];
  };

  const page = await fetchCms<CmsPage | undefined>(pageQuery, undefined, { slug });
  if (!page) return pages.find((item) => item.slug === slug);

  return {
    slug: page.slug,
    title: page.title,
    intro: page.intro,
    body:
      page.body?.map((block) => ({
        type: block.style === "h2" ? "h2" : "p",
        text: block.children?.map((child) => child.text ?? "").join("") ?? "",
      })) ?? [],
  };
}

export * from "./types";
