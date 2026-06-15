# Dorsey Construction LLC — Website

Premium, lead-converting website for **Dorsey Construction LLC**, a Richmond, VA remodeling firm. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                    # Next.js App Router pages & API routes
  page.tsx              # Home (single-page experience)
  services/             # Services detail page
  projects/             # Portfolio page
  about/                # About page
  contact/              # Contact + quote form
  api/quote/route.ts    # Quote form submission handler
  sitemap.ts            # Auto-generated sitemap
  robots.ts             # Search engine directives
components/
  ui/                   # Primitives (Button, Card, Section, etc.)
  layout/               # Header, Footer, MobileCTA
  sections/             # Page sections (Hero, Services, Quote, etc.)
lib/
  site.ts               # ★ ALL BUSINESS DATA — edit this file
  seo.ts                # Metadata & JSON-LD helpers
  validations/quote.ts  # Zod form schema
public/images/          # Local image assets (replace Unsplash placeholders)
content/                # Points to lib/site.ts for data location
tailwind.config.ts      # Custom theme (colors, fonts, spacing)
```

## Editing Business Content

**Everything lives in `lib/site.ts`.** Update this single file to change:

| Field | Location in `lib/site.ts` |
|-------|---------------------------|
| Phone, email, address | `siteConfig` object |
| Services list & copy | `services` array |
| Portfolio projects | `projects` array |
| Testimonials | `testimonials` array |
| Service areas | `serviceAreas` array |
| Stats & trust badges | `stats`, `trustBadges` |
| Hero/section images | `heroImage`, `whyChooseImage` |

### TODO Items for Client

Search the codebase for `TODO` comments. Key items:

- [ ] Replace `hello@dorseyconstructionllc.biz` with real email
- [ ] Add physical street address and business hours
- [ ] Swap Unsplash placeholder images with real project photos in `public/images/`
- [ ] Replace placeholder testimonials with verified reviews
- [ ] Confirm BBB profile URL and project count stat
- [ ] Add real logo file (replace wordmark in `components/ui/Logo.tsx`)
- [ ] Configure email delivery (see below)
- [ ] Update `siteConfig.url` to production domain after deploy

## Swapping Images

1. Add photos to `public/images/` (e.g., `public/images/kitchen-remodel.jpg`)
2. Update paths in `lib/site.ts`:

```ts
// Local image
image: "/images/kitchen-remodel.jpg",

// Or keep using Unsplash URLs (documented with TODO comments)
```

Hero and project images use `next/image` with automatic optimization.

## Quote Form & Email Setup

The quote form POSTs to `/api/quote`. Two integration options:

### Option A: Resend (recommended)

```bash
npm install resend
```

Create `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Uncomment the Resend block in `app/api/quote/route.ts`.

### Option B: Formspree (no backend)

In `components/sections/QuoteForm.tsx`, change the fetch URL to your Formspree endpoint:

```
https://formspree.io/f/YOUR_FORM_ID
```

## Deploy to Vercel

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables (`RESEND_API_KEY` if using Resend)
4. Deploy — zero config needed for Next.js

Update `siteConfig.url` in `lib/site.ts` to your Vercel domain (or custom domain).

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** with custom theme
- **Framer Motion** for scroll animations
- **React Hook Form + Zod** for form validation
- **lucide-react** for icons
- **next/font** for Plus Jakarta Sans + Inter

## Accessibility & SEO

- WCAG 2.1 AA: skip link, focus states, ARIA labels, semantic HTML
- `prefers-reduced-motion` respected
- JSON-LD LocalBusiness structured data
- Per-page metadata with Open Graph & Twitter cards
- Auto-generated sitemap and robots.txt

## License

Private — © Dorsey Construction LLC
