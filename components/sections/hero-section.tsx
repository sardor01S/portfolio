"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";

const roles = ["Frontend Developer", "UI Engineer", "Motion Designer"];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % roles.length), 1800);
    setMounted(true);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.16),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.12),transparent_30%)]" />
      <motion.div animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[-10%] top-[-10%] h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
      <motion.div animate={{ y: [0, -24, 0], x: [0, 20, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <motion.div whileHover={{ y: -2, scale: 1.01 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">
            <Sparkles size={14} className="text-cyan-400" />
            {t.hero.intro}
          </motion.div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block">Building refined</span>
            <span className="mt-3 block bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">frontend experiences</span>
          </h1>
          <div className="mt-4 flex min-h-16 items-center text-2xl font-medium text-cyan-400 sm:text-3xl">
            {mounted ? <span key={roles[index]}>{roles[index]}</span> : roles[0]}
          </div>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">{t.hero.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_80px_rgba(124,58,237,0.24)] transition hover:scale-[1.03] hover:shadow-[0_24px_90px_rgba(59,130,246,0.24)]">
              {t.buttons.viewProjects}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="rounded-full border border-white/10 bg-white/8 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-500/10">
              {t.buttons.contactMe}
            </Link>
            <a href="/Sardor-CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-slate-900">
              <Download size={16} />
              {t.buttons.downloadCv}
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75 }} className="relative" onMouseMove={(event) => { const bounds = event.currentTarget.getBoundingClientRect(); x.set(event.clientX - bounds.left); y.set(event.clientY - bounds.top); }} onMouseLeave={() => { x.set(0); y.set(0); }}>
          <motion.div style={{ rotateX, rotateY, transformPerspective: 1200 }} className="rounded-4xl border border-white/10 bg-slate-950/75 p-6 shadow-[0_30px_140px_rgba(2,8,23,0.5)] backdrop-blur-2xl">
            <div className="rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 p-8">
              <div className="mb-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Interactive Experience</p>
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">Available for hire</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "React", value: "Advanced" },
                  { label: "Motion", value: "Premium" },
                  { label: "Accessibility", value: "WCAG" },
                  { label: "Performance", value: "Optimized" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
