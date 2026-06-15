import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

/**
 * Dorsey Construction Logo
 */
export function Logo({ className, variant = "light", size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-10 w-auto",
    md: "h-14 w-auto",
    lg: "h-20 w-auto",
  };

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3 relative transition-transform duration-300 hover:scale-[1.02]", className)}
      aria-label="Dorsey Construction — Home"
    >
      <div className={cn("relative", sizes[size])}>
        <Image 
          src={variant === "light" ? "/images/logo-header.png" : "/images/logo-full.png"} 
          alt="Dorsey Construction Logo"
          width={300}
          height={80}
          className={cn(
            "object-contain w-auto h-full"
          )}
          priority
        />
      </div>
    </Link>
  );
}
