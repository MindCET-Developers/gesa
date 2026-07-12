import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight, Check, ExternalLink } from "@/components/ui/icons";
import {
  getHomeContent,
  getSiteSettings,
  getTrackBySlug,
  getTracks,
} from "@/lib/content";

type Params = { slug: string };

const trackStyles = [
  { panel: "bg-[#ff3f58]", soft: "bg-[#fff1f0]", ink: "text-[#d82942]" },
  { panel: "bg-[#0a7892]", soft: "bg-[#e8f7f7]", ink: "text-[#08677d]" },
  { panel: "bg-[#f5b51b]", soft: "bg-[#fff8e5]", ink: "text-[#805400]" },
  { panel: "bg-[#5836b8]", soft: "bg-[#f3efff]", ink: "text-[#5836b8]" },
] as const;

export async function generateStaticParams() {
  const home = await getHomeContent();
  const tracks = await getTracks(home.editionYear);
  return tracks.map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const track = await getTrackBySlug(slug);
  if (!track) return { title: "Track not found" };

  return {
    title: track.title,
    description: track.description,
    alternates: { canonical: `/tracks/${track.slug}` },
  };
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const [track, settings] = await Promise.all([
    getTrackBySlug(slug),
    getSiteSettings(),
  ]);
  if (!track) notFound();

  const style = trackStyles[((track.order ?? 1) - 1) % trackStyles.length];

  return (
    <>
      <section className={`${style.panel} relative isolate overflow-hidden px-5 py-20 text-white md:py-28`}>
        <div className="absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-white/10" />
        <div className="container-page grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0 max-w-3xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-white/70">
              {track.year} Special Track
            </p>
            <h1 className="mt-5 break-words font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              {track.title}
            </h1>
            {track.subtitle && (
              <p className="mt-5 max-w-2xl font-display text-xl font-semibold text-white/85 md:text-2xl">
                {track.subtitle}
              </p>
            )}
            {track.sponsor && (
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-white/70">
                Sponsored by {track.sponsor}
              </p>
            )}
          </div>

          {track.logos?.[0]?.image && (
            <div className="grid size-56 shrink-0 place-items-center rounded-[3rem] bg-white/90 p-10 shadow-2xl md:size-64">
              <Image
                src={track.logos[0].image}
                alt={track.logos[0].name}
                width={230}
                height={225}
                className="max-h-full w-auto object-contain"
                preload
              />
            </div>
          )}
        </div>
      </section>

      <div className="bg-white">
        <section className="container-page py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
            <div>
              <p className="max-w-3xl text-lg leading-8 text-navy/80 md:text-xl md:leading-9">
                {track.description}
              </p>

              {track.criteria?.length ? (
                <section className="mt-14" aria-labelledby="criteria-title">
                  <h2 id="criteria-title" className="font-display text-3xl font-bold text-navy">
                    What we&apos;re looking for
                  </h2>
                  <ul className="mt-7 grid gap-4">
                    {track.criteria.map((criterion) => (
                      <li key={criterion} className={`${style.soft} flex gap-4 rounded-2xl p-5 text-navy/80`}>
                        <span className={`${style.panel} mt-0.5 grid size-7 shrink-0 place-items-center rounded-full text-white`}>
                          <Check className="size-4" />
                        </span>
                        <span className="leading-7">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {track.benefits?.length ? (
                <section className="mt-14" aria-labelledby="benefits-title">
                  <h2 id="benefits-title" className="font-display text-3xl font-bold text-navy">
                    What winners gain
                  </h2>
                  <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                    {track.benefits.map((benefit) => (
                      <li key={benefit} className="rounded-2xl border border-line bg-surface p-5 font-semibold leading-7 text-navy">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {track.logos?.length ? (
                <section className="mt-14" aria-labelledby="logos-title">
                  <h2 id="logos-title" className="font-display text-2xl font-bold text-navy">
                    Track partners &amp; recognition
                  </h2>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {track.logos.map((logo) => {
                      const content = (
                        <>
                          <Image src={logo.image} alt={logo.name} width={150} height={80} className="h-16 w-auto object-contain" />
                          <span className="text-xs font-bold uppercase tracking-wide text-muted">{logo.role.replaceAll("-", " ")}</span>
                        </>
                      );
                      return logo.url ? (
                        <a key={`${logo.name}-${logo.role}`} href={logo.url} target="_blank" rel="noopener noreferrer" className="flex min-h-32 min-w-48 flex-col items-center justify-center gap-3 rounded-2xl border border-line p-5 transition hover:border-brand/40 hover:shadow-md">
                          {content}
                        </a>
                      ) : (
                        <div key={`${logo.name}-${logo.role}`} className="flex min-h-32 min-w-48 flex-col items-center justify-center gap-3 rounded-2xl border border-line p-5">
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className={`${style.soft} rounded-3xl p-7`}>
                <h2 className={`font-display text-2xl font-bold ${style.ink}`}>Ready to apply?</h2>
                <p className="mt-3 leading-7 text-navy/70">Join the {track.year} GESAwards edition and put your solution on the global stage.</p>
                <a href={settings.applyUrl} target="_blank" rel="noopener noreferrer" className={`${buttonClasses({ size: "lg" })} mt-6 w-full`}>
                  Apply to this track
                  <ArrowRight className="size-5" />
                </a>
                <Link href="/tracks" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-navy transition hover:bg-white/70">
                  Back to all tracks
                </Link>
                {track.sourceUrl && (
                  <a href={track.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center gap-1.5 text-xs font-semibold text-muted hover:text-brand">
                    Original legacy page
                    <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
