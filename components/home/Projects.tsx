"use client";
import React, { FC, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming cn utility exists
import Image from "next/image"; // Import next/image
import { Variants, Target } from "framer-motion";

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
}> = ({ project, itemClassName, linkHref = "#" }) => (
  // Wrap the entire item in a link
  <a
    href={linkHref}
    className={cn(
      "block w-full h-full relative group focus:outline-none overflow-hidden",
      itemClassName
    )}
  >
    {/* Image container */}
    <div className="absolute inset-0">
      <Image
        src={project.thumbnailUrl}
        alt={`${project.client} - ${project.title} Thumbnail`}
        fill
        // Use object-cover to fill the container
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
    {/* Project Title Overlay (optional styling) */}
    <div className="absolute bottom-2 left-2 z-10 bg-black bg-opacity-50 text-white p-1 rounded text-xs">
      {project.title}
    </div>
  </a>
);

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
  const featuredItemVariants: Variants = {
    // Start scaled up, slightly transparent, from top-left origin
    hidden: { scale: 1.5, transformOrigin: "top left" },
    // Animate to normal size and full opacity
    visible: {
      scale: 1,
      transition: { delay: 0.8, duration: 1.7, ease: "easeOut" },
    },
  };

  // Variants for items appearing - revised for push effect
  const slideInItemVariants = (direction: "x" | "y" = "y"): Variants => {
    const hiddenState: Target = { opacity: 1 };
    const visibleState: Target = {
      opacity: 1,
    };

    if (direction === "x") {
      hiddenState.x = "100%";
      visibleState.x = 0;
    } else {
      hiddenState.y = "100%";
      visibleState.y = 0;
    }

    return {
      hidden: hiddenState,
      // Transition details will be added directly to the motion component
      visible: {
        ...visibleState,
        transition: { delay: 1.1, duration: 1.5, ease: "easeOut" },
      },
    };
  };

  return (
    // Add ref and overflow-hidden
    <div
      ref={containerRef}
      className={cn("bg-[#F1F0EC] py-16 overflow-hidden", className)}
      {...props}
    >
      <h2 className="mb-12 px-4 sm:px-8 text-[#1A1A1A] font-semibold text-[clamp(3rem,8vw,100px)] min-[1920px]:text-[120px] leading-tight">
        Featured Projects
      </h2>

      {/* Main Grid Container */}
      <div className="relative z-10 grid grid-cols-4 grid-rows-3 gap-8 h-[80vh] max-h-[800px] px-4 sm:px-8">
        {/* Featured Area - Apply scale animation */}
        {project1 && (
          <motion.div
            className="row-span-2 col-span-3 relative will-change-transform"
            variants={featuredItemVariants} // Uses your updated variant with delay: 0.5
            viewport={{ once: true, margin: "-100px" }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <ProjectItem project={project1} itemClassName="w-full h-full" />
          </motion.div>
        )}

        {/* Column Area - Add overflow-hidden */}
        {(project2 || project3) && (
          // Add overflow-hidden to clip the sliding items
          <div className="row-span-2 col-start-4 flex flex-col gap-8 overflow-hidden">
            {project2 && (
              // Animate individual item with specific transition delay
              <motion.div
                className="flex-1 relative will-change-transform"
                variants={slideInItemVariants("x")}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }} // Start after featured starts shrinking
              >
                <ProjectItem project={project2} />
              </motion.div>
            )}
            {project3 && (
              // Animate individual item with slightly more delay
              <motion.div
                className="flex-1 relative"
                variants={slideInItemVariants("x")}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }} // Stagger slightly
              >
                <ProjectItem project={project3} />
              </motion.div>
            )}
          </div>
        )}

        {/* Row Area - Add overflow-hidden */}
        <div className="overflow-hidden row-start-3 col-span-4 ">
          {(project4 || project5 || project6 || project7) && (
            // Animate the whole row container with delay, add overflow-hidden
            <motion.div
              className="grid grid-cols-4 gap-8 h-full will-change-transform"
              variants={slideInItemVariants("y")} // Slide from Y
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.65, duration: 0.6, ease: "easeOut" }} // Start after featured starts shrinking
            >
              {/* Children items don't need individual animation */}
              {project4 && (
                <div className="relative">
                  <ProjectItem project={project4} />
                </div>
              )}
              {project5 && (
                <div className="relative">
                  <ProjectItem project={project5} />
                </div>
              )}
              {project6 && (
                <div className="relative">
                  <ProjectItem project={project6} />
                </div>
              )}
              {project7 && (
                <div className="relative">
                  <ProjectItem project={project7} />
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
