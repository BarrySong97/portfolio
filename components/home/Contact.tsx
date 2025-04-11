"use client";
import React, { FC } from "react";
import AnimatedTextWord from "../ui/AnimatedTextWord";
import Image from "next/image";
import { motion } from "framer-motion";
export interface ContactProps {}
const Contact: FC<ContactProps> = () => {
  return (
    <div className="px-16 bg-[#F1F0EC] py-16 min-h-screen">
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
            delay: 0.2,
          }}
        >
          <Image
            src={"/contact.jpg"}
            alt="contact"
            width={100}
            height={800}
            unoptimized
            className="w-[400px]"
          />
        </motion.div>
        <div className="flex flex-col gap-2">
          <div className=" ">barrysong@gmail.com</div>
          <div className="">Twitter</div>
          <div className="">Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
