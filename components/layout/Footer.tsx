import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig, footerLinks, serviceAreas } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark pt-16 pb-8 text-white/70">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="md" />
            <p className="mt-4 text-sm leading-relaxed">
              Premium kitchen, bathroom, and whole-home remodeling for Richmond
              and Central Virginia. Owner-operated since {siteConfig.foundedMonth}{" "}
              {siteConfig.foundedYear}.
            </p>
            <p className="mt-4 text-sm font-medium text-accent-light">
              BBB Accredited · {siteConfig.bbb.rating} Rating
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.phoneTel}
                  className="flex items-start gap-2 text-sm transition-colors hover:text-accent-light"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 text-sm transition-colors hover:text-accent-light"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {siteConfig.location.display}
                  <br />
                  Serving {siteConfig.location.serviceAreaLabel}
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {siteConfig.hours.display}
                  {/* TODO: Update hours when provided by client */}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service areas */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
            Service Areas
          </p>
          <p className="text-sm">
            {serviceAreas.join(" · ")}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved. Licensed &amp;
            Insured.
          </p>
          <div className="flex gap-6">
            {/* TODO: Add privacy policy page when ready */}
            <Link href="/contact" className="hover:text-accent-light">
              Privacy
            </Link>
            {/* TODO: Add social links when provided */}
            {siteConfig.social.facebook && (
              <a href={siteConfig.social.facebook} className="hover:text-accent-light">
                Facebook
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
