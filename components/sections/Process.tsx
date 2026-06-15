import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <Section variant="dark" ariaLabelledby="process-heading">
      <SectionHeader
        id="process-heading"
        eyebrow="Our Process"
        title="From First Call to Final Walkthrough"
        description="A clear, proven process that keeps your Richmond remodel on track and stress-free."
        dark
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <FadeIn key={step.step} delay={i * 0.12}>
            <div className="relative">
              {/* Connector line (desktop) */}
              {i < processSteps.length - 1 && (
                <div
                  className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-accent/30 lg:block"
                  aria-hidden="true"
                />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-primary font-display text-2xl font-bold text-accent-light">
                  {step.step}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
