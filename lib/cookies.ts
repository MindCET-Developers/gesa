const COOKIE_CONSENT_KEY = "gesa_cookie_consent_v1";

export type ConsentType = "all" | "rejected" | "none";

export interface CookieConsentState {
  accepted: boolean;
  rejected: boolean;
  analytics_storage: "denied" | "granted";
  ad_storage: "denied";
  ad_user_data: "denied";
  ad_personalization: "denied";
}

const DEFAULT_CONSENT_STATE: CookieConsentState = {
  accepted: false,
  rejected: false,
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

export function getCookieConsent(): CookieConsentState {
  if (typeof document === "undefined") {
    return DEFAULT_CONSENT_STATE;
  }

  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      return JSON.parse(stored) as CookieConsentState;
    }
  } catch {
    // Fallback to default if parsing fails
  }

  return DEFAULT_CONSENT_STATE;
}

export function setCookieConsent(consent: CookieConsentState): void {
  if (typeof document === "undefined") {
    return;
  }

  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

export function acceptAnalytics(): CookieConsentState {
  const state: CookieConsentState = {
    accepted: true,
    rejected: false,
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
  setCookieConsent(state);
  return state;
}

export function rejectConsent(): CookieConsentState {
  const state: CookieConsentState = {
    accepted: false,
    rejected: true,
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
  setCookieConsent(state);
  return state;
}

export function revokeConsent(): CookieConsentState {
  return rejectConsent();
}

export function hasUserConsented(): boolean {
  const consent = getCookieConsent();
  return consent.accepted || consent.rejected;
}
