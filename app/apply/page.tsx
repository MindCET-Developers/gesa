import type { Metadata } from "next";
import { ApplyFormLink } from "@/components/apply/ApplyFormLink";
import { ApplyTracking } from "@/components/apply/ApplyTracking";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to the 2026 Global EdTech Startup Awards and take your startup to the global stage.",
};

export default async function ApplyPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <ApplyTracking />
      <section className="bg-navy px-5 py-16 text-center text-white md:py-24">
        <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-sky">
          2026 applications
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl md:text-6xl">
          Take your EdTech startup to the global stage
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          Complete the application below. Your progress is handled securely by
          Airtable and the form usually takes only a few minutes.
        </p>
      </section>

      <section className="bg-surface px-4 py-8 sm:px-6 md:py-12">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-navy/10">
            <iframe
              src={settings.applyUrl}
              title="GESAwards startup application form"
              className="block min-h-[780px] w-full md:min-h-[900px]"
              loading="eager"
            />
          </div>

          <div className="mt-6 text-center text-sm text-muted">
            <p>If the embedded form does not load, open it in a new tab.</p>
            <ApplyFormLink applyUrl={settings.applyUrl} />
          </div>
        </div>
      </section>
    </>
  );
}
