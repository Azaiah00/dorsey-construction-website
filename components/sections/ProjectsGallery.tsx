"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [lightboxProject, setLightboxProject] = useState<(typeof projects)[0] | null>(null);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProject = projects.find((p) => p.beforeImage && p.afterImage);

  return (
    <Section id="projects" ariaLabelledby="projects-heading">
      <SectionHeader
        id="projects-heading"
        eyebrow="Our Work"
        title="Featured Projects Across Central Virginia"
        description="Real transformations for Richmond-area homeowners. Every photo represents the quality and care we bring to your project."
      />

      {/* Before/After showpiece */}
      {featuredProject?.beforeImage && featuredProject?.afterImage && (
        <FadeIn className="mb-12">
          <div className="mb-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Before &amp; After
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-primary">
              {featuredProject.title} — {featuredProject.location}
            </h3>
          </div>
          <BeforeAfterSlider
            beforeSrc={featuredProject.beforeImage}
            afterSrc={featuredProject.afterImage}
            beforeAlt={`Before: ${featuredProject.title}`}
            afterAlt={`After: ${featuredProject.title}`}
            className="mx-auto max-w-4xl shadow-card-hover"
          />
          <p className="mt-3 text-center text-xs text-slate-muted">
            {/* TODO: Replace with real before/after photos from client */}
            Drag the handle to compare · Placeholder images from Unsplash
          </p>
        </FadeIn>
      )}

      {/* Category filters */}
      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              activeCategory === cat.id
                ? "bg-primary text-white shadow-md"
                : "bg-white text-slate-body hover:bg-surface-muted border border-slate-border"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.05}>
            <button
              type="button"
              className="group relative w-full overflow-hidden rounded-none text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
              onClick={() => setLightboxProject(project)}
              aria-label={`View ${project.title} project details`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 shadow-glow">
            <ZoomIn className="h-6 w-6" aria-hidden="true" />
          </div>
              </div>
              <div className="bg-white p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {project.location}
                </p>
                <h3 className="mt-1 font-display font-bold text-primary">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate-muted line-clamp-2">
                  {project.description}
                </p>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${lightboxProject.title} project photo`}
            onClick={() => setLightboxProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-none bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-white transition-colors hover:bg-primary"
                onClick={() => setLightboxProject(null)}
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-[16/10]">
                <Image
                  src={lightboxProject.image}
                  alt={lightboxProject.imageAlt}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-accent">
                  {lightboxProject.location}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-primary">
                  {lightboxProject.title}
                </h3>
                <p className="mt-2 text-slate-body">
                  {lightboxProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
