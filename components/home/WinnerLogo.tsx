"use client";

import Image from "next/image";
import { useState } from "react";

export function WinnerLogo({ name, src }: { name: string; src?: string }) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const initials = name.split(/\s+/).slice(0, 2).map((word) => Array.from(word)[0]).join("").toUpperCase();
  return (
    <span className="flex h-24 w-full max-w-36 shrink-0 items-center justify-center overflow-hidden bg-white p-2 sm:h-28" aria-hidden="true">
      {src && failedSrc !== src ? (
        <Image src={src} alt="" width={144} height={112} unoptimized
          className="h-full w-full object-contain" onError={() => setFailedSrc(src)} />
      ) : <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-surface font-display text-2xl font-bold text-brand">{initials}</span>}
    </span>
  );
}
