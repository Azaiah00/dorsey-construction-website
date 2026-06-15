"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  display?: string;
  duration?: number;
}

/** Animated number counter triggered on scroll into view */
export function AnimatedCounter({
  value,
  suffix = "",
  display,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reducedMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const displayValue = useTransform(spring, (v) => Math.floor(v));

  useEffect(() => {
    if (inView && !hasAnimated && !display) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, spring, value, display]);

  if (display || reducedMotion) {
    return (
      <span ref={ref} className="tabular-nums">
        {display ?? `${value}${suffix}`}
      </span>
    );
  }

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
