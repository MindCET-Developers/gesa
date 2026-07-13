"use client";

import { useEffect, useRef, type ReactNode } from "react";

const MESSAGE_TYPE = "gesa:embed-resize";

export function EmbedFrame({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let animationFrame = 0;

    const reportHeight = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const height = Math.ceil(frame.getBoundingClientRect().height);
        window.parent.postMessage({ type: MESSAGE_TYPE, height }, "*");
      });
    };

    reportHeight();

    const resizeObserver = new ResizeObserver(reportHeight);
    resizeObserver.observe(frame);
    window.addEventListener("load", reportHeight);
    window.addEventListener("resize", reportHeight);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("load", reportHeight);
      window.removeEventListener("resize", reportHeight);
    };
  }, []);

  return (
    <div ref={frameRef} className="w-full bg-white px-3 py-4 sm:px-5 sm:py-6">
      {children}
    </div>
  );
}
