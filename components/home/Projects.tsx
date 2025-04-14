"use client";
import React, { FC, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming cn utility exists
import Image from "next/image"; // Import next/image
import { Variants, Target } from "framer-motion";
import AnimatedTextWord from "@/components/ui/AnimatedTextWord"; // Import the new component

// Define the structure for project data
interface ProjectData {
  id: number;
  client: string;
  title: string;
  thumbnailUrl: string; // URL for the small thumbnail image
  displayUrl: string; // URL for the large background image/video
  isVideo: boolean; // Flag to differentiate between image and video
}

// Updated placeholder project data with correct paths and more items for the new layout
const placeholderProjects: ProjectData[] = [
  {
    id: 1,
    client: "NEDBANK",
    title: "KE YONA, YA RONA",
    thumbnailUrl: "/display/image-0.jpg",
    displayUrl: "/display/image-0.jpg",
    isVideo: true,
  },
  {
    id: 2,
    client: "Client B",
    title: "Project Two",
    thumbnailUrl: "/display/image-1.jpg",
    displayUrl: "/display/image-1.jpg",
    isVideo: false,
  },
  {
    id: 3,
    client: "Client C",
    title: "Project Three",
    thumbnailUrl: "/display/image-2.jpg",
    displayUrl: "/display/image-2.jpg",
    isVideo: false,
  },
  {
    id: 4,
    client: "Client D",
    title: "Project Four",
    thumbnailUrl: "/display/image-3.jpg",
    displayUrl: "/display/image-3.jpg",
    isVideo: false,
  },
  {
    id: 5,
    client: "Client E",
    title: "Project Five",
    thumbnailUrl: "/display/image-4.jpg",
    displayUrl: "/display/image-4.jpg",
    isVideo: false,
  },
  {
    id: 6,
    client: "Client F",
    title: "Project Six",
    thumbnailUrl: "/display/image-2.jpg", // Assuming image-5 exists
    displayUrl: "/display/image-2.jpg",
    isVideo: false,
  },
  {
    id: 7,
    client: "Client G",
    title: "Project Seven",
    thumbnailUrl: "/display/image-2.jpg", // Assuming image-6 exists
    displayUrl: "/display/image-2.jpg",
    isVideo: false,
  },
];

export interface ProjectsProps extends React.HTMLAttributes<HTMLDivElement> {}

// Updated ProjectItem to accept motion props if needed, but animation applied to wrapper
const ProjectItem: FC<{
  project: ProjectData;
  itemClassName?: string;
  linkHref?: string; // Optional link
}> = ({ project, itemClassName, linkHref = "#" }) => {
  const [isHover, setIsHover] = useState(false);
  // Wrap the entire item in a link
  return (
    <a
      href={linkHref}
      className={cn(
        "block w-full h-full relative group focus:outline-none overflow-hidden",
        itemClassName
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Image container */}
      <div className="absolute inset-0">
        <Image
          src={project.thumbnailUrl}
          alt={`${project.client} - ${project.title} Thumbnail`}
          fill
          // Use object-cover to fill the container
          className="object-cover transition-transform duration-300 ease-in-out "
        />
      </div>
      {/* Hover Mask Overlay */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="text-white text-2xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHover ? 1 : 0, scale: isHover ? 1 : 0.8 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          {project.title}
        </motion.div>
      </motion.div>
      {/* Project Title Overlay (optional styling) */}
    </a>
  );
};
const Projects: FC<ProjectsProps> = ({ className, ...props }) => {
  const [projects] = useState<ProjectData[]>(placeholderProjects);

  const project1 = projects[0];
  const project2 = projects[1];
  const project3 = projects[2];
  const project4 = projects[3];
  const project5 = projects[4];
  const project6 = projects[5];
  const project7 = projects[6];

  // Ref for scroll trigger
  const containerRef = useRef(null);
  // Trigger animation when 30% of the element is in view, run only once
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Animation Variants - Revised for Shrink/Fade effect

  // Variants for items appearing - revised for push effect

  const MAIN_ANIMATION_DELAY = 1.2;
  const ROW_ANIMATION_DELAY = 1.5;

  return (
    // Add ref and overflow-hidden
    <div
      ref={containerRef}
      className={cn("bg-[#F1F0EC] py-16 overflow-hidden", className)}
      id="projects"
      {...props}
    >
      {/* Replace the static h2 with AnimatedTextWord */}
      <AnimatedTextWord
        text="FEATURED PROJECTS"
        className="mb-12 px-4 sm:px-16 text-[#1A1A1A] text-[clamp(3rem,8vw,100px)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold  uppercase tracking-tight"
        staggerChildren={0.02}
        delayChildren={0.2} // Optional delay before starting the animation
      />

      {/* Main Grid Container */}
      <div className="relative  h-[80vh] max-h-[800px] px-4 sm:px-16 flex flex-col gap-8">
        {/* Featured Area - Apply scale animation */}
        <motion.div
          initial={{
            height: "100%",
          }}
          whileInView={{
            height: "75%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: MAIN_ANIMATION_DELAY,
          }}
          className="flex w-full justify-between "
        >
          {project1 && (
            <motion.div
              className="relative  will-change-transform h-full"
              initial={{
                width: "100%",
              }}
              whileInView={{
                width: "74.5%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: MAIN_ANIMATION_DELAY,
              }}
            >
              <ProjectItem project={project1} itemClassName="w-full h-full" />
            </motion.div>
          )}

          {/* Column Area - Add overflow-hidden */}
          {(project2 || project3) && (
            // Add overflow-hidden to clip the sliding items
            <motion.div
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "23.5%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: MAIN_ANIMATION_DELAY,
              }}
              className="flex  flex-col gap-8 overflow-hidden"
            >
              {project2 && (
                // Animate individual item with specific transition delay
                <motion.div className="flex-1 relative will-change-transform">
                  <ProjectItem project={project2} />
                </motion.div>
              )}
              {project3 && (
                // Animate individual item with slightly more delay
                <motion.div className="flex-1 relative">
                  <ProjectItem project={project3} />
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Row Area - Add overflow-hidden */}
        {(project4 || project5 || project6 || project7) && (
          // Animate the whole row container with delay, add overflow-hidden
          <motion.div
            initial={{
              height: "0",
            }}
            whileInView={{
              height: "36.3%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              delay: ROW_ANIMATION_DELAY,
            }}
            className="grid grid-cols-4 gap-8  will-change-transform"
          >
            {/* Children items don't need individual animation */}
            {project4 && (
              <div className="relative shrink-0 grow-0">
                <ProjectItem project={project4} />
              </div>
            )}
            {project5 && (
              <div className="relative shrink-0 grow-0">
                <ProjectItem project={project5} />
              </div>
            )}
            {project6 && (
              <div className="relative shrink-0 grow-0">
                <ProjectItem project={project6} />
              </div>
            )}
            {project7 && (
              <div className="relative shrink-0 grow-0">
                <ProjectItem project={project7} />
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
