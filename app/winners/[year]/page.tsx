import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowRight } from "@/components/ui/icons";
import { getWinnersByYear, getWinnerYears } from "@/lib/content";

type Params = { year: string };

export async function generateStaticParams() {
  const years = await getWinnerYears();
  return years.map((year) => ({ year: String(year) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `${year} Winners`,
    description: `GESAwards ${year} winning EdTech startups.`,
  };
}

export default async function WinnersYearPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { year } = await params;
  const yearNum = Number(year);
  const winners = Number.isFinite(yearNum)
    ? await getWinnersByYear(yearNum)
    : [];

  return (
    <>
      <PageHero
        kicker="Winners"
        title={`${year} champions`}
        intro={`The EdTech startups recognised in the ${year} edition of GESAwards.`}
      />

      <section className="container-page py-16 md:py-20">
        {winners.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-line bg-surface p-12 text-center">
            <p className="font-display text-xl font-bold text-navy">
              Winners for {year} are coming soon
            </p>
            <p className="mt-3 text-muted">
              This edition&apos;s champions haven&apos;t been published yet.
            </p>
            <Link
              href="/winners"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand hover:gap-2.5 transition-all"
            >
              Back to the archive
              <ArrowRight className="size-4" />
            </Link>
          </div>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {winners.map((w) => (
              <li
                key={`${w.name}-${w.track}`}
                className="flex flex-col rounded-2xl border border-line bg-white p-7"
              >
                {w.logo && (
                  <Image
                    src={w.logo}
                    alt={w.name}
                    width={120}
                    height={48}
                    className="mb-4 h-12 w-auto object-contain"
                  />
                )}
                <span className="text-xs font-bold uppercase tracking-wide text-brand">
                  {w.track}
                </span>
                <h2 className="mt-1 font-display text-xl font-bold text-navy">
                  {w.website ? (
                    <a
                      href={w.website}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-brand"
                    >
                      {w.name}
                    </a>
                  ) : (
                    w.name
                  )}
                </h2>
                {w.country && (
                  <p className="mt-1 text-sm text-muted">{w.country}</p>
                )}
                {w.description && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {w.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
