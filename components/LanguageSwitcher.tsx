"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";
import { LOCALES, type Locale } from "@/middleware";
import { LOCALE_NAMES } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Switch locale without full re-render flickering
  const handleLocaleChange = (newLocale: Locale) => {
    setIsOpen(false);
    if (newLocale === currentLocale) return;

    // Replace locale in current path
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.push(newPath);
  };

  const activeInfo = LOCALE_NAMES[currentLocale] || LOCALE_NAMES.ar;

  return (
    <div className="relative inline-block text-start" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Change Language"
        className="flex items-center gap-1.5 min-h-[44px] min-w-[44px] px-3 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] text-sm font-semibold hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)]"
      >
        <span>{activeInfo.code}</span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--color-text-secondary)] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Select Language"
          className="absolute z-50 mt-2 w-44 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-md py-1.5 inset-inline-end-0 animate-in fade-in zoom-in-95 duration-150"
        >
          {LOCALES.map((loc) => {
            const locInfo = LOCALE_NAMES[loc];
            const isActive = loc === currentLocale;
            return (
              <button
                key={loc}
                role="option"
                aria-selected={isActive}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full flex items-center justify-between min-h-[44px] px-4 py-2.5 text-sm font-medium text-start transition-colors ${
                  isActive
                    ? "text-[var(--color-brand-blue)] bg-[var(--color-surface-tint)] font-semibold"
                    : "text-[var(--color-text-primary)] hover:bg-[var(--color-bg)]"
                }`}
              >
                <span>{locInfo.native}</span>
                {isActive && (
                  <Check className="w-4 h-4 text-[var(--color-brand-blue)]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
