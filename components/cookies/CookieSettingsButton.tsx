"use client";

import { clearCookieConsent } from "@/lib/cookies";

export function CookieSettingsButton() {
  return (
    <button
      onClick={clearCookieConsent}
      className="hover:text-white transition-colors focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-white rounded"
      aria-label="Cookie settings"
    >
      Cookie settings
    </button>
  );
}
