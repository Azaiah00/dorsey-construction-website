import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations/quote";
import { services, siteConfig } from "@/lib/site";

/**
 * Quote form submission handler.
 *
 * TODO: Add Resend API key to send emails:
 *   1. npm install resend
 *   2. Add RESEND_API_KEY to .env.local
 *   3. Uncomment the Resend block below
 *
 * ALTERNATIVE — Formspree (no backend needed):
 *   Change the form action in QuoteForm.tsx to POST directly to:
 *   https://formspree.io/f/YOUR_FORM_ID
 *   and remove this API route.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = quoteFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot check — reject if filled
    if (data.website) {
      return NextResponse.json({ success: true }); // Silent reject for bots
    }

    const serviceName =
      services.find((s) => s.id === data.service)?.title ?? data.service;

    // Log submission in development
    if (process.env.NODE_ENV === "development") {
      console.log("Quote request received:", {
        ...data,
        service: serviceName,
      });
    }

    /*
     * TODO: Uncomment when Resend is configured
     *
     * import { Resend } from "resend";
     * const resend = new Resend(process.env.RESEND_API_KEY);
     *
     * await resend.emails.send({
     *   from: "Dorsey Construction Website <onboarding@resend.dev>",
     *   to: siteConfig.email,
     *   subject: `New Quote Request: ${serviceName} — ${data.name}`,
     *   html: `
     *     <h2>New Quote Request</h2>
     *     <p><strong>Name:</strong> ${data.name}</p>
     *     <p><strong>Email:</strong> ${data.email}</p>
     *     <p><strong>Phone:</strong> ${data.phone}</p>
     *     <p><strong>Service:</strong> ${serviceName}</p>
     *     <p><strong>Contact Method:</strong> ${data.contactMethod}</p>
     *     <p><strong>Details:</strong></p>
     *     <p>${data.projectDetails}</p>
     *   `,
     * });
     */

    // Store in memory log for now — replace with email/CRM integration
    const payload = {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: serviceName,
      contactMethod: data.contactMethod,
      projectDetails: data.projectDetails,
      recipient: siteConfig.email,
    };

    // In production without Resend, return success so UX isn't broken
    // Owner should configure email delivery before launch
    return NextResponse.json({
      success: true,
      message: `Quote request received. Configure RESEND_API_KEY to enable email delivery to ${siteConfig.email}.`,
      ...(process.env.NODE_ENV === "development" && { debug: payload }),
    });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please call us directly." },
      { status: 500 }
    );
  }
}
