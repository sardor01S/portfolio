"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const themeChangeEvent = "portfolio-theme-change";

function getStoredTheme(): Theme | null {
  const storedTheme = window.localStorage.getItem("portfolio-theme");
  return storedTheme === "dark" || storedTheme === "light" ? storedTheme : null;
}

function getThemeSnapshot(): Theme {
  return getStoredTheme() ?? "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
}

function subscribeToTheme(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === "portfolio-theme" || event.key === null) onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(themeChangeEvent, onStoreChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(themeChangeEvent, onStoreChange);
  };
}

function setStoredTheme(theme: Theme) {
  window.localStorage.setItem("portfolio-theme", theme);
  applyTheme(theme);
  window.dispatchEvent(new Event(themeChangeEvent));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, (): Theme => "dark");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    const activeTheme = storedTheme ?? theme;
    if (!storedTheme) window.localStorage.setItem("portfolio-theme", activeTheme);
    applyTheme(activeTheme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setStoredTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
