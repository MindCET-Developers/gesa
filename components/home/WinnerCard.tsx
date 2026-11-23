"use client";

import { useRef } from "react";
import type { RegionalWinner } from "@/lib/content/regional-winners-data";
import { WinnerLogo } from "./WinnerLogo";

function host(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export function WinnerCard({ winner }: { winner: RegionalWinner }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const hasDetails = Boolean(winner.description || winner.website);
  const body = (
    <>
      <WinnerLogo name={winner.name} src={winner.logo} />
      <h3 className="mt-5 w-full text-base font-semibold leading-snug text-navy [overflow-wrap:anywhere]">{winner.name}</h3>
      {winner.country && <p className="mt-1.5 text-sm text-muted">{winner.country}</p>}
    </>
  );
  const tile = "flex h-full w-full flex-col items-center rounded-2xl border border-white/15 bg-white px-4 py-6 text-center shadow-lg sm:px-5 sm:py-8";

  if (!hasDetails) return <li><div className={tile}>{body}</div></li>;

  return (
    <li>
      <button type="button" onClick={() => dialog.current?.showModal()} aria-haspopup="dialog"
        className={`${tile} group cursor-pointer transition duration-200 hover:-translate-y-1 hover:shadow-2xl focus-visible:-translate-y-1`}>
        {body}
        <span className="mt-auto pt-4 text-sm font-semibold text-brand opacity-80 transition group-hover:opacity-100">
          Learn more <span aria-hidden="true">→</span>
        </span>
      </button>
      <dialog ref={dialog} aria-labelledby={`${winner.id}-title`}
        onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.close(); }}
        className="m-auto w-[min(40rem,calc(100vw-2rem))] max-h-[min(44rem,calc(100dvh-2rem))] overflow-hidden rounded-3xl bg-white p-0 text-navy shadow-2xl backdrop:bg-navy/70 backdrop:backdrop-blur-sm">
        <div className="flex max-h-[inherit] flex-col">
          <div className="relative flex flex-col items-center border-b border-line bg-surface px-6 pb-6 pt-10 text-center">
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-navy/60 hover:bg-white hover:text-navy">
              ×
            </button>
            <WinnerLogo name={winner.name} src={winner.logo} size="lg" />
            <h3 id={`${winner.id}-title`} className="mt-5 font-display text-2xl font-extrabold leading-tight [overflow-wrap:anywhere]">{winner.name}</h3>
            {winner.country && <p className="mt-1 text-muted">{winner.country}</p>}
          </div>
          {winner.description && (
            <div className="overflow-y-auto px-6 py-6 text-base leading-relaxed text-navy/80 whitespace-pre-line sm:px-8">{winner.description}</div>
          )}
          {winner.website && (
            <div className="border-t border-line px-6 py-5 sm:px-8">
              <a href={winner.website} target="_blank" rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-600 sm:w-auto">
                Visit {host(winner.website)} <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
      </dialog>
    </li>
  );
}
