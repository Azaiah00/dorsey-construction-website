/**
 * Central business configuration for Dorsey Construction LLC.
 * Edit this file to update copy, services, contact info, and more —
 * no need to touch individual components.
 */

export const siteConfig = {
  name: "Dorsey Construction LLC",
  shortName: "Dorsey Construction",
  tagline: "Richmond's Trusted Remodeling Experts",
  description:
    "Premium kitchen, bathroom, and whole-home remodeling in Richmond, VA and Central Virginia. Owner-operated by Randy L. Dorsey Jr. with 17 years of craftsmanship. BBB A+ Accredited.",
  url: "https://dorseyconstruction-mocksite.netlify.app",
  locale: "en_US",
  foundedYear: 2009,
  foundedMonth: "March",
  yearsInBusiness: 17,
  owner: "Randy L. Dorsey Jr.",
  entity: "Limited Liability Company (LLC)",
  phone: "(804) 617-6303",
  phoneTel: "tel:8046176303",
  // TODO: Replace with real email from client
  email: "hello@dorseyconstructionllc.biz",
  location: {
    city: "Richmond",
    state: "Virginia",
    stateAbbr: "VA",
    zip: "23222",
    // TODO: Request physical street address from client
    display: "Richmond, VA 23222",
    serviceAreaLabel: "Greater Central Virginia",
  },
  bbb: {
    rating: "A+",
    accreditedSince: "September 2025",
    url: "https://www.bbb.org/us/va/richmond/profile/remodeling/dorsey-construction-llc-0603-90345678", // TODO: Confirm exact BBB profile URL
  },
  social: {
    // TODO: Add real social profile URLs from client
    facebook: "",
    instagram: "",
    houzz: "",
  },
  hours: {
    // TODO: Request business hours from client
    display: "Mon–Fri: By Appointment",
    note: "Evening and weekend consultations available upon request.",
  },
  trustBadges: [
    "BBB A+ Accredited",
    "17 Years in Business",
    "Licensed & Insured",
    "100% Satisfaction Focus",
  ],
} as const;

export type ServiceId =
  | "kitchen-remodeling"
  | "bathroom-remodeling"
  | "home-remodeling"
  | "basement-remodeling"
  | "flooring-installation"
  | "interior-design"
  | "commercial-renovations"
  | "new-construction";

export interface Service {
  id: ServiceId;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    shortDescription:
      "Layouts, cabinetry, and fixtures that make your kitchen the heart of the home again.",
    description:
      "From cramped galley kitchens to dated layouts, we redesign and reconstruct Richmond kitchens with smarter flow, premium cabinetry, durable countertops, and lighting that transforms how you cook and gather.",
    benefits: [
      "Custom layout optimization for your space",
      "Quality cabinetry and fixture installation",
      "Coordinated finishes from counters to backsplash",
    ],
    icon: "ChefHat",
  },
  {
    id: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortDescription:
      "Spa-inspired baths with modern fixtures, tile work, and watertight craftsmanship.",
    description:
      "Whether you're updating a powder room or creating a primary suite retreat, we deliver full bathroom transformations with modern fixtures, expert tile work, and waterproofing done right the first time.",
    benefits: [
      "Walk-in showers, tubs, and vanity upgrades",
      "Precision tile and waterproofing",
      "Accessible and luxury design options",
    ],
    icon: "Bath",
  },
  {
    id: "home-remodeling",
    title: "Home Remodeling & Renovation",
    shortDescription:
      "Complete interior renovations blending structural integrity with refined aesthetics.",
    description:
      "Whole-home and room-by-room renovations for Central Virginia homeowners who want one trusted team handling structural updates, finish carpentry, and the details that tie everything together.",
    benefits: [
      "Structural and cosmetic updates under one roof",
      "Phased plans that respect your timeline",
      "Seamless coordination across trades",
    ],
    icon: "Home",
  },
  {
    id: "basement-remodeling",
    title: "Basement Remodeling",
    shortDescription:
      "Turn unused lower levels into livable family rooms, offices, or guest suites.",
    description:
      "Richmond basements have untapped potential. We finish and remodel lower levels with proper moisture management, egress compliance, and layouts built for how your family actually lives.",
    benefits: [
      "Finished living, entertainment, and work spaces",
      "Moisture-aware construction practices",
      "Custom bars, theaters, and in-law suites",
    ],
    icon: "Layers",
  },
  {
    id: "flooring-installation",
    title: "Flooring Installation",
    shortDescription:
      "Hardwood, carpet, LVP, and tile — installed level, seamless, and built to last.",
    description:
      "New floors change everything. We install hardwood, carpet, luxury vinyl, tile, and more with subfloor prep, precise transitions, and finishes that stand up to Richmond's active households.",
    benefits: [
      "Hardwood, carpet, LVP, and tile expertise",
      "Subfloor prep and leveling included",
      "Clean, dust-conscious installation",
    ],
    icon: "Grid3x3",
  },
  {
    id: "interior-design",
    title: "Interior Design & Planning",
    shortDescription:
      "Thoughtful design planning so your remodel looks cohesive before a single nail is driven.",
    description:
      "Great remodels start with a clear vision. We help you plan layouts, material selections, and color palettes so your investment delivers a cohesive, elevated result — not a collection of mismatched upgrades.",
    benefits: [
      "Layout and material selection guidance",
      "3D-ready planning conversations",
      "Budget-aligned design recommendations",
    ],
    icon: "Palette",
  },
  {
    id: "commercial-renovations",
    title: "Commercial Renovations",
    shortDescription:
      "Office, retail, and commercial spaces refreshed on schedule with minimal downtime.",
    description:
      "Central Virginia businesses trust Dorsey Construction for tenant improvements, office refreshes, and commercial build-outs that prioritize safety, code compliance, and getting you back to work fast.",
    benefits: [
      "Tenant improvements and fit-outs",
      "After-hours scheduling available",
      "Code-compliant commercial work",
    ],
    icon: "Building2",
  },
  {
    id: "new-construction",
    title: "New Construction",
    shortDescription:
      "Ground-up builds and additions executed with the same precision as our remodels.",
    description:
      "From additions to new residential construction, Randy Dorsey Jr. brings 17 years of hands-on building experience to projects that demand structural excellence and finish-quality craftsmanship.",
    benefits: [
      "Additions and custom residential builds",
      "Owner-operated project oversight",
      "Quality materials and proven methods",
    ],
    icon: "Hammer",
  },
];

export type ProjectCategory =
  | "kitchens"
  | "baths"
  | "whole-home"
  | "flooring"
  | "basements";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  description: string;
  // TODO: Replace Unsplash URLs with real project photos from client
  image: string;
  imageAlt: string;
  beforeImage?: string;
  afterImage?: string;
}

export const projects: Project[] = [
  {
    id: "kitchen-glen-allen",
    title: "Modern Farmhouse Kitchen",
    category: "kitchens",
    location: "Glen Allen, VA",
    description:
      "Open-concept kitchen with custom cabinetry, quartz counters, and pendant lighting.",
    image: "/images/hero-kitchen.png",
    imageAlt: "Modern farmhouse kitchen remodel with white cabinetry and island",
    beforeImage: "/images/kitchen-before.png",
    afterImage: "/images/hero-kitchen.png",
  },
  {
    id: "bath-midlothian",
    title: "Primary Suite Bath",
    category: "baths",
    location: "Midlothian, VA",
    description:
      "Walk-in shower, floating vanity, and heated tile floors in a spa-style primary bath.",
    image: "/images/bathroom-remodel.png",
    imageAlt: "Luxury bathroom remodel with walk-in shower and modern fixtures",
  },
  {
    id: "whole-home-henrico",
    title: "Whole-Home Refresh",
    category: "whole-home",
    location: "Henrico, VA",
    description:
      "Full interior renovation including kitchen, baths, and living spaces.",
    image: "/images/new-construction.png",
    imageAlt: "Whole home interior renovation with open living space",
  },
  {
    id: "flooring-chesterfield",
    title: "Hardwood Throughout",
    category: "flooring",
    location: "Chesterfield, VA",
    description:
      "Wide-plank hardwood installed throughout main living areas with seamless transitions.",
    image: "/images/hardwood-floors.png",
    imageAlt: "Hardwood flooring installation in a bright living room",
  },
  {
    id: "basement-richmond",
    title: "Finished Basement Lounge",
    category: "basements",
    location: "Richmond, VA",
    description:
      "Lower level converted to family room with wet bar and built-in entertainment.",
    image: "/images/basement-lounge.png",
    imageAlt: "Finished basement family room with modern furnishings",
  },
  {
    id: "kitchen-richmond",
    title: "Urban Kitchen Upgrade",
    category: "kitchens",
    location: "Richmond, VA",
    description:
      "Compact city kitchen maximized with custom storage and premium appliances.",
    image: "/images/urban-kitchen.png",
    imageAlt: "Compact urban kitchen remodel with modern appliances",
  },
];

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "kitchens", label: "Kitchens" },
  { id: "baths", label: "Baths" },
  { id: "whole-home", label: "Whole Home" },
  { id: "flooring", label: "Flooring" },
  { id: "basements", label: "Basements" },
];

export const stats = [
  { value: 17, suffix: "+", label: "Years in Business" },
  { value: 0, display: "A+", label: "BBB Rating" },
  { value: 500, suffix: "+", label: "Projects Completed" }, // TODO: Confirm actual project count with client
  { value: 100, suffix: "%", label: "Satisfaction Focus" },
];

export const whyChoose = [
  {
    title: "Owner-Operated Excellence",
    description:
      "Randy L. Dorsey Jr. personally oversees every project — not a sales rep who disappears after signing.",
  },
  {
    title: "17 Years of Craftsmanship",
    description:
      "Established in March 2009, we've refined our process through hundreds of Richmond-area remodels.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Detailed written estimates with clear scope — no surprise change orders or hidden fees.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Realistic schedules, proactive communication, and respect for your home throughout the build.",
  },
  {
    title: "BBB A+ Accredited",
    description:
      "Accredited since September 2025 with an A+ rating — your trust is earned, not assumed.",
  },
  {
    title: "Local Central Virginia Expertise",
    description:
      "We know Richmond homes — from Fan District row houses to suburban builds in Henrico and Chesterfield.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We visit your home, listen to your goals, and assess the space — free and no-pressure.",
  },
  {
    step: 2,
    title: "Design & Quote",
    description:
      "You receive a detailed scope, timeline, and transparent estimate tailored to your budget.",
  },
  {
    step: 3,
    title: "Build",
    description:
      "Our crew executes with daily communication, clean job sites, and quality checkpoints.",
  },
  {
    step: 4,
    title: "Final Walkthrough",
    description:
      "We walk every detail with you and don't consider the job done until you're thrilled.",
  },
];

/**
 * TODO PLACEHOLDER — Replace with verified customer reviews from client.
 * These are sample reviews clearly marked for replacement. Do NOT present as real.
 */
export const testimonials = [
  {
    id: "placeholder-1",
    name: "[Client Name — TODO Replace]",
    location: "Henrico, VA",
    service: "Kitchen Remodeling",
    rating: 5,
    text: "[PLACEHOLDER REVIEW — Replace with verified customer testimonial. Example topic: kitchen remodel quality and communication.]",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    name: "[Client Name — TODO Replace]",
    location: "Midlothian, VA",
    service: "Bathroom Remodeling",
    rating: 5,
    text: "[PLACEHOLDER REVIEW — Replace with verified customer testimonial. Example topic: bathroom transformation and timeline.]",
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    name: "[Client Name — TODO Replace]",
    location: "Glen Allen, VA",
    service: "Home Renovation",
    rating: 5,
    text: "[PLACEHOLDER REVIEW — Replace with verified customer testimonial. Example topic: whole-home renovation experience.]",
    isPlaceholder: true,
  },
];

export const serviceAreas = [
  "Richmond",
  "Henrico County",
  "Chesterfield County",
  "Glen Allen",
  "Midlothian",
  "Short Pump",
  "Mechanicsville",
  "Colonial Heights",
  "Petersburg",
  "Ashland",
  // TODO: Confirm full service area list with client
];

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#quote" },
];

export const footerLinks = {
  services: services.map((s) => ({ label: s.title, href: `/services#${s.id}` })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Get a Quote", href: "/contact" },
    { label: "Reviews", href: "/#reviews" },
  ],
};

/** Hero background — TODO: Replace with client's best project photo */
export const heroImage = "/images/hero-kitchen.png";

/** Why Choose section image — TODO: Replace with owner/team photo */
export const whyChooseImage = "/images/bathroom-remodel.png";
