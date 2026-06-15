import { MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { serviceAreas, siteConfig } from "@/lib/site";

export function ServiceArea() {
  return (
    <Section variant="muted" ariaLabelledby="area-heading" className="relative overflow-hidden">
      <SectionHeader
        id="area-heading"
        eyebrow="Service Area"
        title="Proudly Serving Richmond & Central Virginia"
        description="From the Fan District to the suburbs, we bring premium remodeling to homeowners across the region."
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 relative z-10">
        {/* Real Map Graphic */}
        <FadeIn direction="left" className="h-full">
          <div
            className="relative w-full aspect-square md:aspect-[4/3] lg:h-full min-h-[400px] overflow-hidden rounded-none bg-primary shadow-card border border-slate-border/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202404.14815467477!2d-77.62534571060938!3d37.524776366632485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111095799c9ed%3A0xbfd83e6de0423cb!2sRichmond%2C%20VA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map for Dorsey Construction in Richmond, VA"
              className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
            ></iframe>
            {/* Map Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-none bg-primary/95 px-6 py-4 backdrop-blur-md shadow-2xl border border-white/10 pointer-events-none transition-opacity duration-500">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-accent-light" />
                <div>
                  <p className="font-display text-lg font-bold text-white leading-tight">
                    Richmond, VA
                  </p>
                  <p className="text-xs text-white/60">
                    {siteConfig.location.serviceAreaLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Area list */}
        <FadeIn direction="right">
          <div>
            <h3 className="font-display text-xl font-bold text-primary">
              Communities We Serve
            </h3>
            <p className="mt-2 text-sm text-slate-muted">
              Don&apos;t see your area? Call us — we likely serve your neighborhood too.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 rounded-none bg-white px-4 py-3 text-sm font-medium text-primary shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-body">
              Kitchen remodeling Richmond · Bathroom remodel Central Virginia ·
              Whole-home renovation Henrico · Basement finishing Chesterfield
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
