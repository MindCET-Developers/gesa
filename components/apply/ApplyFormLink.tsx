"use client";

import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { trackEvent } from "@/lib/analytics";

export function ApplyFormLink({ applyUrl }: { applyUrl: string }) {
  return (
    <a
      href={applyUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("apply_form_open", { link_url: applyUrl })}
      className={`${buttonClasses({ variant: "secondary", size: "md" })} mt-4`}
    >
      Open application form
      <ArrowRight className="size-4" />
    </a>
  );
}
