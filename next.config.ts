import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      // Existing Wix-hosted assets, used until images are migrated into the CMS.
      { protocol: "https", hostname: "static.wixstatic.com" },
      // Sanity CDN, for when the CMS is connected.
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    // Preserve SEO from the old Wix URLs. Winner archive pages collapse into the
    // new /winners/[year] template; orphaned "copy-of-*" pages are dropped home.
    const winnerYears = [
      2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
    ];
    const winnerRedirects = winnerYears.map((y) => ({
      source: `/${y}-winners`,
      destination: `/winners/${y}`,
      permanent: true,
    }));

    return [
      ...winnerRedirects,
      { source: "/winners2018", destination: "/winners/2018", permanent: true },
      { source: "/tracks2025", destination: "/tracks", permanent: true },
      { source: "/2026-tracks", destination: "/tracks", permanent: true },
      { source: "/2021-tracks", destination: "/tracks", permanent: true },
      // Drop legacy Wix duplicate pages (single segment, e.g. /copy-of-2024-winners).
      { source: "/copy-of-:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
