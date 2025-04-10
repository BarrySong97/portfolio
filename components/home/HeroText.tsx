"use client";

import { cn } from "../../lib/utils";
import React, { useState, useEffect } from "react";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";

// Exclude standard onDrag to avoid conflict with framer-motion's onDrag
type BaseDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag">;

interface HeroTextProps extends BaseDivProps {
  onAnimationComplete?: () => void; // Add optional callback prop
}

export default function HeroText({
  className,
  onAnimationComplete,
  ...props
}: HeroTextProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Use useEffect to trigger removal after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // 1.5s delay before starting exit animation

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []); // Run only once on mount

  const mainVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 2, // Exit animation duration
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={onAnimationComplete}>
      {/* Trigger callback when exit finishes */}
      {isVisible && (
        <motion.div
          className={cn(
            "relative z-20 flex flex-col items-start pl-16 justify-center h-screen bg-black text-white text-8xl font-thin tracking-wider",
            className
          )}
          variants={mainVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          {...(props as HTMLMotionProps<"div">)}
        >
          <motion.span className="mb-8 font-semibold" variants={itemVariants}>
            Barry Song
          </motion.span>
          <motion.span className="mb-8 font-semibold" variants={itemVariants}>
            Full stack
          </motion.span>
          <motion.span variants={itemVariants} className="font-semibold">
            Developer
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
