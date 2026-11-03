"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";

const skillGroups = [
  {
    key: "frontend",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    key: "stateData",
    skills: ["Redux Toolkit", "React Query", "REST API", "Axios"],
  },
  {
    key: "tools",
    skills: ["Git", "GitHub", "Vite", "npm"],
  },
] as const;

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-cyan-300">
            {t.skills.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            {t.skills.heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t.skills.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                {t.skills.categories[group.key]}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
