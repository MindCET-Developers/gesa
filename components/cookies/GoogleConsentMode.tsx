"use client";

import { useEffect } from "react";
import { getCookieConsent } from "@/lib/cookies";

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function GoogleConsentMode() {
  useEffect(() => {
    const consent = getCookieConsent();

    // Initialize gtag consent settings before Google Analytics loads
    if (window.gtag) {
      window.gtag("consent", "default", {
        analytics_storage: consent.analytics_storage,
        ad_storage: consent.ad_storage,
        ad_user_data: consent.ad_user_data,
        ad_personalization: consent.ad_personalization,
        wait_for_update: 500,
      });
    }
  }, []);

  return null;
}

export function updateGoogleConsent(
  analytics: "granted" | "denied",
  ads: "granted" | "denied" = "denied"
) {
  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: analytics,
      ad_storage: ads,
      ad_user_data: ads,
      ad_personalization: ads,
    });
  }
}
