import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { getHomeContent, getSiteSettings, getTracks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tracks",
  description:
    "The GESAwards competition tracks — the award categories startups compete in each edition.",
};

export default async function TracksPage() {
  const [home, settings] = await Promise.all([
    getHomeContent(),
    getSiteSettings(),
  ]);
  const tracks = await getTracks(home.editionYear);

  return (
    <>
      <PageHero
        kicker={`${home.editionYear} Edition`}
        title="Competition tracks"
        intro="Startups compete for international recognition across these award tracks. Each track is judged against the five GESAwards criteria."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {tracks.map((track, i) => (
            <article
              key={track.title}
              className="flex flex-col rounded-2xl border border-line bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-display text-sm font-bold text-brand">
                Track {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-navy">
                {track.title}
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">
                {track.description}
              </p>
              {track.sponsor && (
                <p className="mt-5 text-sm text-muted">
                  Sponsored by{" "}
                  <span className="font-semibold text-navy">{track.sponsor}</span>
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-surface p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-bold text-navy">
            Ready to compete?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Applications for the {home.editionYear} edition are open to EdTech
            startups worldwide.
          </p>
          <a
            href={settings.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses({ size: "lg" })} mt-6`}
          >
            Apply today
            <ArrowRight className="size-5" />
          </a>
        </div>
      </section>
    </>
  );
}
