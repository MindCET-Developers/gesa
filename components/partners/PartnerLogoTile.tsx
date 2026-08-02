import Image from "next/image";

/* Some partners only supply a white/knockout version of their mark, which would
 * be invisible on our white logo strip. Those render on a dark tile instead, so
 * the logo reads the way its designers intended. Editors control this with the
 * "White logo — show on a dark tile" checkbox on the partner in Sanity. */
export function PartnerLogoTile({
  name,
  logo,
  knockout = false,
  className = "",
}: {
  name: string;
  logo: string;
  knockout?: boolean;
  className?: string;
}) {
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
        /* Capped at a 160px-wide tile from a small logo file — optimizing adds transform
         * cost without a meaningful size win. */
        unoptimized
        className={`max-w-full h-auto w-auto object-contain ${knockout ? "max-h-12" : "max-h-16"}`}
      />
    </span>
  );
}
