import {
  ChefHat,
  Bath,
  Home,
  Layers,
  Grid3x3,
  Palette,
  Building2,
  Hammer,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { createMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata = createMetadata({
  title: "Remodeling Services",
  description:
    "Kitchen remodeling, bathroom renovations, basement finishing, flooring, and whole-home remodels in Richmond, VA and Central Virginia.",
  path: "/services",
});

const iconMap: Record<string, LucideIcon> = {
  ChefHat,
  Bath,
  Home,
  Layers,
  Grid3x3,
  Palette,
  Building2,
  Hammer,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
              Our Services
            </p>
            <h1 className="max-w-3xl font-display text-display-lg font-bold text-white">
              Premium Remodeling Services in Richmond, VA
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              From kitchen and bathroom remodels to whole-home renovations and
              new construction — every project receives owner-operated attention.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Detailed service cards */}
      <Section ariaLabelledby="services-list-heading">
        <h2 id="services-list-heading" className="sr-only">
          All remodeling services
        </h2>
        <div className="space-y-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Home;
            return (
              <FadeIn key={service.id} delay={i * 0.05}>
                <article
                  id={service.id}
                  className="scroll-mt-28 grid gap-8 rounded-none bg-white p-8 shadow-card md:grid-cols-2 md:p-10"
                >
                  <div>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-none bg-accent/10 text-accent">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-body">
                      {service.description}
                    </p>
                    <ButtonLink
                      href={`/contact?service=${service.id}`}
                      variant="primary"
                      size="md"
                      className="mt-6"
                    >
                      Get a Free Quote
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                  </div>
                  <div>
                    <h4 className="mb-4 font-display font-semibold text-primary">
                      What You Get
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-sm text-slate-body"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section variant="muted" ariaLabelledby="guarantee-heading">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="guarantee-heading" className="font-display text-3xl font-bold text-primary">
            The Dorsey Guarantee
          </h2>
          <p className="mt-4 text-lg text-slate-body leading-relaxed">
            Every service we provide is backed by our unwavering commitment to craftsmanship. We use premium materials, employ expert tradespeople, and maintain a pristine job site. Your project isn&apos;t finished until you are 100% satisfied.
          </p>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
