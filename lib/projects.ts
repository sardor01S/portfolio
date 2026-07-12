import type { StaticImageData } from "next/image";
import ecommerceImage from "@/public/images/project-ecommerce.svg";
import movieImage from "@/public/images/project-movie.svg";
import dashboardImage from "@/public/images/project-dashboard.svg";
import portfolioImage from "@/public/images/project-portfolio.svg";

export type ProjectCategory = "all" | "frontend" | "fullstack" | "ui";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  stack: string[];
  github: string;
  demo: string;
  image: StaticImageData;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Experience",
    description:
      "A premium storefront with immersive product discovery, cart flows, and conversion-focused UI patterns.",
    category: "fullstack",
    stack: ["Next.js", "Redux Toolkit", "React Query", "REST API", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image: ecommerceImage,
  },
  {
    id: 2,
    title: "Movie Discovery App",
    description:
      "A cinematic web app with rich content cards, smooth transitions, and a curated browsing experience.",
    category: "frontend",
    stack: ["React", "TypeScript", "REST API"],
    github: "https://github.com",
    demo: "https://example.com",
    image: movieImage,
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description:
      "An executive control center with analytics, theme controls, and a performance-first layout system.",
    category: "fullstack",
    stack: ["Next.js", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image: dashboardImage,
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "A refined portfolio featuring advanced motion design, multi-page storytelling, and graceful interactions.",
    category: "ui",
    stack: ["Next.js", "Framer Motion", "EmailJS"],
    github: "https://github.com",
    demo: "https://example.com",
    image: portfolioImage,
  },
];
