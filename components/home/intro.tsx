"use client";
import React, { FC } from "react";
import Avatar from "@/components/home/Avatar";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import NumberTicker from "@/components/home/NumberTicker";
export interface IntroProps {}
// Define animation delay constants
const initialLoadDelay = 3.2;
const designerFillDelay = 3.3;
const bottomElementsDelay = 2.0;
const Intro: FC<IntroProps> = () => {
  return (
    <>
      <motion.div
        key={"barry"}
        className="absolute inset-0 z-10 min-h-screen overflow-hidden bg-[#F1F0EC] text-black font-sans"
      >
        {/* --- Top Content Area --- */}
        <div className="absolute inset-0 pt-4 flex items-start justify-center ">
          {/* Apply topBlockVariants here */}
          <motion.div className="w-full px-4 sm:px-8 relative">
            <div className="relative flex flex-col md:flex-row md:items-baseline min-[1512px]:gap-12 min-[1920px]:gap-16 font-semibold text-[#1A1A1A]">
              {/* Parent div with overflow hidden acts as mask */}
              <div style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: initialLoadDelay,
                  }}
                  className="  min-[1512px]:text-[100px] min-[1920px]:text-[120px] leading-tight "
                >
                  Barry
                </motion.h1>
              </div>

              {/* Parent div with overflow hidden acts as mask */}
              <div style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: initialLoadDelay,
                  }}
                  className="leading-tight  min-[1512px]:text-[100px] min-[1920px]:text-[120px]  text-right md:text-left"
                >
                  Song
                </motion.h1>
              </div>
              {/* Wrap Developer div/h1 and apply variants */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: initialLoadDelay,
                }}
                className="w-16 md:w-24 h-2 mt-8 bg-[#1A1A1A] self-center hidden md:block"
              ></motion.div>
              <div className=" right-[21px] text-[#1A1A1A] overflow-hidden">
                {/* Static line - no animation needed */}
                <motion.h1
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: initialLoadDelay,
                  }}
                  className="min-[1512px]:text-[100px] min-[1920px]:text-[120px]  leading-none text-right md:text-left"
                >
                  Developer
                </motion.h1>
              </div>
            </div>
            {/* Wrap Designer container and apply variants */}
            <div className="overflow-hidden relative w-screen min-[1512px]:h-[160px] min-[1920px]:h-[180px]">
              <motion.div
                initial={{ y: "200px" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: initialLoadDelay,
                }}
                className="absolute right-16 mt-4 z-20"
              >
                <h1 className="min-[1512px]:text-[100px] min-[1920px]:text-[120px] leading-none md:text-left font-semibold relative">
                  {/* Strikethrough line - updated color */}
                  <div className="absolute top-1/2 left-[20%] right-0 h-0.5 bg-[#748E99] transform -translate-y-1/2 z-10"></div>
                  {/* Background outlined text - updated color */}
                  <span className="relative block w-full left-0 text-transparent [-webkit-text-stroke:1px_#748E99] font-serif">
                    Designer
                  </span>
                  {/* Fill animation - updated color */}
                  <div>
                    <motion.h1
                      initial={{ width: "0%" }}
                      animate={{ width: "20%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        delay: designerFillDelay,
                      }}
                      className="absolute top-0 left-0 block h-full overflow-hidden text-[#748E99] font-serif"
                      aria-hidden="true"
                    >
                      Designer
                    </motion.h1>
                  </div>
                </h1>
                {/* Number Ticker - unchanged */}
                <NumberTicker
                  targetValue={20}
                  duration={1.5}
                  delay={designerFillDelay}
                  className="absolute bottom-0 right-0 translate-y-full mt-2 text-xl text-gray-600 font-mono whitespace-nowrap"
                />
              </motion.div>
            </div>
            <div className="flex justify-end">
              <motion.div
                initial={{ maskPosition: "40% 0%" }}
                style={{
                  transform: "none",
                  maskClip: "border-box",
                  maskComposite: "xor",
                  maskImage:
                    "linear-gradient(45deg, #000, #000 15%, transparent 30%)",
                  maskMode: "match-source",
                  maskOrigin: "border-box",
                  maskRepeat: "revert",
                  maskSize: "800% 100%",
                }}
                whileInView={{ maskPosition: "0% 100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.7,
                  delay: designerFillDelay,
                  ease: "easeInOut",
                }}
                className=" text-[#748E99]   w-[400px] min-[1512px]:mr-[55px] min-[1920px]:mr-[140px]  text-left"
              >
                Currently learning web design. As AI evolves, web development
                and design are converging. My design ability progress: 20%
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* --- Bottom Left Elements --- */}
      </motion.div>
      <motion.div className="absolute z-15 bottom-4 left-4 sm:bottom-8 sm:left-8 flex items-end space-x-4">
        {/* Wrap Icon and Description div and apply variants */}
        <motion.div
          initial={{ opacity: 1, y: 10, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 360 }}
          transition={{
            delay: bottomElementsDelay,
            duration: 2.0,
            ease: "easeOut",
          }}
        >
          <Icon
            icon="mdi:asterisk"
            className="text-6xl sm:text-8xl text-[#1A1A1A]"
          />
        </motion.div>
        <motion.div
          // variants={descriptionVariants}
          className="max-w-[550px] z-15 text-xl tracking-wide text-[#1A1A1A]"
        >
          for me, web development is an art where logic and creativity meet. i
          enjoy crafting sleek interfaces, dynamic interactions, and intuitive
          designs that
        </motion.div>
      </motion.div>

      {/* --- Avatar (Bottom Right) --- */}
      <motion.div
        // variants={bottomBlockVariants} // Use simpler block variant
        className="absolute bottom-4 z-15 right-4 sm:bottom-8 sm:right-8"
      >
        {/* Wrap Avatar and apply variants */}
        <motion.div
          initial={{ opacity: 1, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{
            delay: bottomElementsDelay,
            duration: 1.8,
            ease: "easeOut",
          }}
        >
          <Avatar src="/avatar.jpeg" alt="Barry Song" size={240} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Intro;
