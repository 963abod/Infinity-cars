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
      className="relative w-full py-20 lg:py-32 bg-slate-950 text-white overflow-hidden"
    >
      {/* صورة الرينج روفر واضحة بدون تعتيم يكتم الملامح */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/hero.jpg"
          alt="Titan Motors Car"
          className="w-full h-full object-cover object-center brightness-105 contrast-110"
        />
        {/* تدرج سينمائي: يعتم فوق النص ويدمج مع الفوتر، ويترك منتصف السيارة ظاهر */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/30 to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
            {dict.cta.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed drop-shadow-sm">
            {dict.cta.description}
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 min-h-[56px] px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-base sm:text-lg font-bold transition-all duration-200 shadow-xl shadow-blue-600/35 hover:scale-105 active:scale-95 group"
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