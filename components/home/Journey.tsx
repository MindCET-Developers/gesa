import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import type { HomeContent, SiteSettings } from "@/lib/content/types";

export function Journey({
  home,
  settings,
}: {
  home: HomeContent;
  settings: SiteSettings;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(50% 60% at 100% 0%, rgba(17,109,255,0.35), transparent 60%)",
        }}
      />
      <div className="container-page relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            tone="light"
            kicker={home.currentEditionKicker}
            title={home.currentEditionTitle}
            intro={home.currentEditionBody}
          />
          <a
            href={settings.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses({ size: "lg" })} mt-8`}
          >
            Apply for {home.editionYear}
            <ArrowRight className="size-5" />
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-sky">
            {home.timelineTitle}
          </h3>
          <ol className="mt-6 space-y-0">
            {home.timeline.map((event, i) => (
              <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
                {/* connector */}
                {i !== home.timeline.length - 1 && (
                  <span className="absolute left-[11px] top-7 h-full w-px bg-white/15" />
                )}
                <span className="relative mt-1.5 grid size-6 shrink-0 place-items-center">
                  <span className="size-3 rounded-full bg-sky ring-4 ring-sky/20" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-white">
                    {event.date}
                  </p>
                  <p className="mt-1 text-white/70">{event.label}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
