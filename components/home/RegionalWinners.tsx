import type { RegionalWinners as Region } from "@/lib/content/regional-winners-data";
import { WinnerLogo } from "./WinnerLogo";

export function RegionalWinners({ regions }: { regions: Region[] }) {
  if (!regions.length) return null;
  return (
    <section id="regional-winners" aria-labelledby="regional-winners-heading"
      className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(17,109,255,0.3),transparent_60%)]" />
      <div className="container-page relative">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky">Local brilliance. Worldwide impact.</p>
          <h2 id="regional-winners-heading" className="font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Meet the GESAwards 2026 <span className="text-sky">Regional Semifinal Winners</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Discover the innovative EdTech startups recognized at GESAwards regional semifinals around the world. More winners will be announced soon.
          </p>
        </div>
        <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
          {regions.map((region) => (
            <article key={region.id} className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-lg">
              <div className="border-b border-line bg-surface px-6 py-5">
                <h3 className="text-xl font-bold leading-snug text-navy [overflow-wrap:anywhere]">{region.name}</h3>
              </div>
              <ul className="divide-y divide-line px-6">
                {region.winners.map((winner) => (
                  <li key={winner.id} className="flex min-h-24 items-center gap-4 py-4">
                    <WinnerLogo name={winner.name} src={winner.logo} />
                    <span className="min-w-0 text-base font-semibold leading-snug text-navy [overflow-wrap:anywhere]">{winner.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
