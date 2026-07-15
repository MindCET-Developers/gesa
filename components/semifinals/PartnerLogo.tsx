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
    return (
      <Image
        src={logo}
        alt={`${partner} logo`}
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-full border border-gray-300 object-contain"
      />
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
