import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Projects",
  description:
    "Browse kitchen, bathroom, whole-home, flooring, and basement remodeling projects across Richmond and Central Virginia.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
              Portfolio
            </p>
            <h1 className="max-w-3xl font-display text-display-lg font-bold text-white">
              Projects We&apos;re Proud Of
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              Real transformations across Richmond, Henrico, Chesterfield, and
              beyond. {/* TODO: Replace placeholder photos with client project images */}
            </p>
          </FadeIn>
        </div>
      </section>
      <ProjectsGallery />
      <CTABanner />
    </>
  );
}
