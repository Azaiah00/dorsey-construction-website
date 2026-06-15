import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "phone";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white tracking-widest uppercase font-semibold hover:bg-primary shadow-glow hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-primary text-white tracking-widest uppercase font-semibold hover:bg-primary-light hover:-translate-y-0.5",
  outline:
    "border border-accent text-accent tracking-widest uppercase font-semibold hover:bg-accent hover:text-white",
  ghost:
    "text-white font-medium hover:text-accent tracking-widest uppercase underline-offset-8 hover:underline",
  phone:
    "bg-transparent text-white tracking-widest uppercase font-medium border border-white/30 hover:border-accent hover:text-accent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-6 py-2.5 text-xs rounded-none",
  md: "px-8 py-3.5 text-sm rounded-none",
  lg: "px-10 py-4 text-sm rounded-none",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-all duration-300 ease-premium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

/** Anchor styled as Button for navigation CTAs */
interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-300 ease-premium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
