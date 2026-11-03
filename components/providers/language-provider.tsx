"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import {
  defaultLocale,
  getLocaleFromStorage,
  messages,
  type Locale,
  type TranslationMessages,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationMessages;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const localeChangeEvent = "portfolio-locale-change";

function subscribeToLocale(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(localeChangeEvent, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(localeChangeEvent, onStoreChange);
  };
}

function setStoredLocale(locale: Locale) {
  window.localStorage.setItem("portfolio-locale", locale);
  window.dispatchEvent(new Event(localeChangeEvent));
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleFromStorage,
    (): Locale => defaultLocale,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = messages[locale].siteTitle;
    if (!window.localStorage.getItem("portfolio-locale")) {
      window.localStorage.setItem("portfolio-locale", locale);
    }
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: setStoredLocale,
      t: messages[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
