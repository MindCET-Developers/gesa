import type { MetadataRoute } from "next";
import { getHomeContent, getTracks, getWinnerYears } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [years, home] = await Promise.all([getWinnerYears(), getHomeContent()]);
  const tracks = await getTracks(home.editionYear);

  const staticRoutes = [
    "",
    "/about",
    "/apply",
    "/tracks",
    "/semifinals",
    "/winners",
    "/terms-and-condition",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const winnerRoutes = years.map((year) => ({
    url: `${BASE}/winners/${year}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const trackRoutes = tracks.map((track) => ({
    url: `${BASE}/tracks/${track.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...trackRoutes, ...winnerRoutes];
}
