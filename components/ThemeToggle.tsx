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

  // تفادي Hydration mismatch مع الحفاظ على نفس المقاس والستايل
  if (!mounted) {
    return (
      <div className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl bg-white/80 border border-slate-200/80" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="relative flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl
        bg-white/85 dark:bg-white/10 backdrop-blur-md
        border border-slate-200/80 dark:border-white/15
        shadow-xs hover:shadow-md
        text-slate-700 dark:text-amber-300
        hover:bg-white dark:hover:bg-white/20
        transition-all duration-300 active:scale-95"
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5 text-amber-300 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Sun className="w-5 h-5 text-amber-500 transition-transform duration-300 rotate-0 scale-100" />
      )}
    </button>
  );
}
