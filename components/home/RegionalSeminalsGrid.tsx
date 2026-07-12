import Link from "next/link";
import { CONTINENTS } from "@/components/semifinals/continents";
import { PartnerRow } from "@/components/semifinals/PartnerRow";
import type { HomeContent, RegionalSemifinalEntry } from "@/lib/content/types";

function pickTeaserEntries(all: RegionalSemifinalEntry[]): RegionalSemifinalEntry[] {
  const picks: RegionalSemifinalEntry[] = [];

  for (const { key } of CONTINENTS) {
    const first = all.find((entry) => entry.continent === key);
    if (first) picks.push(first);
    if (picks.length === 6) break;
  }

  return picks;
}

export function RegionalSeminalsGrid({
  home,
  semifinals,
}: {
  home: HomeContent;
  semifinals: RegionalSemifinalEntry[];
}) {
  const teaser = pickTeaserEntries(semifinals);
  if (teaser.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl">
            {home.editionYear} Regional Semifinals
          </h2>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-white p-2">
          {teaser.map((entry, index) => (
            <PartnerRow key={`${entry.partner}-${entry.continent}`} entry={entry} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/semifinals"
            className="font-semibold text-brand underline-offset-4 hover:underline"
          >
            View all regions →
          </Link>
        </div>
      </div>
    </section>
  );
}
