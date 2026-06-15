import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { createMetadata } from "@/lib/seo";
import { siteConfig, serviceAreas } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact & Free Quote",
  description: `Request a free remodeling estimate from ${siteConfig.name}. Call ${siteConfig.phone} or fill out our quote form. Serving Richmond and Central Virginia.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
              Contact Us
            </p>
            <h1 className="max-w-3xl font-display text-display-lg font-bold text-white">
              Let&apos;s Talk About Your Project
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              Free, no-obligation estimates. We reply within 24 hours.
            </p>
          </FadeIn>

          {/* Quick contact cards */}
          <FadeIn delay={0.15}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: siteConfig.phone,
                  href: siteConfig.phoneTel,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: siteConfig.location.display,
                  href: undefined,
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: siteConfig.hours.display,
                  href: undefined,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-none border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <item.icon className="h-5 w-5 text-accent-light" aria-hidden="true" />
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/50">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block font-semibold text-white transition-colors hover:text-accent-light"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold text-white">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Suspense fallback={<div className="py-section" aria-hidden="true" />}>
        <QuoteForm />
      </Suspense>

      {/* Service area reminder */}
      <section className="bg-surface-muted py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-muted">
            Serving {serviceAreas.slice(0, 6).join(", ")}, and all of Central Virginia.
          </p>
        </div>
      </section>
    </>
  );
}
