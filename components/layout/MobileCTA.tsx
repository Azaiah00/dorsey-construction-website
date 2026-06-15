"use client";

import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

/** Sticky mobile bottom bar — click-to-call + quote CTA */
export function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-white/10 bg-primary/95 p-3 backdrop-blur-md lg:hidden"
      role="complementary"
      aria-label="Quick contact actions"
    >
      <a
        href={siteConfig.phoneTel}
        className="flex flex-1 items-center justify-center gap-2 rounded-none border border-white/20 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent-light"
        aria-label={`Call ${siteConfig.phone}`}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call Now
      </a>
      <ButtonLink
        href="/#quote"
        variant="primary"
        size="sm"
        className="flex-1 py-3"
      >
        Free Quote
      </ButtonLink>
    </div>
  );
}
