import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { whyChoose, whyChooseImage, siteConfig } from "@/lib/site";

export function WhyChoose() {
  return (
    <Section id="about" variant="muted" ariaLabelledby="why-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <FadeIn direction="left">
          <div className="relative aspect-[4/5] overflow-hidden rounded-none shadow-card-hover">
            <Image
              src={whyChooseImage}
              alt="Professional construction craftsman at work on a Richmond home remodel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay stat badge */}
            <div className="absolute bottom-6 left-6 rounded-none bg-primary/90 px-6 py-4 backdrop-blur-sm">
              <p className="font-display text-3xl font-bold text-accent-light">
                {siteConfig.yearsInBusiness}+
              </p>
              <p className="text-sm text-white/70">Years of Excellence</p>
            </div>
          </div>
        </FadeIn>

        {/* Content side */}
        <div>
          <SectionHeader
            id="why-heading"
            eyebrow="Why Choose Dorsey"
            title="Owner-Operated. Locally Trusted. Built to Last."
            description={`When you hire ${siteConfig.shortName}, you work directly with ${siteConfig.owner} — not a rotating cast of subcontractors and sales reps.`}
            align="left"
          />

          <ul className="space-y-5">
            {whyChoose.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} direction="right">
                <li className="flex gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-body">
                      {item.description}
                    </p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
