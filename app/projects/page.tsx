import { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata: Metadata = { title: "Projects | Sardor Karimov", description: "Selected work and product-focused frontend experiences." };

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectsSection />
    </main>
  );
}
