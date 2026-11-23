"use client";

import Image from "next/image";
import { useState } from "react";

export function WinnerLogo({ name, src }: { name: string; src?: string }) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const initials = name.split(/\s+/).slice(0, 2).map((word) => Array.from(word)[0]).join("").toUpperCase();
  return (
    <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-2" aria-hidden="true">
      {src && failedSrc !== src ? (
        <Image src={src} alt="" width={64} height={64} unoptimized
          className="h-full w-full object-contain" onError={() => setFailedSrc(src)} />
      ) : <span className="font-display text-lg font-bold text-brand">{initials}</span>}
    </span>
  );
}
