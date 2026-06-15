import type { Metadata } from "next";
import { siteConfig } from "./site";

interface PageSEO {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

/** Build consistent metadata for each page */
export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageSEO = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.shortName} | Kitchen & Bathroom Remodeling Richmond, VA`;
  const pageDescription =
    description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    icons: {
      icon: [
        { url: "/images/logo-icon.png", type: "image/png" },
      ],
      apple: [
        { url: "/images/logo-icon.png", type: "image/png" },
      ],
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: "/images/og-share.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Premium Remodeling in Richmond, VA`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/images/og-share.png"],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/** LocalBusiness / GeneralContractor JSON-LD structured data */
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: `${siteConfig.foundedYear}-03-01`,
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.stateAbbr,
      postalCode: siteConfig.location.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.5407,
        longitude: -77.436,
      },
      geoRadius: "50000",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "1",
    },
    sameAs: [
      siteConfig.bbb.url,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ].filter(Boolean),
  };
}
