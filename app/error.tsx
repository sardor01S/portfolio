"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";

export default function Error({ reset }: { reset: () => void }) {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="max-w-lg rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 text-center shadow-[0_25px_100px_rgba(2,8,23,0.35)]">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">{t.statusPages.error}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{t.statusPages.errorTitle}</h1>
        <p className="mt-4 text-slate-400">{t.statusPages.errorText}</p>
        <div className="mt-8 flex justify-center gap-3">
          <button onClick={reset} className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-slate-200">
            {t.statusPages.tryAgain}
          </button>
          <Link href="/" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white">
            {t.statusPages.goHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
