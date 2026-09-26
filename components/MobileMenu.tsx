"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, MessageCircle } from "lucide-react";
import { Locale } from "@/middleware";
import { Dictionary, isRTL } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
  dict: Dictionary;
  activeSection: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  locale,
  dict,
  activeSection,
}: MobileMenuProps) {
  const rtl = isRTL(locale);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navItems = [
    { id: "hero", label: dict.nav.home, href: `#hero` },
    { id: "vehicles", label: dict.nav.vehicles, href: `#vehicles` },
    { id: "why-us", label: dict.nav.whyUs, href: `#why-us` },
    { id: "testimonials", label: dict.nav.testimonials || dict.nav.services, href: `#testimonials` },
    { id: "contact", label: dict.nav.contact, href: `#contact` },
  ];

  const whatsappUrl = getWhatsAppLink(locale);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop Scrim */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`relative w-full max-w-sm bg-[var(--color-surface)] h-full shadow-lg flex flex-col justify-between p-6 z-10 transition-transform duration-300 ease-out ${
          rtl ? "mr-auto" : "ml-auto"
        }`}
      >
        <div>
          {/* Header row in menu */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)]">
            <span className="text-xl font-bold tracking-tight text-[var(--color-brand-navy)]">
              INFINITY CARS
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2.5 rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center min-h-[48px] px-4 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? "text-[var(--color-brand-blue)] bg-[var(--color-surface-tint)]"
                      : "text-[var(--color-text-primary)] hover:bg-[var(--color-bg)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Area */}
        <div className="pt-6 border-t border-[var(--color-border)] space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">
              Language / اللغة
            </span>
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full min-h-[48px] px-5 py-3 rounded-xl bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-blue)] text-white text-base font-semibold transition-colors shadow-sm"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{dict.nav.bookNow}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
