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
    const winnerYears = [2018, 2019, 2020, 2021, 2022, 2023];
    const winnerRedirects = winnerYears.map((y) => ({
      source: `/${y}-winners`,
      destination: `/winners/${y}`,
      permanent: true,
    }));

    return [
      ...winnerRedirects,
      { source: "/2015-winners", destination: "/winners", permanent: true },
      { source: "/2016-winners", destination: "/winners", permanent: true },
      { source: "/2017-winners", destination: "/winners", permanent: true },
      { source: "/winners2018", destination: "/winners/2018", permanent: true },
      { source: "/copy-of-2015-winners", destination: "/winners", permanent: true },
      { source: "/copy-of-2017-winners", destination: "/winners", permanent: true },
      { source: "/copy-of-2022-links", destination: "/winners/2022", permanent: true },
      { source: "/copy-2-of-2022-links", destination: "/winners/2022", permanent: true },
      { source: "/copy-of-2023-winners", destination: "/winners/2024", permanent: true },
      { source: "/copy-of-2024-winners", destination: "/winners/2025", permanent: true },
      { source: "/tracks2025", destination: "/tracks", permanent: true },
      { source: "/2026-tracks", destination: "/tracks", permanent: true },
      { source: "/2021-tracks", destination: "/tracks", permanent: true },
      {
        source: "/closing-the-workforce-skills-gap",
        destination: "/tracks/closing-the-workforce-skills-gap",
        permanent: true,
      },
      {
        source: "/hackingeducationwithvibecoding",
        destination: "/tracks/hacking-education-with-vibe-coding",
        permanent: true,
      },
      {
        source: "/femalefounderstrack",
        destination: "/tracks/female-founders-track",
        permanent: true,
      },
      {
        source: "/learning-by-creating",
        destination: "/tracks/learning-by-creating",
        permanent: true,
      },
      // The blog is planned for a later phase. Preserve every indexed Wix blog
      // URL with a permanent landing-page redirect instead of returning 404.
      { source: "/blog", destination: "/", permanent: true },
      { source: "/post/:slug", destination: "/", permanent: true },
      // Historical track and campaign pages collapse into their closest
      // canonical section until those archives are rebuilt.
      {
        source:
          "/:slug(advancinglanguageliteracy|randdcuttingedgelearningsolutions|accelnet|copy-of-bridging-the-ai-gap|cet-2021|connecttransformachieve|copy-of-tcl-music|copy-of-connect-transform-achieve|nationalgeographicsociety-2020|terms-and-conditions-tarboot|jacobs-fundation-2021|acceleratedminds|newtrack2021|next-gen-higher-education-2022|ai-enabling-self-regulated-learning|tarboottrack|r-d-cutting-edge2024|tcl-music-2024|2024-tracks|sparkinghumancreativitywithadvanced|copy-of-tracks-1|copy-of-2022-tracks|copy-of-tracks|ministryofeducation-2021|edsafeaialliance-2022|leveraginggenaiforeducationinthea|copy-of-tracks-2024|copy-of-next-gen-higher-education-2022|learn-and-connect|geography|2023-tracks|sponsor-a-track|predicting-dropout|unboxingschool-2021|2021-tracks|temasekfoundation|copy-of-tracks-2|hptechventures-2021|luiss-2021|ibtikarbasecamptrack|bezeqai)",
        destination: "/tracks",
        permanent: true,
      },
      {
        source: "/:slug(copy-of-bootcamp|bootcamp|gesa-finals|events-1)",
        destination: "/about",
        permanent: true,
      },
      {
        source:
          "/:slug(thank-you-page|thank-you-page-event|thank-you-page2|copy-of-home|copy-of-home-2|landing-page|hmp|network|lets-talk-data|opportunities|mindcetgo)",
        destination: "/",
        permanent: true,
      },
      // Drop legacy Wix duplicate pages (single segment, e.g. /copy-of-2024-winners).
      { source: "/copy-of-:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
