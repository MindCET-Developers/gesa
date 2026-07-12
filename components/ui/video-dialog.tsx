"use client";

import { useEffect, useRef, useState } from "react";
import { Close, Play } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type Props = {
  embedUrl: string;
  className?: string;
  children: React.ReactNode;
};

export function VideoDialog({ embedUrl, className, children }: Props) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        <Play className="size-4" />
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="fixed inset-0 z-[100] grid place-items-center bg-navy/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <Close className="size-6" />
            </button>
            <div className={cn("aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl")}>
              <iframe
                className="size-full"
                src={`${embedUrl}?autoplay=1`}
                title="GESAwards video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
