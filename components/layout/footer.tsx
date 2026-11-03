"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "@/components/providers/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mt-12 border-t border-slate-200 px-4 py-8 sm:px-6 lg:px-8 dark:border-slate-800"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.12em] text-slate-950 dark:text-white">
            Sardorbek Ismatov
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t.footer.copyright}</p>
        </div>

        <nav aria-label={t.nav.footerLabel} className="flex flex-wrap items-center gap-4 text-sm">
          <Link href="/" className="text-slate-600 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-cyan-300">
            {t.nav.home}
          </Link>
          <Link href="/projects" className="text-slate-600 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-cyan-300">
            {t.nav.projects}
          </Link>
          <Link href="/contact" className="text-slate-600 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-cyan-300">
            {t.nav.contact}
          </Link>
          <a
            href="https://github.com/sardor01S"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.githubLabel}
            className="text-slate-600 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-cyan-300"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="mailto:sismatov811@gmail.com"
            aria-label={t.footer.emailLabel}
            className="text-slate-600 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-cyan-300"
          >
            <Mail size={17} />
          </a>
        </nav>

        <a
          href="#top"
          className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-sky-600 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:self-auto dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
        >
          {t.footer.backToTop} <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.footer>
  );
}
