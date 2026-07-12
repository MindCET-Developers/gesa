import type { MetadataRoute } from "next";
import { getWinnerYears } from "@/lib/content";

const BASE = "https://www.globaledtechawards.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const years = await getWinnerYears();

  const staticRoutes = [
    "",
    "/about",
    "/tracks",
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

  return [...staticRoutes, ...winnerRoutes];
}
