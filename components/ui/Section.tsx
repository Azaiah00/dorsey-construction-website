import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** light = surface bg, dark = primary bg, muted = slightly darker surface */
  variant?: "light" | "dark" | "muted";
  ariaLabelledby?: string;
}

const variantStyles = {
  light: "bg-surface text-slate-body",
  dark: "bg-primary text-white",
  muted: "bg-surface-muted text-slate-body",
};

/** Standard page section with consistent vertical spacing */
export function Section({
  children,
  className,
  id,
  variant = "light",
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("overflow-x-clip py-24 md:py-32", variantStyles[variant], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  id?: string;
}

/** Reusable section heading block */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-widest",
            dark ? "text-accent-light" : "text-accent"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "font-display text-display-md font-bold",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-slate-body"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
