"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { useLanguage } from "@/components/providers/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.3em] text-white">SARDOR</p>
          <p className="mt-2 max-w-md text-sm text-slate-400">{t.footer.copyright}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-cyan-300">{t.nav.home}</Link>
          <Link href="/projects" className="transition hover:text-cyan-300">{t.nav.projects}</Link>
          <Link href="/contact" className="transition hover:text-cyan-300">{t.nav.contact}</Link>
        </div>
        <div className="flex items-center gap-3">
          {[{ icon: <FaGithub size={16} />, href: "https://github.com" }, { icon: <FaLinkedin size={16} />, href: "https://linkedin.com" }, { icon: <FaTelegram size={16} />, href: "https://t.me" }].map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/8 p-2.5 text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-500/10">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl justify-end">
        <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-500/10">
          Back to top <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.footer>
  );
}
