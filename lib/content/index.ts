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
import { fetchRegionalSemifinals } from "./semifinals-airtable";
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

/* Sanity is the source of truth for the partner strip, but a partner whose
 * document is still half-filled must never silently vanish from it — partners
 * notice. A document with no "type" yet lands in the general worldwide group
 * rather than dropping out of all three filters, and its logo falls back to the
 * seed entry of the same name (never to whichever seed entry happens to sit at
 * the same index, which used to leak unrelated names and dark tiles onto CMS
 * partners). */
function withPartnerFallbacks(content: Partial<Partner>[]): Partner[] {
  const seedByName = new Map(partners.map((partner) => [partner.name, partner]));

  return content.map((partner) => {
    const fallback = partner.name ? seedByName.get(partner.name) : undefined;
    return {
      ...partner,
      logo: partner.logo || fallback?.logo || "",
      type: partner.type ?? fallback?.type ?? "worldwide",
    } as Partner;
  });
}

/* Editors order the strip with the "Sort order" field, but only once every
 * partner in a group has one: a group where some documents are still missing it
 * would otherwise show those in whatever order the CMS returned, stranded after
 * the numbered ones. Until the group is complete it reads alphabetically, which
 * is the order the numbers themselves were assigned in. */
function sortPartnerGroup(group: Partner[]): Partner[] {
  const byName = (a: Partner, b: Partner) => a.name.localeCompare(b.name);
  const fullyOrdered = group.every((partner) => typeof partner.order === "number");

  return [...group].sort((a, b) =>
    fullyOrdered ? a.order! - b.order! || byName(a, b) : byName(a, b)
  );
}

export async function getPartners(type?: Partner["type"]): Promise<Partner[]> {
  const content = await fetchCms<Partial<Partner>[]>(partnersQuery, []);
  const allPartners = content.length ? withPartnerFallbacks(content) : partners;
  if (type) return sortPartnerGroup(allPartners.filter((partner) => partner.type === type));

  /* Each group sorts on its own, then they come back in the order the strip
   * renders them, so a caller taking the whole list still gets tidy groups. */
  const groups: Partner["type"][] = ["powered-by", "worldwide", "prize-sponsor"];
  return groups.flatMap((group) =>
    sortPartnerGroup(allPartners.filter((partner) => partner.type === group))
  );
}

export async function getRegionalSemifinals() {
  // Live from Airtable (cached/revalidated); falls back to the committed snapshot when the
  // API key is missing or Airtable is unreachable, so the page never breaks.
  const live = await fetchRegionalSemifinals();
  return live && live.length ? live : regionalSemifinals;
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
