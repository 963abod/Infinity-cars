import { LOCALES, type Locale, DEFAULT_LOCALE } from "@/middleware";
import ar from "./locales/ar.json";
import en from "./locales/en.json";
import tr from "./locales/tr.json";
import es from "./locales/es.json";
import de from "./locales/de.json";
import ru from "./locales/ru.json";

const dictionaries = {
  ar,
  en,
  tr,
  es,
  de,
  ru,
};

export type Dictionary = typeof ar;

export function getDictionary(locale: string): Dictionary {
  const validLocale = (LOCALES.includes(locale as Locale)
    ? locale
    : DEFAULT_LOCALE) as Locale;
  return dictionaries[validLocale] || dictionaries.ar;
}

export function isRTL(locale: string): boolean {
  return locale === "ar";
}

export const LOCALE_NAMES: Record<Locale, { native: string; code: string }> = {
  ar: { native: "العربية", code: "AR" },
  en: { native: "English", code: "EN" },
  tr: { native: "Türkçe", code: "TR" },
  es: { native: "Español", code: "ES" },
  de: { native: "Deutsch", code: "DE" },
  ru: { native: "Русский", code: "RU" },
};
