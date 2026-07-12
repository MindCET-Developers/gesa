"use client";

import { useState, type CSSProperties } from "react";
import type { SemifinalCountry } from "@/lib/content/types";

const MAX_SHOWN = 5;

export function FlagCluster({ countries }: { countries: SemifinalCountry[] }) {
  const [open, setOpen] = useState(false);
  const shown = countries.slice(0, MAX_SHOWN);
  const rest = countries.slice(MAX_SHOWN);

  return (
    <div>
      <div className="group flex">
        {shown.map((country, index) => (
          <span
            key={country.name}
            title={country.name}
            style={
              {
                marginLeft: index === 0 ? 0 : "-0.7rem",
                zIndex: MAX_SHOWN - index,
                "--fan-x": `${index * 5}px`,
              } as CSSProperties
            }
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-[0_1px_2px_rgba(11,16,32,.04),0_12px_32px_-16px_rgba(11,16,32,.14),inset_0_0_0_1.5px_rgba(15,23,42,.4)] transition-transform duration-300 group-hover:translate-x-[var(--fan-x)] group-hover:scale-110"
          >
            {country.code ? (
              <span className={`fi fi-${country.code} block h-full w-full bg-cover bg-center`} />
            ) : (
              <span className="block h-full w-full bg-surface" />
            )}
          </span>
        ))}
        {rest.length > 0 && (
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            style={{ marginLeft: "-0.7rem", zIndex: 0 }}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-navy text-[0.65rem] font-extrabold text-white shadow-[0_1px_2px_rgba(11,16,32,.04),0_12px_32px_-16px_rgba(11,16,32,.14)]"
            aria-expanded={open}
            aria-label={`${open ? "Hide" : "Show"} ${rest.length} more countries`}
          >
            +{rest.length}
          </button>
        )}
      </div>
      {open && rest.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5 pl-1">
          {rest.map((country) => (
            <span
              key={country.name}
              className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-navy"
            >
              {country.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
