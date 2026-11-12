"use client";

import Image from "next/image";
import { useState } from "react";
import { bootcampSpeakers } from "@/lib/content/bootcampData";
import { cn } from "@/lib/utils";

type FilterTab = "all" | "investor" | "expert" | "founder" | "mindcet";

const filterLabels: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All Speakers" },
  { id: "investor", label: "Investors & VCs" },
  { id: "expert", label: "Industry Leaders" },
  { id: "founder", label: "Founders" },
  { id: "mindcet", label: "MindCET Leadership" },
];

export function BootcampSpeakers() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const filtered = bootcampSpeakers.filter((sp) => {
    if (activeFilter === "all") return true;
    return sp.category === activeFilter;
  });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-line">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-brand-700">
              Bootcamp 2026 · Archive
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">
              Previous Year&apos;s Speakers
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted md:text-lg">
              The investors, operators, legal specialists and education leaders who led sessions in January 2026. The 2027 speakers will be announced soon.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterLabels.map((tab) => {
              const active = tab.id === activeFilter;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border",
                    active
                      ? "bg-navy text-white border-navy shadow-sm"
                      : "bg-surface text-muted border-line hover:text-navy hover:bg-slate-100"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((speaker, idx) => {
            const initials = speaker.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("");

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-surface/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="flex items-start gap-4">
                  {/* Photo or Avatar with Initials */}
                  {speaker.photo ? (
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-line shadow-sm">
                      <Image
                        src={speaker.photo}
                        alt={speaker.name}
                        fill
                        sizes="56px"
                        className="object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy to-brand font-display font-extrabold text-sm text-white shadow-sm">
                      {initials}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h3 className="font-extrabold text-base text-navy leading-tight truncate group-hover:text-brand-700 transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-muted leading-snug line-clamp-2">
                      {speaker.role}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs">
                  <span className="font-bold text-navy truncate">
                    {speaker.company || "Independent"}
                  </span>
                  {speaker.category === "investor" && (
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-violet/10 text-violet">
                      Investor
                    </span>
                  )}
                  {speaker.category === "mindcet" && (
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand/10 text-brand-700">
                      MindCET
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
