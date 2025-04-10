// components/home/NumberTicker.tsx
"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  HTMLMotionProps,
} from "framer-motion";

// Exclude standard motion props that we handle internally or conflict
type ExcludedMotionProps = "initial" | "animate" | "transition" | "children";

interface NumberTickerProps
  extends Omit<HTMLMotionProps<"span">, ExcludedMotionProps> {
  /** The final number to animate to */
  targetValue: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation starts in seconds */
  delay?: number;
}

export default function NumberTicker({
  targetValue,
  duration = 1.5, // Default duration matches the fill animation
  delay = 0,
  className,
  ...rest // Pass remaining motion props (like style, variants etc. if needed)
}: NumberTickerProps) {
  // Motion value starting at 0
  const count = useMotionValue(0);
  // Transform the motion value into an integer percentage string
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}%`);

  useEffect(() => {
    // Animate the count motion value
    const controls = animate(count, targetValue, {
      duration: duration,
      delay: delay,
      ease: "easeInOut", // Match the fill animation easing
    });

    // Cleanup function to stop the animation if the component unmounts
    return controls.stop;
  }, [count, targetValue, duration, delay]); // Rerun effect if these dependencies change

  return (
    // Render the animated value in a motion.span
    // Pass through className and any other motion props
    <motion.span className={className} {...rest}>
      {rounded}
    </motion.span>
  );
}
