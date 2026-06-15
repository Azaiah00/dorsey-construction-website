import { Award } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats, siteConfig } from "@/lib/site";

export function TrustBar() {
  return (
    <Section variant="dark" ariaLabelledby="trust-heading">
      <h2 id="trust-heading" className="sr-only">
        Why homeowners trust Dorsey Construction
      </h2>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-accent-light md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  display={stat.display}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-white/60">
                {stat.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* BBB callout */}
      <FadeIn delay={0.4}>
        <div className="mt-12 flex flex-col items-center gap-4 rounded-none border border-white/10 bg-white/5 p-6 text-center md:flex-row md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/20">
            <Award className="h-8 w-8 text-accent-light" aria-hidden="true" />
          </div>
          <div>
            <p className="font-display text-lg font-bold text-white">
              BBB Accredited Business — {siteConfig.bbb.rating} Rating
            </p>
            <p className="mt-1 text-sm text-white/60">
              Accredited since {siteConfig.bbb.accreditedSince}. Your trust is
              backed by the Better Business Bureau.
            </p>
          </div>
          <a
            href={siteConfig.bbb.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-none border border-accent px-5 py-2.5 text-sm font-semibold text-accent-light transition-colors hover:bg-accent hover:text-primary"
          >
            View BBB Profile
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
