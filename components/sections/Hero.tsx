import Image from "next/image";
import { Phone, Shield, Award, Clock, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig, heroImage } from "@/lib/site";

/**
 * Headline options considered:
 * 1. "Remodels Richmond Homeowners Brag About" ✓ selected — social proof + local
 * 2. "Craftsmanship You Can See. Trust You Can Feel."
 * 3. "Your Vision. Our 17 Years of Expertise."
 */
export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background image */}
      <Image
        src={heroImage}
        alt="Beautiful modern home interior after a premium remodel in Richmond, Virginia"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={85}
      />

      {/* Dark gradient overlay */}
      <div className="hero-gradient absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-32 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-light">
            Richmond&apos;s Trusted Remodeling Experts · {siteConfig.yearsInBusiness}{" "}
            Years · BBB {siteConfig.bbb.rating}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            id="hero-heading"
            className="max-w-4xl break-words font-display text-display-xl font-bold text-white"
          >
            Remodels Richmond Homeowners{" "}
            <span className="text-accent-light">Brag About</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Kitchen, bathroom, and whole-home transformations built by{" "}
            {siteConfig.owner} — {siteConfig.yearsInBusiness} years of
            owner-operated craftsmanship serving Central Virginia.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
              Call {siteConfig.phone}
            </ButtonLink>
          </div>
        </FadeIn>

        {/* Trust strip */}
        <FadeIn delay={0.4}>
          <ul
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-8"
            aria-label="Trust indicators"
          >
            {[
              { icon: Award, label: `BBB ${siteConfig.bbb.rating} Accredited` },
              { icon: Clock, label: `${siteConfig.yearsInBusiness} Years in Business` },
              { icon: Shield, label: "Licensed & Insured" },
              { icon: Star, label: "100% Satisfaction Focus" },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-white/70"
              >
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
