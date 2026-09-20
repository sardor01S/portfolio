"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";

const stats = [
  { value: 5, label: "Projects Delivered" },
  { value: 11, label: "Technologies" },
  { value: 1, label: "Years Learning" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const [counts, setCounts] = useState(stats.map(() => 0));
  const { t } = useLanguage();

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const start = performance.now();
    const target = stats.map((item) => item.value);

    const step = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(target.map((value) => Math.round(value * eased)));
      if (progress < 1) requestAnimationFrame(step);
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView]);

  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="rounded-4xl border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_100px_rgba(2,8,23,0.35)] backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">{t.about.title}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{t.about.title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">{t.about.text}</p>
        </motion.div>

        <div ref={ref} className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-3xl border border-white/10 bg-white/6 p-6 text-center shadow-[0_16px_60px_rgba(2,8,23,0.25)]">
              <p className="text-4xl font-semibold text-white">{counts[index]}+</p>
              <p className="mt-3 text-sm text-slate-400">{t.about[`stat${index + 1}` as keyof typeof t.about]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
