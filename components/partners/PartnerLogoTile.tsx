import Image from "next/image";

/* Some partners only supply a white/knockout version of their mark, which is
 * invisible on our white logo strip. Those get a dark tile so the logo reads
 * the way its designers intended. Verified by sampling every partner asset:
 * in these four, the wordmark is near-white and only an accent shape has colour.
 * TODO: promote this to a `knockout` boolean on the partner schema in Sanity so
 * editors can flag it themselves instead of editing this list. */
const KNOCKOUT_PARTNERS = new Set([
  "xedu",
  "edcrunch",
  "edtech italy",
  "prize sponsor",
]);

export function isKnockoutLogo(name: string): boolean {
  return KNOCKOUT_PARTNERS.has(name.trim().toLowerCase());
}

export function PartnerLogoTile({
  name,
  logo,
  className = "",
}: {
  name: string;
  logo: string;
  className?: string;
}) {
  const knockout = isKnockoutLogo(name);

  return (
    <span
      className={`grid h-16 w-40 place-items-center transition hover:opacity-80 ${
        knockout ? "rounded-md bg-navy px-3 py-2" : ""
      } ${className}`}
    >
      <Image
        src={logo}
        alt={name}
        width={320}
        height={128}
        /* h-auto/w-auto lets each logo keep its own aspect ratio, capped by the
         * tile; eager loading avoids the 0x0-until-loaded lazy-loading deadlock. */
        loading="eager"
        className={`max-w-full h-auto w-auto object-contain ${knockout ? "max-h-12" : "max-h-16"}`}
      />
    </span>
  );
}
