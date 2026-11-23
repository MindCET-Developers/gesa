import type { RegionalWinner } from "@/lib/content/regional-winners-data";
import { WinnerLogo } from "./WinnerLogo";

const TILE = "flex h-full w-full flex-col items-center rounded-2xl border border-white/15 bg-white px-4 py-6 text-center shadow-lg sm:px-5 sm:py-8";

/** Equal tile per startup; the whole tile links to the company's website when one is on record. */
export function WinnerCard({ winner }: { winner: RegionalWinner }) {
  const body = (
    <>
      <WinnerLogo name={winner.name} src={winner.logo} />
      <h3 className="mt-5 w-full text-base font-semibold leading-snug text-navy [overflow-wrap:anywhere]">{winner.name}</h3>
      {winner.country && <p className="mt-1.5 text-sm text-muted">{winner.country}</p>}
    </>
  );

  if (!winner.website) return <li><div className={TILE}>{body}</div></li>;

  return (
    <li>
      <a href={winner.website} target="_blank" rel="noopener noreferrer"
        aria-label={`${winner.name}${winner.country ? `, ${winner.country}` : ""} – visit website (opens in a new tab)`}
        className={`${TILE} group transition duration-200 hover:-translate-y-1 hover:shadow-2xl focus-visible:-translate-y-1`}>
        {body}
        <span aria-hidden="true" className="mt-auto pt-4 text-sm font-semibold text-brand opacity-80 transition group-hover:opacity-100">
          Visit website ↗
        </span>
      </a>
    </li>
  );
}
