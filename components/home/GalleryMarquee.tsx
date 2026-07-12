import Image from "next/image";
import type { GalleryImage } from "@/lib/content/types";

export function GalleryMarquee({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) return null;
  // Duplicate the set so the translateX(-50%) loop is seamless.
  const loop = [...images, ...images];

  return (
    <section
      aria-label="Scenes from the GESAwards community"
      className="border-y border-line bg-white py-6"
    >
      <div className="group relative flex overflow-hidden">
        <div className="flex shrink-0 gap-4 pr-4 md:animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((img, i) => (
            <div
              key={i}
              aria-hidden={i >= images.length ? true : undefined}
              className="relative h-40 w-64 shrink-0 overflow-hidden rounded-xl sm:h-48 sm:w-72"
            >
              <Image
                src={img.src}
                alt={i >= images.length ? "" : img.alt}
                fill
                sizes="(min-width: 640px) 288px, 256px"
                loading={i < 2 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                quality={65}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
