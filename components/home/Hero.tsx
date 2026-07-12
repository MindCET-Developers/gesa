import Image from "next/image";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { VideoDialog } from "@/components/ui/video-dialog";
import { cn } from "@/lib/utils";
import type { HomeContent, SiteSettings } from "@/lib/content/types";

export function Hero({
  home,
  settings,
}: {
  home: HomeContent;
  settings: SiteSettings;
}) {
  const collage = home.gallery.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Ambient glow + dotted texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 75% 10%, rgba(17,109,255,0.45), transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(78,183,245,0.25), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          color: "#7aa2ff",
        }}
      />

      <div className="container-page relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <span className="size-2 rounded-full bg-sky" />
            {home.heroKicker}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            {home.heroTitle.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {home.heroSubtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={settings.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ size: "lg" })}
            >
              Apply today
              <ArrowRight className="size-5" />
            </a>
            <VideoDialog
              embedUrl={settings.videoUrl}
              className={buttonClasses({ variant: "outline-light", size: "lg" })}
            >
              Watch the film
            </VideoDialog>
          </div>
        </div>

        {/* Overlapping photo collage */}
        <div className="relative hidden h-[460px] lg:block">
          {collage.map((img, i) => {
            const layout = [
              "left-0 top-4 w-[58%] rotate-[-4deg]",
              "right-0 top-0 w-[46%] rotate-[5deg]",
              "left-8 bottom-0 w-[50%] rotate-[3deg]",
              "right-4 bottom-6 w-[44%] rotate-[-6deg]",
            ][i];
            return (
              <div
                key={img.src}
                className={cn(
                  "absolute overflow-hidden rounded-2xl border-4 border-white/90 shadow-2xl",
                  layout
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={420}
                  height={300}
                  className="h-auto w-full object-cover"
                  priority={i === 0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
