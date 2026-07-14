"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// A visit only counts as "engaged" after this long on the page — short
// bounces from ads should not look like application intent.
const ENGAGED_MS = 15_000;

export function ApplyTracking() {
  useEffect(() => {
    const id = window.setTimeout(() => trackEvent("apply_engaged"), ENGAGED_MS);
    return () => window.clearTimeout(id);
  }, []);

  return null;
}
