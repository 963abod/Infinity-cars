import Link from "next/link";
import { Phone, MapPin, MessageCircle, Globe2 } from "lucide-react";
import { Locale } from "@/middleware";
import { Dictionary } from "@/lib/i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const whatsappUrl = getWhatsAppLink(locale);
  const currentYear = new Date().getFullYear();
  const copyrightText = dict.footer.copyright.replace(
    "{year}",
    currentYear.toString()
  );

  const navLinks = [
    { label: dict.nav.home, href: "#hero" },
    { label: dict.nav.vehicles, href: "#vehicles" },
    { label: dict.nav.whyUs, href: "#why-us" },
    { label: dict.nav.testimonials || dict.nav.services, href: "#testimonials" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[var(--color-brand-navy)] text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-start">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link
              href={`/${locale}`}
              className="inline-block text-2xl font-extrabold tracking-tight text-white hover:text-blue-200 transition-colors"
            >
              INFINITY CARS
            </Link>
            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              {dict.footer.tagline}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-blue-200">
              <Globe2 className="w-4 h-4 shrink-0 text-[var(--color-brand-blue)]" />
              <span>{dict.footer.languageNote}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              {dict.footer.navTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 py-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              {dict.footer.servicesTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {dict.footer.services.map((service, idx) => (
                <li key={idx} className="text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              {dict.footer.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-brand-blue)] shrink-0" />
                <span>{dict.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-brand-blue)] shrink-0" />
                <span className="ltr-isolate">{dict.footer.phone}</span>
              </li>
              <li className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-white/10 hover:bg-[var(--color-brand-blue)] text-white text-xs font-semibold transition-colors duration-200 border border-white/10"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>{dict.footer.whatsapp}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{copyrightText}</p>
          <p>
            <a
              href="https://aboudweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[var(--color-brand-blue)] hover:underline transition-colors font-medium"
            >
              {dict.footer.developerCredit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
