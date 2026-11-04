"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(240px,0.9fr)] md:gap-10 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl min-w-0"
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

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto w-full max-w-[340px] sm:max-w-[390px] md:max-w-none lg:mx-auto lg:max-w-[460px]"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-cyan-400/50 bg-slate-900 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_24px_70px_-32px_rgba(6,182,212,0.42)]">
            <Image
              src="/images/profotomee.png"
              alt={t.hero.portraitAlt}
              fill
              priority
              sizes="(max-width: 767px) 85vw, (max-width: 1279px) 40vw, 460px"
              onError={(event) => {
                console.error("Failed to load hero portrait:", event.currentTarget.src);
              }}
              className="z-10 object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
