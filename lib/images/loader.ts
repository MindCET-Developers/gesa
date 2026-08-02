"use client";

/* Custom next/image loader — replaces Vercel's image optimizer for every image on the site.
 *
 * Sanity and Wix both ship their own image pipelines on their own CDNs, at no cost to us,
 * so routing those images through /_next/image only burned Vercel Image Transformations to
 * produce something the source CDN already serves. Sanity images now get resized and
 * format-negotiated by Sanity itself, and next/image still builds a responsive srcset from
 * the URLs we return here — so responsive behaviour is unchanged.
 *
 * Anything else — our own files under public/, and the remaining Wix-hosted assets — is
 * served as-is: they are already small, correctly sized files with nothing to gain from
 * being resized on the fly. Those URLs still carry a ?w= marker, which both serves as
 * documentation of the size next/image asked for and satisfies its dev-mode check that a
 * custom loader consumes `width`. Static file serving ignores the query string, so every
 * entry in the generated srcset resolves to the same untouched file.
 */

type LoaderArgs = { src: string; width: number; quality?: number };

export default function imageLoader({ src, width, quality }: LoaderArgs): string {
  if (src.startsWith("https://cdn.sanity.io/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    // Serve WebP/AVIF to browsers that accept it, and never upscale past the original.
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "max");
    return url.toString();
  }

  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}w=${width}`;
}
