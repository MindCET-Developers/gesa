import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { getHomeContent, getSiteSettings, getTracks } from "@/lib/content";

const trackStyles = [
  { panel: "bg-[#ff3f58]", accent: "bg-[#ffe9e8]", ink: "text-[#ff3f58]" },
  { panel: "bg-[#0a7892]", accent: "bg-[#dff5f4]", ink: "text-[#0a7892]" },
  { panel: "bg-[#f5b51b]", accent: "bg-[#fff3cf]", ink: "text-[#9a6500]" },
  { panel: "bg-[#5836b8]", accent: "bg-[#eee8ff]", ink: "text-[#5836b8]" },
] as const;

const originalTrackLogos: Record<string, { src: string; alt: string }> = {
  "hacking-education-with-vibe-coding": {
    src: "/brand/mindcet.png",
    alt: "MindCET",
  },
  "learning-by-creating": {
    src: "/brand/novodia-wordmark.png",
    alt: "NovoDia",
  },
};

const trophyLogo = {
  src: "https://static.wixstatic.com/media/69f6a1_789a645b669043f49122a02ee8a948bb~mv2.png/v1/fill/w_230,h_225,al_c,lg_1,q_85,enc_avif,quality_auto/trophy.png",
  alt: "GESAwards trophy",
};

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
      <section className="relative isolate flex min-h-[430px] items-center justify-center overflow-hidden bg-[#075879] px-5 py-24 text-center text-white md:min-h-[585px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(0,119,145,0.7),transparent_34%),radial-gradient(circle_at_84%_80%,rgba(0,50,91,0.4),transparent_38%)]" />
        <div>
          <p className="mb-5 font-display text-sm font-bold uppercase tracking-[0.24em] text-white/70">
            {home.editionYear} Edition
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Competition Tracks
            <span className="mt-3 block">{home.editionYear}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Discover the award categories where the world&apos;s most promising
            EdTech startups compete for international recognition.
          </p>
        </div>
      </section>

      <section aria-label="Competition tracks" className="bg-white">
        {tracks.map((track, i) => {
          const style = trackStyles[i % trackStyles.length];
          const reverse = i % 2 === 1;
          const displayLogo = originalTrackLogos[track.slug] ?? trophyLogo;

          return (
            <article
              key={track.title}
              className="grid min-h-[500px] border-b-[10px] border-[#080d42] md:grid-cols-2"
            >
              <div
                className={`${style.panel} flex items-center ${reverse ? "md:order-2" : ""}`}
              >
                <div className="w-full px-7 py-16 sm:px-12 md:px-[10%] md:py-24">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                    Track {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[1.08] text-white md:text-5xl">
                    {track.title}
                  </h2>
                  {track.subtitle && (
                    <p className="mt-4 max-w-lg font-display text-lg font-semibold text-white/80">
                      {track.subtitle}
                    </p>
                  )}
                  <p className="mt-6 max-w-lg text-base leading-7 text-white/90 md:text-lg [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">
                    {track.description}
                  </p>
                  {track.sponsor && (
                    <p className="mt-5 text-sm font-semibold text-white/80">
                      Sponsored by {track.sponsor}
                    </p>
                  )}
                  <Link
                    href={`/tracks/${track.slug}`}
                    className={`mt-9 inline-flex min-h-14 w-full max-w-md items-center justify-center gap-2 bg-white px-8 font-display text-lg font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${style.ink}`}
                  >
                    Explore track
                    <ArrowRight className="size-5" />
                  </Link>
                </div>
              </div>

              <div
                aria-hidden="true"
                className={`${style.accent} relative hidden items-center justify-center overflow-hidden md:flex ${reverse ? "md:order-1" : ""}`}
              >
                <div className={`absolute size-[22rem] rotate-12 rounded-[4rem] ${style.panel} opacity-15`} />
                <div className="relative grid size-64 place-items-center rounded-[3rem] bg-white/80 p-12 shadow-xl lg:size-80">
                  <Image
                    src={displayLogo.src}
                    alt={displayLogo.alt}
                    width={230}
                    height={225}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-[#080d42] px-5 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to compete?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Applications for the {home.editionYear} edition are open to EdTech
            startups worldwide.
          </p>
          <a
            href={settings.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses({ variant: "light", size: "lg" })} mt-8`}
          >
            Apply today
            <ArrowRight className="size-5" />
          </a>
        </div>
      </section>
    </>
  );
}
