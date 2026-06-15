import Image from "next/image";
import { Award, Shield, Clock, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/Button";
import { Process } from "@/components/sections/Process";
import { CTABanner } from "@/components/sections/CTABanner";
import { createMetadata } from "@/lib/seo";
import { siteConfig, whyChooseImage } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name} — owner-operated by ${siteConfig.owner}, serving Richmond and Central Virginia since ${siteConfig.foundedMonth} ${siteConfig.foundedYear}. BBB A+ Accredited.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
              About Us
            </p>
            <h1 className="max-w-3xl font-display text-display-lg font-bold text-white">
              Built on Craftsmanship. Driven by Integrity.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              {siteConfig.yearsInBusiness} years of owner-operated remodeling
              excellence in Richmond and Central Virginia.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section ariaLabelledby="story-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-none shadow-card-hover">
              <Image
                src={whyChooseImage}
                alt={`${siteConfig.owner}, owner of ${siteConfig.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <SectionHeader
              id="story-heading"
              eyebrow="Our Story"
              title={`Meet ${siteConfig.owner}`}
              description={`Founded in ${siteConfig.foundedMonth} ${siteConfig.foundedYear}, ${siteConfig.name} has spent nearly two decades transforming Richmond-area homes with the same hands-on approach Randy Dorsey Jr. started with on day one.`}
              align="left"
            />
            <div className="space-y-4 text-slate-body leading-relaxed">
              <p>
                Unlike large remodeling franchises, every Dorsey Construction
                project is personally overseen by Randy. From the initial
                consultation through the final walkthrough, you work directly
                with the owner — not a rotating sales team.
              </p>
              <p>
                That owner-operated model means transparent pricing, consistent
                quality, and accountability you can count on. It&apos;s why
                we&apos;ve earned BBB {siteConfig.bbb.rating} accreditation and
                the trust of homeowners across Henrico, Chesterfield, Glen Allen,
                Midlothian, and beyond.
              </p>
            </div>
            <ButtonLink href="/contact" variant="primary" size="md" className="mt-8">
              Work With Us
            </ButtonLink>
          </FadeIn>
        </div>
      </Section>

      {/* Values grid */}
      <Section variant="muted" ariaLabelledby="values-heading">
        <SectionHeader
          id="values-heading"
          eyebrow="Our Values"
          title="What Sets Us Apart"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Owner-Operated",
              text: "Randy Dorsey Jr. is on every job — not just the sales call.",
            },
            {
              icon: Clock,
              title: `${siteConfig.yearsInBusiness} Years Experience`,
              text: `Established ${siteConfig.foundedMonth} ${siteConfig.foundedYear} with hundreds of completed projects.`,
            },
            {
              icon: Award,
              title: `BBB ${siteConfig.bbb.rating} Rated`,
              text: `Accredited since ${siteConfig.bbb.accreditedSince}.`,
            },
            {
              icon: Shield,
              title: "Licensed & Insured",
              text: "Full coverage for your peace of mind on every project.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="rounded-none bg-white p-6 shadow-card text-center">
                <item.icon className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-body">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section ariaLabelledby="commitment-heading" variant="dark">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="commitment-heading" className="font-display text-3xl font-bold text-white">
            A Legacy of Excellence
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            For nearly two decades, Dorsey Construction has set the standard for high-end remodeling in Richmond. Our award-winning approach combines innovative design with timeless building techniques, ensuring every space we touch is both beautiful and enduring.
          </p>
        </div>
      </Section>

      <Process />
      <CTABanner />
    </>
  );
}
