"use client";

import { MessageCircle } from "lucide-react";
import { LocaleCode } from "@/lib/data/vehicles";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { isRTL } from "@/lib/i18n";

interface FloatingWhatsAppButtonProps {
  locale: LocaleCode;
}

export function FloatingWhatsAppButton({ locale }: FloatingWhatsAppButtonProps) {
  const rtl = isRTL(locale);
  const whatsappUrl = getWhatsAppLink(locale);

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className={`fixed bottom-4 sm:bottom-6 z-30 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md flex items-center justify-center transition-transform hover:scale-110 active:scale-95 animate-in fade-in zoom-in-75 duration-300 ${
          rtl
            ? "left-4 sm:left-6"
            : "right-4 sm:right-6"
        }`}
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current stroke-none" />
      </a>
    </aside>
  );
}
