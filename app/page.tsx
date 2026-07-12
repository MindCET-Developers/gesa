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

export default async function HomePage() {
  const [home, settings, categories, judges, partners, seminfinals] = await Promise.all([
    getHomeContent(),
    getSiteSettings(),
    getPrizeCategories(),
    getJudges(),
    getPartners(),
    getRegionalSemifinals(),
  ]);

  return (
    <>
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
