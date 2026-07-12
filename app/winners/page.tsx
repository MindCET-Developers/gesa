import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowRight } from "@/components/ui/icons";
import { getWinnerYears } from "@/lib/content";

export const metadata: Metadata = {
  title: "Winners",
  description:
    "Browse the GESAwards winners archive — the EdTech startups recognised across every edition.",
};

export default async function WinnersPage() {
  const years = await getWinnerYears();

  return (
    <>
      <PageHero
        kicker="Hall of fame"
        title="Winners archive"
        intro="Every edition, GESAwards recognises the EdTech ventures shaping the future of learning. Browse the champions by year."
      />

      <section className="container-page py-16 md:py-20">
        {years.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-line bg-surface p-12 text-center">
            <p className="font-display text-xl font-bold text-navy">
              The archive is being prepared
            </p>
            <p className="mt-3 text-muted">
              Past winners will appear here once the editorial team adds them in
              the CMS. Each year publishes to its own page automatically.
            </p>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {years.map((year) => (
              <li key={year}>
                <Link
                  href={`/winners/${year}`}
                  className="group flex items-center justify-between rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <span className="font-display text-3xl font-extrabold text-navy">
                    {year}
                  </span>
                  <ArrowRight className="size-6 text-brand transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
