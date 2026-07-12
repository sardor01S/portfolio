"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { projects, type ProjectCategory } from "@/lib/projects";

const filters: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full Stack" },
  { key: "ui", label: "UI" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [search, setSearch] = useState("");
  const { t } = useLanguage();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === "all" || project.category === activeFilter;
      const matchesSearch = `${project.title} ${project.description} ${project.stack.join(" ")}`.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">{t.projectsPage.title}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t.projectsPage.title}</h2>
            <p className="mt-4 text-lg text-slate-400">{t.projectsPage.subtitle}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={t.buttons.search} className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-0" />
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button key={filter.key} onClick={() => setActiveFilter(filter.key)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeFilter === filter.key ? "bg-linear-to-r from-violet-600 to-cyan-500 text-white shadow-[0_12px_40px_rgba(124,58,237,0.24)]" : "border border-white/10 bg-slate-950/70 text-slate-400"}`}>
                  {t.buttons[`filter${filter.key === "all" ? "All" : filter.key === "frontend" ? "Frontend" : filter.key === "fullstack" ? "FullStack" : "Ui"}` as keyof typeof t.buttons]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article key={project.id} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.4, delay: index * 0.06 }} whileHover={{ y: -8, scale: 1.01, rotate: -0.4 }} className="group overflow-hidden rounded-4xl border border-white/10 bg-slate-950/70 shadow-[0_20px_100px_rgba(2,8,23,0.35)] transition hover:border-cyan-400/30 hover:shadow-[0_24px_90px_rgba(59,130,246,0.16)]">
                <div className="relative h-64 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">{project.category}</div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-slate-200">{item}</span>)}</div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/12"><FaGithub size={16} /> {t.buttons.github}</a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">{t.buttons.liveDemo} <ArrowUpRight size={16} /></a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 ? <p className="mt-6 text-slate-400">{t.projectsPage.placeholder}</p> : null}
      </div>
    </section>
  );
}
