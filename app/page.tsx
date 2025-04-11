"use client"; // Add this line as Avatar uses client-side hooks
import React from "react";
import HeroText from "@/components/home/HeroText";
import Intro from "@/components/home/intro";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
// Individual element variants

export default function Home() {
  return (
    <>
      <div className="relative h-screen min-h-screen overflow-auto">
        <HeroText key={"hero"} />
        <Intro />
      </div>
      <Projects />
      <About />
      <Contact />
    </>
  );
}
