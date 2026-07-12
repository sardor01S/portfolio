"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { useLanguage } from "@/components/providers/language-provider";
import { languages } from "@/lib/i18n";

const navLinks = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const localeRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (localeRef.current && !localeRef.current.contains(event.target as Node)) {
        setLocaleOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-3 shadow-[0_16px_60px_rgba(2,8,23,0.22)] backdrop-blur-2xl transition-all duration-300 sm:h-18 sm:px-4 lg:px-5 ${scrolled ? "border-white/10 bg-slate-950/80" : "border-white/10 bg-slate-950/70"}`}
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-violet-600 via-fuchsia-500 to-cyan-400 text-sm font-semibold text-white shadow-lg transition duration-300 group-hover:rotate-12 group-hover:scale-105">
            SI
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.3em] text-white transition group-hover:text-cyan-300 sm:block">
            SARDORBEK ISMATOV
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${active ? "text-white" : "text-slate-400 hover:text-white"}`}
              >
                <span className="relative z-10">{t.nav[item.key]}</span>
                {active ? <motion.span layoutId="active-nav" className="absolute inset-0 rounded-full bg-white/8" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div ref={localeRef} className="relative">
            <button
              onClick={() => setLocaleOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
            >
              <span>{languages.find((option) => option.code === locale)?.flag}</span>
              <span>{languages.find((option) => option.code === locale)?.label}</span>
              <ChevronDown size={15} className={`transition ${localeOpen ? "rotate-180" : "rotate-0"}`} />
            </button>

            <AnimatePresence>
              {localeOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 mt-3 min-w-40 rounded-2xl border border-white/10 bg-slate-950/95 p-2 text-sm shadow-xl backdrop-blur-xl"
                >
                  {languages.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => {
                        setLocale(option.code as typeof locale);
                        setLocaleOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition ${locale === option.code ? "bg-cyan-500/10 text-cyan-300" : "text-slate-200 hover:bg-white/10"}`}
                    >
                      <span>{option.label}</span>
                      <span>{option.flag}</span>
                    </button>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
            aria-label="Toggle theme"
          >
            <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.25 }}>
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.span>
          </motion.button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              className="fixed inset-x-3 top-20 z-50 rounded-[28px] border border-slate-200/70 bg-white/90 p-4 shadow-[0_24px_90px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/90 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => {
                  const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${active ? "bg-violet-500/10 text-violet-600 dark:text-violet-300" : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"}`}
                    >
                      {t.nav[item.key]}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200/70 pt-4 dark:border-white/10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                    <span>{languages.find((option) => option.code === locale)?.flag}</span>
                    <span>{languages.find((option) => option.code === locale)?.label}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {languages.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => {
                        setLocale(option.code as typeof locale);
                        setMobileOpen(false);
                      }}
                      className={`rounded-full px-3 py-2 text-sm transition ${locale === option.code ? "bg-violet-500/10 text-violet-600 dark:text-violet-300" : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"}`}
                    >
                      {option.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
