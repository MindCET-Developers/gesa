import { Hero } from "@/components/home/Hero";
import { GalleryMarquee } from "@/components/home/GalleryMarquee";
import { IntroStats } from "@/components/home/IntroStats";
import { Criteria } from "@/components/home/Criteria";
import { PrizeCategories } from "@/components/home/PrizeCategories";
import { JudgesGrid } from "@/components/home/JudgesGrid";
import { Journey } from "@/components/home/Journey";
import { RegionalSemifinalsGrid } from "@/components/home/RegionalSemifinalsGrid";
import { Partners } from "@/components/home/Partners";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";
import {
  getHomeContent,
  getJudges,
  getPartners,
  getPrizeCategories,
  getSiteSettings,
  getRegionalSemifinals,
} from "@/lib/content";
import { SITE_URL, jsonLdString } from "@/lib/site";

export default async function HomePage() {
  const [home, settings, categories, judges, partners, seminfinals] = await Promise.all([
    getHomeContent(),
    getSiteSettings(),
    getPrizeCategories(),
    getJudges(),
    getPartners(),
    getRegionalSemifinals(),
  ]);

  // Add startDate/endDate and location once the edition timeline is final —
  // they are required for Google event rich results.
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Global EdTech Startup Awards ${home.editionYear}`,
    url: `${SITE_URL}/apply`,
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    organizer: {
      "@type": "Organization",
      name: "Global EdTech Startup Awards",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(eventJsonLd) }}
      />
      <Hero home={home} settings={settings} />
      <GalleryMarquee images={home.gallery} />
      <IntroStats home={home} />
      <Criteria home={home} />
      <PrizeCategories categories={categories} />
      <JudgesGrid judges={judges} />
      <Journey home={home} settings={settings} />
      <RegionalSemifinalsGrid home={home} semifinals={seminfinals} showAll />
      <Partners home={home} partners={partners} />
      <NewsletterSignup home={home} />
    </>
  );
}
