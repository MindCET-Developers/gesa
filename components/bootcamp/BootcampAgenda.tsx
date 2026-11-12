"use client";

import { useState } from "react";
import { bootcampDays } from "@/lib/content/bootcampData";
import { cn } from "@/lib/utils";

const categoryStyles: Record<string, { badge: string; label: string }> = {
  keynote: { badge: "bg-brand/10 text-brand-700 border-brand/20", label: "Keynote" },
  panel: { badge: "bg-violet/10 text-violet border-violet/20", label: "Panel" },
  workshop: { badge: "bg-teal/10 text-teal border-teal/20", label: "Workshop" },
  networking: { badge: "bg-accent-yellow/20 text-navy border-accent-yellow/50", label: "Networking" },
  break: { badge: "bg-slate-100 text-muted border-slate-200", label: "Break" },
};

export function BootcampAgenda() {
  const [activeDayId, setActiveDayId] = useState(bootcampDays[0].id);
  const activeDay = bootcampDays.find((d) => d.id === activeDayId) ?? bootcampDays[0];

  return (
    <section id="agenda" className="py-20 md:py-28 bg-surface/50 border-y border-line/60">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-line">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-brand-700">
              Bootcamp 2026 · Archive
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">
              Previous Year&apos;s Agenda — For Reference Only
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted md:text-lg">
              This is the agenda of the January 2026 Bootcamp. The 2027 agenda is still being finalized and will be shared online soon.
            </p>
          </div>

          {/* Day Selector Pills */}
          <div className="inline-flex rounded-2xl bg-white p-1.5 shadow-sm border border-line shrink-0">
            {bootcampDays.map((day) => {
              const active = day.id === activeDayId;
              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setActiveDayId(day.id)}
                  className={cn(
                    "flex items-center gap-3 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer",
                    active
                      ? "bg-navy text-white shadow-md shadow-navy/20"
                      : "text-muted hover:text-navy hover:bg-slate-50"
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-extrabold uppercase px-2 py-0.5 rounded-md",
                      active ? "bg-white/20 text-white" : "bg-slate-100 text-muted"
                    )}
                  >
                    {day.dayNumber}
                  </span>
                  <span>{day.date}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Day Overview Banner */}
        <div className="my-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-navy to-navy-700 p-6 text-white shadow-lg">
          <div>
            <div className="flex items-center gap-2 text-sky text-xs font-bold uppercase tracking-wider">
              <span>{activeDay.dayNumber} Focus</span>
            </div>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              {activeDay.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm self-start sm:self-auto">
            <svg className="size-4 shrink-0 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{activeDay.location}</span>
          </div>
        </div>

        {/* Timeline Sessions List */}
        <div className="relative space-y-4">
          {activeDay.sessions.map((session, idx) => {
            const cat = categoryStyles[session.category || "keynote"];
            const isBreak = session.category === "break";

            return (
              <div
                key={idx}
                className={cn(
                  "group relative rounded-2xl border transition-all duration-200",
                  isBreak
                    ? "border-dashed border-line bg-slate-50/80 p-4 md:p-5"
                    : "border-line bg-white p-6 shadow-sm hover:shadow-md hover:border-brand/30"
                )}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  {/* Left: Time & Badge */}
                  <div className="flex items-center md:flex-col md:items-start gap-3 md:gap-2 shrink-0 md:w-36">
                    <span className="font-display font-extrabold text-lg text-navy tracking-tight">
                      {session.time}
                    </span>
                    {cat && (
                      <span
                        className={cn(
                          "inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border",
                          cat.badge
                        )}
                      >
                        {cat.label}
                      </span>
                    )}
                  </div>

                  {/* Center: Title & Description */}
                  <div className="flex-1">
                    <h4
                      className={cn(
                        "font-extrabold text-navy tracking-tight leading-snug",
                        isBreak ? "text-base text-muted font-bold" : "text-lg md:text-xl"
                      )}
                    >
                      {session.title}
                    </h4>
                    {session.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {session.description}
                      </p>
                    )}
                  </div>

                  {/* Right: Speakers */}
                  {session.speakers && session.speakers.length > 0 && (
                    <div className="md:w-64 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-line/60 md:pl-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted/70 block mb-1.5">
                        Speaker{session.speakers.length > 1 ? "s" : ""}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {session.speakers.map((sp, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center text-xs font-semibold text-navy bg-surface px-2.5 py-1 rounded-md border border-line"
                          >
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>
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
