export type ProjectCategory = "all" | "frontend";

export type Project = {
  id: number;
  translationKey: "novalearn" | "twistflix";
  title: string;
  category: Exclude<ProjectCategory, "all">;
  stack: string[];
  github?: string;
  demo?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    translationKey: "novalearn",
    title: "NovaLearn",
    category: "frontend",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase Authentication", "REST API"],
    github: "https://github.com/sardor01S/course-app",
    demo: "https://course-app-wheat-alpha.vercel.app/",
    image: "/images/course-project.jpg",
  },
  {
    id: 2,
    translationKey: "twistflix",
    title: "TwistFlix",
    category: "frontend",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "TVmaze API",
      "Fetch API",
    ],
    github: "https://github.com/sardor01S/movie-app",
    demo: "https://movie-app-bice-tau.vercel.app/",
    image: "/images/twistflix-preview.png",
  },
];
