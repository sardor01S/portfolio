import { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata: Metadata = {
  title: "Projects | Sardorbek Ismatov",
  description: "Personal frontend projects built with React, Next.js, and modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectsSection />
    </main>
  );
}
