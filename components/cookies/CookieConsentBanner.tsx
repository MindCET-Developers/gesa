"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import {
  acceptAnalytics,
  rejectConsent,
  hasUserConsented,
} from "@/lib/cookies";
import { updateGoogleConsent } from "./GoogleConsentMode";

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(() => !hasUserConsented());

  useEffect(() => {
    // Sync state with localStorage changes if needed
  }, []);

  const handleAccept = () => {
    acceptAnalytics();
    updateGoogleConsent("granted", "denied");
    setIsVisible(false);
  };

  const handleReject = () => {
    rejectConsent();
    updateGoogleConsent("denied", "denied");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 inset-x-0 bg-navy border-t border-white/10 shadow-lg z-50"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-5">
        {/* Close button */}
        <button
          onClick={handleReject}
          className="absolute top-3 right-3 size-8 md:size-9 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        {/* Content */}
        <div className="pr-10 md:pr-0">
          <h2 className="text-sm md:text-base font-semibold mb-2 text-white">
            We use cookies to analyze performance
          </h2>
          <p className="text-xs md:text-sm text-white/70 mb-4">
            We use optional Google Analytics cookies to understand how you use
            our website and to improve performance. You can accept or reject
            these cookies at any time.{" "}
            <Link
              href="/privacy-policy"
              className="text-brand hover:underline focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-brand rounded"
            >
              Privacy Policy
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded bg-brand text-white text-sm font-medium hover:bg-opacity-90 transition-all focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand active:bg-opacity-80"
              aria-label="Accept analytics cookies"
            >
              Accept cookies
            </button>
            <button
              onClick={handleReject}
              className="px-4 py-2 rounded border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white active:bg-white/5"
              aria-label="Reject cookies"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
