import Link from "next/link";
import { MessageCircle, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { Locale } from "@/middleware";
import { Dictionary, isRTL } from "@/lib/i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  const rtl = isRTL(locale);
  const whatsappUrl = getWhatsAppLink(locale);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[600px] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--color-brand-navy)]"
    >
      {/* Background Cinematic Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Directional Gradient Scrim over background for AA Contrast */}
      <div
        className={`absolute inset-0 ${
          rtl
            ? "bg-gradient-to-l from-[#0E3B7E]/95 via-[#0E3B7E]/75 to-transparent sm:from-[#0E3B7E]/90 sm:via-[#0E3B7E]/60 sm:to-transparent"
            : "bg-gradient-to-r from-[#0E3B7E]/95 via-[#0E3B7E]/75 to-transparent sm:from-[#0E3B7E]/90 sm:via-[#0E3B7E]/60 sm:to-transparent"
        }`}
      />

      {/* Additional Subtle Dark Scrim on mobile for text readability */}
      <div className="absolute inset-0 bg-[#0E3B7E]/40 sm:hidden" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl text-start space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-[var(--color-brand-blue)]" />
            <span>{dict.hero.badge}</span>
          </div>

          {/* H1 Display Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
            <span>{dict.hero.titleLine1}</span>
            <br />
            <span className="text-blue-200">{dict.hero.titleLine2}</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-xl">
            {dict.hero.description}
          </p>

          {/* CTA Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-7 py-3.5 rounded-xl bg-[#0E3B7E] hover:bg-[#1D61E7] text-white text-base font-semibold transition-all duration-200 shadow-lg group hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>{dict.hero.primaryCta}</span>
              {rtl ? (
                <ArrowLeft className="w-5 h-5 rtl-flip transition-transform duration-200 group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              )}
            </a>

            {/* Secondary Ghost CTA */}
            <Link
              href="#vehicles"
              className="inline-flex items-center justify-center min-h-[52px] px-7 py-3.5 rounded-xl border-1.5 border-white/80 hover:border-white bg-transparent hover:bg-white/10 text-white text-base font-semibold transition-colors duration-200 text-center"
            >
              {dict.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
