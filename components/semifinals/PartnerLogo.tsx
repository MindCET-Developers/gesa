import Image from "next/image";

const MONOGRAM_COLORS = [
  "#0D4FBD",
  "#17658F",
  "#08776E",
  "#19713D",
  "#765E00",
  "#B51219",
  "#5B3BD6",
  "#0A1450",
];
const STOPWORDS = new Set(["the", "of", "and", "for", "de", "la", "le", "les", "a"]);

function initials(name: string): string {
  const words = name
    .replace(/[()/]/g, " ")
    .split(/[\s-]+/)
    .filter((word) => word && !STOPWORDS.has(word.toLowerCase()));
  const letters = words
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join("");

  return letters || name.slice(0, 2).toUpperCase();
}

function monogramColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return MONOGRAM_COLORS[hash % MONOGRAM_COLORS.length]!;
}

export function PartnerLogo({ partner, logo }: { partner: string; logo?: string }) {
  if (logo) {
    /* The tile keeps a fixed height and lets its width follow the logo's aspect ratio:
     * square marks stay the same 48px circle as before, while wide wordmarks (e.g. Tech
     * Monterrey at 800x211) widen into a pill instead of being squeezed into a circle,
     * where they'd render only ~12px tall and become unreadable. */
    return (
      <span className="inline-flex h-12 w-auto min-w-12 max-w-[7.5rem] shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white">
        <Image
          src={logo}
          alt={`${partner} logo`}
          width={240}
          height={96}
          /* Eager: the intrinsic ratio only settles once the file loads, and a lazy image
           * inside an auto-width tile would sit at the placeholder ratio until scrolled to. */
          loading="eager"
          /* Rendered at most 120px wide from an already-small logo file, so optimizing
           * buys nothing — and it keeps any Airtable-hosted fallback (whose URL changes
           * on every fetch) out of the image optimizer entirely. */
          unoptimized
          className="h-12 w-auto max-w-full object-contain"
        />
      </span>
    );
  }

  const bg = monogramColor(partner);
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white text-[0.72rem] font-extrabold tracking-wide shadow-[0_1px_2px_rgba(11,16,32,.04),0_12px_32px_-16px_rgba(11,16,32,.14),inset_0_0_0_1.5px_rgba(15,23,42,.3)]"
      style={{ background: bg, color: "#fff" }}
      title={`${partner} (no logo on file)`}
    >
      {initials(partner)}
    </div>
  );
}
