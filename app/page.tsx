"use client"; // Add this line as Avatar uses client-side hooks
import React from "react";
import HeroText from "@/components/home/HeroText";
import Intro from "@/components/home/intro";
import Projects from "@/components/home/Projects";
// Individual element variants

export default function Home() {
  return (
    <>
      <div className="relative h-screen min-h-screen overflow-auto">
        <HeroText key={"hero"} />
        <Intro />
      </div>
      <Projects />
    </>
  );
}
