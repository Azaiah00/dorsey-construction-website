import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site";

export function CTABanner() {
  return (
    <Section variant="dark" className="!py-16" ariaLabelledby="cta-heading">
      <FadeIn>
        <div className="text-center">
          <h2
            id="cta-heading"
            className="font-display text-display-md font-bold text-white"
          >
            Ready to Transform Your Home?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Get a free, no-obligation estimate from Richmond&apos;s trusted
            remodeling experts. We reply within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/#quote" variant="primary" size="lg">
              Get a Free Quote
            </ButtonLink>
            <ButtonLink
              href={siteConfig.phoneTel}
              variant="phone"
              size="lg"
              className="justify-center"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {siteConfig.phone}
            </ButtonLink>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
