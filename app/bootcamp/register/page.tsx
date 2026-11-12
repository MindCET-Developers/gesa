import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BootcampRegisterForm } from "@/components/bootcamp/BootcampRegisterForm";
import {
  getEligibleStartups,
  RegistrationConfigError,
  type EligibleStartup,
} from "@/lib/bootcamp-rsvp/airtable";

// Shared registration link, distributed manually to partners. Not linked from the
// site, not in the sitemap, not indexed.
export const metadata: Metadata = {
  title: "Bootcamp 2027 Registration",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

export default async function BootcampRegisterPage() {
  let startups: EligibleStartup[] | null = null;
  try {
    startups = await getEligibleStartups();
  } catch (err) {
    console.error(
      "[bootcamp-register] eligible list failed",
      err instanceof RegistrationConfigError ? err.message : err
    );
  }

  return (
    <div className="bg-white">
      <PageHero
        kicker="1st–3rd place regional semifinal winners"
        title="Bootcamp 2027 Registration"
        intro="GESAwards Bootcamp · January 18 & 19, 2027 · Central London. Up to two participants per startup."
      />
      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-2xl">
          {startups === null ? (
            <p className="rounded-2xl border border-line bg-surface/60 p-8 text-center text-muted">
              Registration is temporarily unavailable. Please try again in a few minutes.
            </p>
          ) : (
            <BootcampRegisterForm
              startups={startups.map(({ id, name, country }) => ({ id, name, country }))}
            />
          )}
        </div>
      </section>
    </div>
  );
}
