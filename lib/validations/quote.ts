import { z } from "zod";
import { services } from "@/lib/site";

const serviceIds = services.map((s) => s.id) as [string, ...string[]];

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-().+]+$/, "Please enter a valid phone number"),
  service: z.enum(serviceIds, {
    message: "Please select a service",
  }),
  projectDetails: z
    .string()
    .min(10, "Please describe your project (at least 10 characters)")
    .max(2000, "Description is too long"),
  contactMethod: z.enum(["phone", "email", "either"], {
    message: "Please select a contact preference",
  }),
  // Honeypot — must stay empty (bots fill this in)
  website: z.string().max(0, "Invalid submission").optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const contactMethodOptions = [
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "either", label: "Either works" },
] as const;
