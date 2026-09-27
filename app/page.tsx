"use client"
import ContactSection from "@/features/contact/components/ContactSection";
import { Footer2 } from "@/features/layout/components/footer2";
import { HeroSection } from "@/features/hero/components/HeroSection";
import ProjectsSection from "@/features/projects/components/ProjectsSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";

export default function Home() {
  return (
    <div>
      <main className="grow flex flex-col gap-5">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
