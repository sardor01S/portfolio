"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, LayoutTemplate, Palette, Server, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

const skills = [
  { name: "HTML5", icon: <LayoutTemplate size={18} />, percent: 98 },
  { name: "CSS3", icon: <Palette size={18} />, percent: 95 },
  { name: "SCSS", icon: <Sparkles size={18} />, percent: 90 },
  { name: "JavaScript", icon: <Code2 size={18} />, percent: 76 },
  { name: "TypeScript", icon: <ShieldCheck size={18} />, percent: 93 },
  { name: "React.js", icon: <Cpu size={18} />, percent: 95 },
  { name: "Redux Toolkit", icon: <Workflow size={18} />, percent: 91 },
  { name: "React Query", icon: <Workflow size={18} />, percent: 89 },
  { name: "Next.js", icon: <Server size={18} />, percent: 96 },
  { name: "REST API", icon: <Server size={18} />, percent: 92 },
  { name: "Tailwind CSS", icon: <Palette size={18} />, percent: 97 },
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">{t.skills.title}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t.skills.title}</h2>
          <p className="mt-4 text-lg text-slate-400">{t.skills.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div key={skill.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} whileHover={{ y: -8, scale: 1.01 }} className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_80px_rgba(2,8,23,0.25)] backdrop-blur-xl transition hover:border-cyan-400/30 hover:shadow-[0_24px_90px_rgba(59,130,246,0.16)]">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">{skill.icon}</div>
                <span className="text-sm font-semibold text-slate-200">{skill.percent}%</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{skill.name}</h3>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800/80">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.percent}%` }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="h-full rounded-full bg-linear-to-r from-violet-600 to-cyan-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
