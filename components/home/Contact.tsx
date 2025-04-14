"use client";
import React, { FC } from "react";
import AnimatedTextWord from "../ui/AnimatedTextWord";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ContactProps {}

const contactLinks = [
  {
    href: "mailto:barrysong97@gmail.com",
    text: "barrysong97@gmail.com",
    target: "_self", // Optional: specify target, default is _self for mailto
  },
  {
    href: "https://x.com/BarrySong97",
    text: "Twitter",
    target: "_blank",
  },
  {
    href: "/resume.pdf", // Replace with the actual path to your resume
    text: "Resume",
    target: "_blank",
  },
  {
    href: "https://github.com/BarrySong97",
    text: "GitHub",
    target: "_blank",
  },
];

const Contact: FC<ContactProps> = () => {
  return (
    <div id="contact" className="px-16 bg-[#F1F0EC] py-16 min-h-screen">
      <AnimatedTextWord
        text="GET IN TOUCH"
        className="text-6xl mb-12 sm:text-7xl md:text-8xl lg:text-9xl font-bold  uppercase tracking-tight text-right"
        staggerChildren={0.02}
        delayChildren={0.2} // Optional delay before starting the animation
      />
      <div className="flex justify-between ">
        <motion.div
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
            src={"/contact.webp"}
            alt="contact"
            width={400}
            height={800}
            unoptimized
            className="w-[400px]"
          />
        </motion.div>
        <div className="flex flex-col gap-4 text-lg">
          {contactLinks.map((link) => (
            <Link
              key={link.href} // Use href as key, assuming it's unique
              href={link.href}
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 group"
            >
              <span className="underline-offset-4 decoration-transparent group-hover:underline group-hover:decoration-current transition-all duration-300">
                {link.text}
              </span>
              <Icon
                icon="lucide:arrow-up-right"
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
