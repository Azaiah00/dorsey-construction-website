import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes without conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format phone for display (already formatted in site config) */
export function formatPhoneLink(phone: string): string {
  return phone.replace(/\D/g, "");
}
