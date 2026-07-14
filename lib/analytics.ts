import { sendGAEvent } from "@next/third-parties/google";
import type { ConsentValue } from "@/lib/cookies";

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Event names are also referenced in GA4 (Key events) and Google Ads
// (imported conversions) — renaming one here silently breaks those reports.
export type AnalyticsEventName =
  | "apply_form_open" // outbound click to the Airtable application form
  | "apply_engaged" // 15s engaged view of /apply
  | "apply_submitted" // /apply/thank-you reached after Airtable submit
  | "newsletter_signup";

export function trackEvent(
  name: AnalyticsEventName,
  params: Record<string, string | number | boolean> = {}
): void {
  if (typeof window === "undefined") return;
  sendGAEvent("event", name, params);
}

export function updateGoogleConsent(
  analytics: ConsentValue,
  ads: ConsentValue = "denied"
): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  });
}
