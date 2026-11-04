"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { useLanguage } from "@/components/providers/language-provider";
import { languages } from "@/lib/i18n";

const navLinks = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-3 shadow-sm backdrop-blur-xl sm:px-5 dark:border-slate-800 dark:bg-slate-950/90">
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-semibold text-white transition group-hover:bg-sky-800 dark:bg-cyan-500 dark:text-slate-950 dark:group-hover:bg-cyan-400">
            SI
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.12em] text-slate-900 sm:block dark:text-white">
            SARDORBEK ISMATOV
          </span>
        </Link>

        <nav aria-label={t.nav.mainLabel} className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-sky-50 text-sky-800 dark:bg-cyan-400/10 dark:text-cyan-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <label className="sr-only" htmlFor="language-select">
            {t.language.label}
          </label>
          <select
            id="language-select"
            value={locale}
            onChange={(event) => {
              const selected = languages.find((language) => language.code === event.target.value);
              if (selected) setLocale(selected.code);
            }}
            className="h-10 max-w-[142px] rounded-full border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 outline-none transition hover:border-sky-500 focus-visible:border-sky-600 focus-visible:ring-2 focus-visible:ring-sky-600/15 sm:max-w-none sm:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-400"
          >
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {t.language.options[language.code]}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-sky-500 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            aria-label={theme === "dark" ? t.theme.switchToLight : t.theme.switchToDark}
          >
            {theme === "light" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 md:hidden dark:border-slate-700 dark:text-slate-200"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            aria-label={t.nav.mainLabel}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-3 mt-2 rounded-3xl border border-slate-200 bg-white p-3 shadow-lg md:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            {navLinks.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-sky-50 text-sky-800 dark:bg-cyan-400/10 dark:text-cyan-300"
                      : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
