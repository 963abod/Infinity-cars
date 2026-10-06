import { MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Locale } from "@/lib/locales";
import { Dictionary, isRTL } from "@/lib/i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface PromotionalCTAProps {
  locale: Locale;
  dict: Dictionary;
}

export function PromotionalCTA({ locale, dict }: PromotionalCTAProps) {
  const rtl = isRTL(locale);
  const whatsappUrl = getWhatsAppLink(locale);

  return (
    <section
      id="contact"
      className="relative w-full py-20 lg:py-32 bg-[var(--color-brand-navy)] text-white overflow-hidden"
    >
      {/* Dark Cinematic Scrim Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {dict.cta.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 font-normal leading-relaxed">
            {dict.cta.description}
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 min-h-[56px] px-8 py-4 rounded-xl bg-[var(--color-brand-blue)] hover:bg-blue-600 text-white text-base sm:text-lg font-bold transition-all duration-200 shadow-lg hover:scale-105 group"
          >
            <MessageCircle className="w-6 h-6 fill-current shrink-0" />
            <span>{dict.cta.button}</span>
            {rtl ? (
              <ArrowLeft className="w-5 h-5 rtl-flip transition-transform duration-200 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            )}
          </a>
        </div>
      </div>
    </section>
  );
}
