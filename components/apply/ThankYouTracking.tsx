"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const CONVERSION_FLAG = "gesa_apply_conv";

export function ThankYouTracking() {
  useEffect(() => {
    // Airtable's post-submit redirect navigates the embed iframe, not the
    // top window. Once here we are same-origin with the parent /apply page,
    // so hand the navigation to the top frame and let the conversion fire
    // there with full GA session attribution.
    if (window.top && window.self !== window.top) {
      try {
        window.top.location.href = window.location.href;
        return;
      } catch {
        // Cross-origin parent (e.g. the old Wix embed) — stay in-frame.
      }
    }

    try {
      if (sessionStorage.getItem(CONVERSION_FLAG)) return; // refresh dedup
      sessionStorage.setItem(CONVERSION_FLAG, "1");
    } catch {
      // sessionStorage unavailable — still report the conversion
    }
    trackEvent("apply_submitted");
  }, []);

  return null;
}
