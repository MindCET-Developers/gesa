"use client";

import Image from "next/image";
import { useState } from "react";

const SIZES = {
  md: { box: "h-32 w-full max-w-48 sm:h-40 sm:max-w-56", w: 224, h: 160, fallback: "h-24 w-24 text-3xl sm:h-28 sm:w-28" },
  lg: { box: "h-36 w-full max-w-72 sm:h-44", w: 288, h: 176, fallback: "h-28 w-28 text-4xl" },
};

export function WinnerLogo({ name, src, size = "md" }: { name: string; src?: string; size?: keyof typeof SIZES }) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const s = SIZES[size];
  const initials = name.split(/\s+/).slice(0, 2).map((word) => Array.from(word)[0]).join("").toUpperCase();
  return (
    <span className={`flex shrink-0 items-center justify-center overflow-hidden ${s.box}`} aria-hidden="true">
      {src && failedSrc !== src ? (
        <Image src={src} alt="" width={s.w} height={s.h} unoptimized
          className="h-full w-full object-contain" onError={() => setFailedSrc(src)} />
      ) : <span className={`flex items-center justify-center rounded-2xl bg-surface font-display font-bold text-brand ${s.fallback}`}>{initials}</span>}
    </span>
  );
}
