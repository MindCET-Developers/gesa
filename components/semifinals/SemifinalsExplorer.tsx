"use client";

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { RegionalSemifinalEntry } from "@/lib/content/types";
import { CONTINENTS } from "./continents";
import { ContinentSection } from "./ContinentSection";

type TabKey = "worldwide" | RegionalSemifinalEntry["continent"];

export function SemifinalsExplorer({ entries }: { entries: RegionalSemifinalEntry[] }) {
  const [active, setActive] = useState<TabKey>("worldwide");
  const tabRefs = useRef<Partial<Record<TabKey, HTMLButtonElement | null>>>({});
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const grouped = useMemo(
    () =>
      CONTINENTS.map((meta) => ({
        meta,
        entries: entries.filter((entry) => entry.continent === meta.key),
      })),
    [entries]
  );

  const updateIndicator = useCallback((key: TabKey) => {
    const button = tabRefs.current[key];
    if (!button) return;

    setIndicator({
      left: button.offsetLeft,
      top: button.offsetTop,
      width: button.offsetWidth,
      height: button.offsetHeight,
    });
  }, []);

  useLayoutEffect(() => {
    updateIndicator(active);

    const handleResize = () => updateIndicator(active);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active, updateIndicator]);

  function selectTab(key: TabKey) {
    setActive(key);
    updateIndicator(key);
  }

  const visible = grouped.filter((group) => active === "worldwide" || active === group.meta.key);
  const activeAccessibleColor =
    active === "worldwide"
      ? "var(--color-navy)"
      : CONTINENTS.find((continent) => continent.key === active)?.accessibleColor ??
        "var(--color-navy)";

  return (
    <div>
      <div className="relative mx-auto mb-11 flex max-w-full flex-wrap justify-center gap-1.5 p-1">
        <span
          className="absolute rounded-full transition-all duration-[450ms] ease-out-expo"
          style={{
            left: indicator.left,
            top: indicator.top,
            width: indicator.width,
            height: indicator.height,
            background: activeAccessibleColor,
          }}
        />
        <button
          ref={(element) => {
            tabRefs.current.worldwide = element;
          }}
          type="button"
          onClick={() => selectTab("worldwide")}
          className={`relative z-10 flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            active === "worldwide" ? "border-transparent text-white" : "border-navy/30 text-navy"
          }`}
        >
          Worldwide
          <span className="rounded-full bg-black/10 px-1.5 text-xs font-bold">{entries.length}</span>
        </button>
        {CONTINENTS.map((meta) => {
          const count = entries.filter((entry) => entry.continent === meta.key).length;
          const isActive = active === meta.key;

          return (
            <button
              key={meta.key}
              ref={(element) => {
                tabRefs.current[meta.key] = element;
              }}
              type="button"
              onClick={() => selectTab(meta.key)}
              className="relative z-10 flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
              style={{
                borderColor: isActive ? "transparent" : meta.accessibleColor,
                color: isActive ? "#fff" : meta.accessibleColor,
              }}
            >
              {meta.label}
              <span
                className="rounded-full px-1.5 text-xs font-bold"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,.25)"
                    : `color-mix(in srgb, var(${meta.colorVar}) 12%, transparent)`,
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-11">
        {visible.map(({ meta, entries: sectionEntries }) => (
          <ContinentSection key={meta.key} meta={meta} entries={sectionEntries} />
        ))}
      </div>
    </div>
  );
}
