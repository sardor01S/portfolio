"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { projects, type ProjectCategory } from "@/lib/projects";

const filters: ProjectCategory[] = ["all", "frontend"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [search, setSearch] = useState("");
  const { t } = useLanguage();

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesFilter = activeFilter === "all" || project.category === activeFilter;
        const query = search.trim().toLowerCase();
        const matchesSearch =
          !query ||
          `${project.title} ${t.projectCards[project.translationKey].description} ${project.stack.join(" ")}`
            .toLowerCase()
            .includes(query);
        return matchesFilter && matchesSearch;
      }),
    [activeFilter, search, t.projectCards],
  );

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-cyan-300">
              {t.projectsPage.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              {t.projectsPage.heading}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {t.projectsPage.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative min-w-56">
              <span className="sr-only">{t.buttons.search}</span>
              <Search
                size={16}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t.buttons.search}
                className="w-full rounded-full border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/15 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-cyan-400"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${
                    activeFilter === filter
                      ? "bg-sky-700 text-white dark:bg-cyan-500 dark:text-slate-950"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400"
                  }`}
                >
                  {filter === "all" ? t.buttons.filterAll : t.buttons.filterFrontend}
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid auto-rows-fr gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_24px_70px_-40px_rgba(14,116,144,0.25)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-400/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={project.image}
                    alt={`${project.title} ${t.projectsPage.screenshotAlt}`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px"
                    quality={88}
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                      {t.projectCards[project.translationKey].type}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {t.projectCards[project.translationKey].description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} ${t.projectsPage.technologiesLabel}`}>
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-600 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                      >
                        <FaGithub size={16} aria-hidden="true" />
                        {t.buttons.github}
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                      >
                        {t.buttons.liveDemo}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 ? (
          <p className="mt-6 text-slate-600 dark:text-slate-300">{t.projectsPage.placeholder}</p>
        ) : null}
      </div>
    </section>
  );
}
