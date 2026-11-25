import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FinalRegisterForm } from "@/components/final/FinalRegisterForm";
import { FinalConfigError, getFinalists, type Finalist } from "@/lib/final-rsvp/airtable";

// Shared link, sent manually to the Grand Finalists. Separate from the Bootcamp
// registration. Not linked from the site, not in the sitemap, not indexed.
export const metadata: Metadata = {
  title: "Grand Final 2027 Details",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

export default async function FinalRegisterPage() {
  let startups: Finalist[] | null = null;
  try {
    startups = await getFinalists();
  } catch (err) {
    console.error(
      "[final-register] finalist list failed",
      err instanceof FinalConfigError ? err.message : err
    );
  }

  return (
    <div className="bg-white">
      <PageHero
        kicker="GESAwards 2026 Grand Finalists"
        title="Grand Final Details"
        intro="Judging panels during the Bootcamp (January 18–19, 2027) and the Grand Final (January 21, 2027) in London. Tell us where you will be for the judging, who will present, who will be on stage at the Grand Final, and upload a one-minute video."
      />
      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-2xl">
          {startups === null ? (
            <p className="rounded-2xl border border-line bg-surface/60 p-8 text-center text-muted">
              The form is temporarily unavailable. Please try again in a few minutes.
            </p>
          ) : (
            <FinalRegisterForm startups={startups} />
          )}
        </div>
      </section>
    </div>
  );
}
