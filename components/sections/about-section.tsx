"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-cyan-300">
            {t.about.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            {t.about.heading}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            {t.about.text}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-cyan-300">
              {t.about.experienceLabel}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
              {t.about.experienceHeading}
            </h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              {t.about.experienceText}
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-cyan-300">
              {t.about.educationLabel}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
              Najot Ta&apos;lim
            </h3>
            <p className="mt-1 font-medium text-slate-700 dark:text-slate-200">
              {t.about.educationCourse}
            </p>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              {t.about.educationText}
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
