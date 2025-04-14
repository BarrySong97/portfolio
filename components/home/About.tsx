"use client";
import React, { FC, HTMLAttributes } from "react";
import Image from "next/image"; // Assuming Next.js for Image component
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils"; // Assuming cn utility exists
import AnimatedTextWord from "../ui/AnimatedTextWord";
import Link from "next/link";
import { motion } from "framer-motion";
// Define the structure for experience data
interface Experience {
  name: string;
  logo?: string; // Optional logo path
  role: string;
  duration: string;
  link?: string; // Optional link
}

const experienceData: Experience[] = [
  {
    name: "Mazo AI",
    // logo: undefined, // No logo provided
    role: "Full Stack Engineer · remote",
    duration: "2024 - now",
    link: "/", // Link is just "/" as per image
  },
  {
    name: "Signerlabs",
    logo: "/experience/favicon (4).ico", // Replace with actual path if different
    role: "Full Stack Engineer · remote",
    duration: "2023 - 2024",
    link: "https://signerlabs.ltd",
  },

  {
    name: "成都索贝数码科技股份有限公司",
    logo: "/experience/favicon (3).ico", // Replace with actual path if different
    role: "Frontend Engineer",
    duration: "2021 - 2023",
    link: "https://www.sobey.com/",
  },
  {
    name: "成都深瑞同华科技有限公司",
    logo: "/experience/favicon (2).ico", // Replace with actual path if different
    role: "Frontend Engineer",
    duration: "2020 - 2021",
    link: "https://www.cdsrth.com/home",
  },
];

// Define the structure for tech stack data
interface TechStackItem {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Other";
}

const techStackData: TechStackItem[] = [
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Nest.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "Drizzle", category: "Backend" },

  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" }, // Added Flutter as an example

  { name: "Docker", category: "Other" },
];

// Helper to group tech stacks by category
const groupedTechStacks = techStackData.reduce((acc, tech) => {
  if (!acc[tech.category]) {
    acc[tech.category] = [];
  }
  acc[tech.category].push(tech);
  return acc;
}, {} as Record<TechStackItem["category"], TechStackItem[]>);

// Define the order of categories
const categoryOrder: TechStackItem["category"][] = [
  "Frontend",
  "Backend",
  "Mobile",
  "Other",
];

// Allow passing props down to the root element
export interface AboutProps extends HTMLAttributes<HTMLElement> {}

const About: FC<AboutProps> = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        "bg-black text-white py-16 px-4 sm:px-8 md:px-12 lg:px-16 relative",
        className
      )}
      id="about"
      {...props}
    >
      {/* Main Title and Subtitle */}
      <div className="mb-12 md:mb-16 lg:mb-20">
        {/* Added more bottom margin */}
        <AnimatedTextWord
          text="ABOUT BARRY"
          className="mb-2  text-white  text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold  uppercase tracking-tight"
          staggerChildren={0.02}
          delayChildren={0.2} // Optional delay before starting the animation
        />

        <h2 className="text-sm sm:text-base tracking-wider uppercase">
          {/* Adjusted subtitle style */}
          From Gui Yang, China
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Column: Image */}
        {/* Ensure aspect ratio matches image, adjust container if needed */}
        <motion.div
          className="relative w-full h-full"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <Image
            src="/about-me.webp"
            alt="Portrait describing Barry's focus"
            objectFit="cover"
            width={100}
            unoptimized
            height={100}
            className="w-3/4 object-cover"
          />
        </motion.div>

        {/* Right Column: Text and Awards */}
        <div className="flex flex-col space-y-8 pt-4 md:pt-0">
          {/* Added padding top for mobile */}
          <div>
            <h3 className="text-xs font-semibold mb-2 uppercase tracking-wider">
              {/* Adjusted style */}[ About Me ]
            </h3>
            <div className="text-base leading-relaxed text-neutral-300">
              {/* Slightly lighter text */}
              I'm Baryy Song, A fullstack developer(more like a frontend
              developer knowing backend skills) with a passion for creating
              beautiful and functional web applications. Now, I'm learning how
              to design due to AI's rapid development. I believe that design is
              the key to for next generation of web development.
            </div>
          </div>
          <div className="space-y-4 pt-4">
            <h3 className="text-xs font-semibold mb-3 uppercase tracking-wider">
              [ Tech Stacks ]
            </h3>
            <div className="space-y-4">
              {categoryOrder.map((category) => {
                const items = groupedTechStacks[category];
                if (!items || items.length === 0) return null; // Don't render empty categories

                return (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-neutral-400 mb-2">
                      {category}
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {items.map((tech, index) => (
                        <li
                          key={`${category}-${index}`}
                          className="bg-neutral-800 px-3 py-1 rounded text-sm text-neutral-300 hover:bg-neutral-700 transition-colors"
                        >
                          {tech.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-x-3 pt-4">
            <h3 className="text-xs font-semibold mb-2 uppercase tracking-wider">
              [ Experience ]
            </h3>
            <ul className="space-y-1 ">
              {experienceData.map((exp, index) => (
                <li key={index} className="border-b border-neutral-800 py-4">
                  <Link
                    href={exp.link || "#"}
                    target={exp.link && exp.link !== "/" ? "_blank" : "_self"}
                    rel={
                      exp.link && exp.link !== "/"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 group"
                  >
                    {/* Logo Column */}
                    <div className="w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-sm flex-shrink-0 overflow-hidden">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={`${exp.name} logo`}
                          width={20} // Adjust size as needed
                          height={20} // Adjust size as needed
                          unoptimized
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-xs text-neutral-500"></span> // Placeholder or leave empty
                      )}
                    </div>

                    {/* Center Column: Name and Role */}
                    <div className="flex-grow overflow-hidden">
                      <span className="text-sm sm:text-base font-medium uppercase tracking-wider truncate block group-hover:text-neutral-300 transition-colors">
                        {exp.name}
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-400 truncate block">
                        {exp.role}
                      </span>
                    </div>

                    {/* Right Column: Duration and Link Icon */}
                    <div className="flex items-center space-x-3 text-right flex-shrink-0">
                      <span className="text-xs sm:text-sm text-neutral-400 whitespace-nowrap">
                        {exp.duration}
                      </span>
                      {exp.link && (
                        <Icon
                          icon="ph:arrow-up-right" // Keep the arrow icon
                          className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors"
                        />
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
