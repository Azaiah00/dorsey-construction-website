import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "a";
  href?: string;
}

/** Elevated card with optional hover lift */
export function Card({
  children,
  className,
  hover = false,
  as: Tag = "div",
  href,
}: CardProps) {
  const baseStyles = cn(
    "rounded-none bg-white p-8 shadow-card border-none",
    hover &&
      "transition-all duration-500 ease-premium hover:-translate-y-2 hover:shadow-card-hover",
    className
  );

  if (Tag === "a" && href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return <Tag className={baseStyles}>{children}</Tag>;
}
