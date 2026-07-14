"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function SiteShell({
  children,
  header,
  footer,
}: {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.startsWith("/embed/") || pathname.startsWith("/studio")) {
    return <main>{children}</main>;
  }

  return (
    <div className="flex min-h-full flex-col">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-2 font-semibold text-navy shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      {header}
      <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-24">
        {children}
      </main>
      {footer}
    </div>
  );
}
