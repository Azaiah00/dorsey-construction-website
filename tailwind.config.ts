import type { Config } from "tailwindcss";

/**
 * Dorsey Construction custom theme — Bold & Premium palette.
 * Tailwind v4: referenced from globals.css via @config.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D3A45", // Slate Blue/Charcoal
          dark: "#212A32",
          light: "#3A4956",
        },
        surface: {
          DEFAULT: "#FFFFFF", // Pristine White
          muted: "#F8F9FA", // Soft cool gray
        },
        accent: {
          DEFAULT: "#C4A977", // Champagne Gold
          light: "#D8C29A",
          dark: "#A68D5D",
        },
        slate: {
          body: "#4A5568",
          muted: "#8492A6",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 4vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "clamp(4rem, 8vw, 7rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 10px 40px -10px rgba(45, 58, 69, 0.08)",
        "card-hover": "0 20px 50px -10px rgba(45, 58, 69, 0.15)",
        glow: "0 0 40px -10px rgba(196, 169, 119, 0.4)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
