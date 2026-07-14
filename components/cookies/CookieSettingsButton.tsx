"use client";

export function CookieSettingsButton() {
  const handleCookieSettings = () => {
    try {
      localStorage.removeItem("gesa_cookie_consent_v1");
      // Dispatch storage event to notify other components
      window.dispatchEvent(new StorageEvent("storage", {
        key: "gesa_cookie_consent_v1",
        oldValue: null,
        newValue: null,
        storageArea: localStorage,
      }));
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
