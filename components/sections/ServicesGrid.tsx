"use client";

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
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { staggerItemVariants } from "@/components/ui/FadeIn";
import { services, type ServiceId } from "@/lib/site";

/** Map icon name strings from site config to Lucide components */
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

export function ServicesGrid() {
  return (
    <Section id="services" ariaLabelledby="services-heading">
      <SectionHeader
        id="services-heading"
        eyebrow="Our Services"
        title="Remodeling Services Built for Richmond Homes"
        description="From single-room updates to full-home transformations — every project gets the same owner-operated attention to detail."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Home;
          const quoteHref = `/#quote?service=${service.id}`;

          return (
            <motion.div key={service.id} variants={staggerItemVariants}>
              <Card hover className="group flex h-full flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-none bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-body">
                  {service.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
                  >
                    Learn more
                  </Link>
                  <Link
                    href={quoteHref}
                    className="flex items-center gap-1 text-sm font-medium text-slate-muted transition-colors hover:text-primary"
                  >
                    Get quote
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </StaggerContainer>

      <FadeIn delay={0.3}>
        <p className="mt-10 text-center text-sm text-slate-muted">
          Serving Richmond, Henrico, Chesterfield, and all of Central Virginia.
        </p>
      </FadeIn>
    </Section>
  );
}

/** Export for pre-selecting service in quote form */
export function getServiceFromParam(param: string | null): ServiceId | undefined {
  if (!param) return undefined;
  return services.find((s) => s.id === param)?.id;
}
