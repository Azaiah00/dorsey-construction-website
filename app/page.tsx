import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChoose />
      <ProjectsGallery />
      <Process />
      <Testimonials />
      <ServiceArea />
      <Suspense fallback={<div className="py-section" aria-hidden="true" />}>
        <QuoteForm />
      </Suspense>
      <CTABanner />
    </>
  );
}
