"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight, Close, Menu } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/content/types";

type Props = {
  logoText: string;
  nav: NavItem[];
};

export function Header({ logoText, nav }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The mobile menu closes via onClick on its links (below).

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-navy transition-shadow duration-300",
        scrolled || open
          ? "border-b border-white/10 shadow-lg shadow-navy/30 supports-[backdrop-filter]:bg-navy/90 supports-[backdrop-filter]:backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="shrink-0" aria-label={`${logoText} home`}>
          <Image
            src="/brand/gesawards-white.png"
            alt={logoText}
            width={150}
            height={49}
            priority
            className="block h-8 w-auto md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "text-sky"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/apply"
            className={cn(buttonClasses({ size: "md" }), "hidden sm:inline-flex")}
          >
            Apply today
            <ArrowRight className="size-4" />
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-white hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="container-page border-t border-white/10 pb-6 pt-2">
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-white hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/apply"
              onClick={() => setOpen(false)}
              className={cn(buttonClasses({ size: "lg" }), "mt-3 w-full")}
            >
              Apply today
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
