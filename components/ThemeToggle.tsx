"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // تفادي الـ Hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="relative flex items-center justify-center w-10 h-10 rounded-xl
        bg-white/40 dark:bg-slate-900/40 backdrop-blur-md
        border border-white/60 dark:border-white/10
        shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
        text-slate-800 dark:text-amber-300
        hover:scale-105 active:scale-95 transition-all duration-300"
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Sun className="w-5 h-5 text-amber-500 transition-transform duration-300 rotate-0 scale-100" />
      )}
    </button>
  );
}
