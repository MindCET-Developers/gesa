import type { RegionalWinners as Region } from "@/lib/content/regional-winners-data";
import { WinnerLogo } from "./WinnerLogo";

export function RegionalWinners({ regions }: { regions: Region[] }) {
  const winners = [...new Map(regions.flatMap((region) => region.winners)
    .map((winner) => [winner.id, winner])).values()]
    .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
  if (!winners.length) return null;
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
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {winners.map((winner) => (
            <li key={winner.id} className="flex flex-col items-center rounded-2xl border border-white/15 bg-white px-4 py-6 text-center shadow-lg sm:px-5 sm:py-8">
              <WinnerLogo name={winner.name} src={winner.logo} />
              <h3 className="mt-5 w-full text-base font-semibold leading-snug text-navy [overflow-wrap:anywhere]">{winner.name}</h3>
              {winner.country && <p className="mt-1.5 text-sm text-muted">{winner.country}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
