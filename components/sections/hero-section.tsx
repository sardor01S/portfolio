"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm dark:border-sky-400/20 dark:bg-slate-900/80 dark:text-sky-300">
            <Code2 size={16} />
            {t.hero.availability}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            Sardorbek Ismatov
          </h1>
          <p className="mt-4 text-2xl font-medium text-sky-700 sm:text-3xl dark:text-cyan-300">
            {t.hero.role}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            {t.hero.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
            >
              {t.buttons.viewProjects}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              {t.buttons.contactMe}
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          aria-label={t.hero.focusAriaLabel}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.35)] sm:p-8 dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-cyan-300">
            {t.hero.focusLabel}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
            {t.hero.focusTitle}
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.hero.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-7 border-t border-slate-200 pt-5 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">{t.hero.educationLabel}</p>
            <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">
              {t.hero.education}
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
