"use client";

export function CookieSettingsButton() {
  const handleCookieSettings = () => {
    // Clear consent and reload to show banner
    try {
      localStorage.removeItem("gesa_cookie_consent_v1");
      window.location.reload();
    } catch {
      // Silently fail if localStorage is unavailable
    }
  };

  return (
    <button
      onClick={handleCookieSettings}
      className="hover:text-white transition-colors focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-white rounded"
      aria-label="Cookie settings"
    >
      Cookie settings
    </button>
  );
}
