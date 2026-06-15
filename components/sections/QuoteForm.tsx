"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Loader2, Phone } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import {
  quoteFormSchema,
  contactMethodOptions,
  type QuoteFormData,
} from "@/lib/validations/quote";
import { services, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      contactMethod: "either",
      service: undefined,
    },
  });

  // Pre-select service from URL param (e.g. /#quote?service=kitchen-remodeling)
  useEffect(() => {
    if (preselectedService) {
      const match = services.find((s) => s.id === preselectedService);
      if (match) {
        setValue("service", match.id);
      }
    }
  }, [preselectedService, setValue]);

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please call us directly.");
      }

      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Submission failed. Please try again or call us."
      );
    }
  };

  if (submitted) {
    return (
      <Section id="quote" ariaLabelledby="quote-heading">
        <FadeIn>
          <div className="mx-auto max-w-xl rounded-none bg-white p-10 text-center shadow-card">
            <CheckCircle2 className="mx-auto h-16 w-16 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-bold text-primary">
              Thank You — We&apos;ll Be in Touch!
            </h2>
            <p className="mt-3 text-slate-body">
              Your quote request has been received. {siteConfig.owner} or a team
              member will reach out within 24 hours.
            </p>
            <p className="mt-4 text-sm text-slate-muted">
              Need a faster response?{" "}
              <a
                href={siteConfig.phoneTel}
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Call {siteConfig.phone}
              </a>
            </p>
            <Button
              variant="secondary"
              size="md"
              className="mt-6"
              onClick={() => setSubmitted(false)}
            >
              Submit Another Request
            </Button>
          </div>
        </FadeIn>
      </Section>
    );
  }

  return (
    <Section id="quote" ariaLabelledby="quote-heading">
      <SectionHeader
        id="quote-heading"
        eyebrow="Free Estimate"
        title="Get Your Free, No-Obligation Quote"
        description="Tell us about your project and we'll respond within 24 hours with a detailed estimate."
      />

      <FadeIn>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 rounded-none bg-white p-6 shadow-card md:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className={cn(
                    "w-full rounded-none border px-4 py-3 text-primary transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
                    errors.name ? "border-red-400" : "border-slate-border"
                  )}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-primary">
                  Phone <span className="text-accent">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  {...register("phone")}
                  className={cn(
                    "w-full rounded-none border px-4 py-3 text-primary transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
                    errors.phone ? "border-red-400" : "border-slate-border"
                  )}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className={cn(
                    "w-full rounded-none border px-4 py-3 text-primary transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
                    errors.email ? "border-red-400" : "border-slate-border"
                  )}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Service dropdown */}
              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-primary">
                  Service Needed <span className="text-accent">*</span>
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className={cn(
                    "w-full rounded-none border px-4 py-3 text-primary transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
                    errors.service ? "border-red-400" : "border-slate-border"
                  )}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Project details */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="projectDetails"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  Project Details <span className="text-accent">*</span>
                </label>
                <textarea
                  id="projectDetails"
                  rows={4}
                  {...register("projectDetails")}
                  placeholder="Tell us about your project — scope, timeline, location..."
                  className={cn(
                    "w-full resize-y rounded-none border px-4 py-3 text-primary transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
                    errors.projectDetails ? "border-red-400" : "border-slate-border"
                  )}
                  aria-invalid={!!errors.projectDetails}
                  aria-describedby={
                    errors.projectDetails ? "details-error" : undefined
                  }
                />
                {errors.projectDetails && (
                  <p id="details-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.projectDetails.message}
                  </p>
                )}
              </div>

              {/* Contact method */}
              <fieldset className="sm:col-span-2">
                <legend className="mb-2 text-sm font-medium text-primary">
                  Preferred Contact Method
                </legend>
                <div className="flex flex-wrap gap-4">
                  {contactMethodOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex cursor-pointer items-center gap-2 text-sm text-slate-body"
                    >
                      <input
                        type="radio"
                        value={opt.value}
                        {...register("contactMethod")}
                        className="h-4 w-4 accent-accent"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Honeypot — hidden from users, bots fill it in */}
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            {submitError && (
              <p className="mt-4 rounded-none bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {submitError}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" aria-hidden="true" />
                  Request My Free Quote
                </>
              )}
            </Button>

            <p className="mt-4 text-xs text-slate-muted">
              Free, no-obligation estimate · We reply within 24 hours · Your
              information is never shared.
            </p>
          </form>

          {/* Sidebar reassurance */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-none bg-primary p-6 text-white">
              <h3 className="font-display text-lg font-bold">
                Why Request a Quote?
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>✓ Detailed written estimate with clear scope</li>
                <li>✓ No pressure — take your time to decide</li>
                <li>✓ Direct access to {siteConfig.owner}</li>
                <li>✓ BBB {siteConfig.bbb.rating} Accredited since {siteConfig.bbb.accreditedSince}</li>
              </ul>
            </div>

            <div className="rounded-none border border-slate-border bg-white p-6">
              <h3 className="font-display font-bold text-primary">
                Prefer to Talk?
              </h3>
              <p className="mt-2 text-sm text-slate-body">
                Call us directly for immediate assistance.
              </p>
              <a
                href={siteConfig.phoneTel}
                className="mt-4 flex items-center gap-2 font-display text-xl font-bold text-accent transition-colors hover:text-accent-dark"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
