import type { Metadata } from "next";
import { SemifinalsExplorer } from "@/components/semifinals/SemifinalsExplorer";
import { getHomeContent, getRegionalSemifinals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Regional Semifinals",
  description:
    "GESAwards regional semifinal partners by continent. See who's running qualifying rounds around the world.",
};

export default async function SemifinalsPage() {
  const [home, entries] = await Promise.all([getHomeContent(), getRegionalSemifinals()]);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
            GESAwards · {home.editionYear}
          </p>
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl">
            Regional Semifinals
          </h1>
          <p className="mx-auto mt-3 max-w-[46ch] text-muted">
            Partner organizations run qualifying rounds across every continent. Regional champions
            advance to the global finals.
          </p>
        </div>
        <SemifinalsExplorer entries={entries} />
      </div>
    </section>
  );
}
