"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  const review = testimonials[current];

  return (
    <Section id="reviews" ariaLabelledby="reviews-heading">
      <SectionHeader
        id="reviews-heading"
        eyebrow="Client Reviews"
        title="What Richmond Homeowners Say"
        description="Real feedback from Central Virginia clients. Replace placeholder reviews with verified testimonials."
      />

      {/* Placeholder notice */}
      <FadeIn>
        <div
          className="mb-8 rounded-none border border-amber-300/50 bg-amber-50 px-4 py-3 text-center text-sm text-amber-800"
          role="note"
        >
          {/* TODO PLACEHOLDER — Client must replace sample reviews with verified testimonials */}
          Sample reviews shown below — replace with real customer feedback before launch.
        </div>
      </FadeIn>

      <FadeIn>
        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-none bg-white p-8 shadow-card md:p-12"
            >
              {/* Star rating */}
              <div className="mb-4 flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-lg leading-relaxed text-slate-body italic">
                &ldquo;{review.text}&rdquo;
              </p>

              <footer className="mt-6 flex items-center justify-between">
                <div>
                  <cite className="not-italic font-display font-bold text-primary">
                    {review.name}
                  </cite>
                  <p className="text-sm text-slate-muted">
                    {review.location} · {review.service}
                  </p>
                </div>
                {review.isPlaceholder && (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    Placeholder
                  </span>
                )}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-border bg-white transition-colors hover:border-accent hover:text-accent"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Review pagination">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === current ? "w-8 bg-accent" : "w-2 bg-slate-border"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-border bg-white transition-colors hover:border-accent hover:text-accent"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </FadeIn>

      {/* BBB link */}
      <FadeIn delay={0.2}>
        <p className="mt-8 text-center">
          <a
            href={siteConfig.bbb.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
          >
            Read reviews on BBB
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </p>
      </FadeIn>
    </Section>
  );
}
