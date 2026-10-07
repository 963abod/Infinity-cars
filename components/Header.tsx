"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { Locale } from "@/lib/locales";
import { Dictionary } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section intersection detection
      const sections = ["hero", "vehicles", "why-us", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: dict.nav.home, href: `#hero` },
    { id: "vehicles", label: dict.nav.vehicles, href: `#vehicles` },
    { id: "why-us", label: dict.nav.whyUs, href: `#why-us` },
    { id: "testimonials", label: dict.nav.testimonials || dict.nav.services, href: `#testimonials` },
    { id: "contact", label: dict.nav.contact, href: `#contact` },
  ];

  const whatsappUrl = getWhatsAppLink(locale);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-[var(--color-surface)] border-b border-[var(--color-border)] transition-shadow duration-200 ${
          isScrolled ? "shadow-[var(--shadow-sm)]" : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] lg:h-[80px] flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--color-brand-navy)] shrink-0 hover:opacity-90 transition-opacity"
          >
            <span>TITAN CARS</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-8 relative"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative py-2 text-base font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--color-brand-blue)]"
                      : "text-[var(--color-text-primary)] hover:text-[var(--color-brand-blue)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {/* Sliding Active Underline Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[var(--color-brand-blue)] rounded-full transition-all duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Language Switcher + WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <LanguageSwitcher currentLocale={locale} />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-blue)] text-white text-sm font-semibold transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{dict.nav.bookNow}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher currentLocale={locale} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="p-2.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        locale={locale}
        dict={dict}
        activeSection={activeSection}
      />
    </>
  );
}
