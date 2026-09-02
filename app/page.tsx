"use client"
import Contact from "@/features/contact/components/Contact";
import { Footer2 } from "@/features/layout/components/footer2";
import { HeroSection } from "@/features/hero/components/hero";
import Projects from "@/features/projects/Components/Projects";
import { Skills } from "@/features/skills/components/Skills";
import { motion } from "motion/react"

export default function Home() {
  return (
    <div>
      <main className="grow flex flex-col gap-5">
        <HeroSection />
        <Skills />
        <Projects />
        <Contact />
        <Footer2 />
      </main>
    </div>
  );
}
