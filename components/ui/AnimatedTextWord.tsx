import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextWordProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  staggerChildren?: number;
  delayChildren?: number;
}

const AnimatedTextWord: React.FC<AnimatedTextWordProps> = ({
  text,
  className,
  staggerChildren = 0.02,
  delayChildren = 0,
  ...props
}) => {
  const letters = Array.from(text);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
    },
  };

  return (
    <motion.h2
      className={cn("font-semibold", className)} // Apply base styles and allow overrides
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Trigger animation once when in view
    >
      {letters.map((letter, index) => (
        // Outer span for spacing (handling spaces)
        <span key={index} className="inline-block">
          {letter === " " ? (
            "\u00A0" // Render non-breaking space for spaces
          ) : (
            // Inner span for overflow hidden
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block" // Important for transform origin
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            </span>
          )}
        </span>
      ))}
    </motion.h2>
  );
};

export default AnimatedTextWord;
