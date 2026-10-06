import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { LOCALES, type Locale } from "@/lib/locales";
import { isRTL, getDictionary } from "@/lib/i18n";
import "../globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E3B7E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = (LOCALES.includes(resolvedParams.locale as Locale)
    ? resolvedParams.locale
    : "ar") as Locale;
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL("https://infinitycars.sy"),
    title: {
      default: dict.seo.title,
      template: "%s | INFINITY CARS",
    },
    description: dict.seo.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = (LOCALES.includes(resolvedParams.locale as Locale)
    ? resolvedParams.locale
    : "ar") as Locale;
  const rtl = isRTL(locale);

  return (
    <html
      lang={locale}
      dir={rtl ? "rtl" : "ltr"}
      className={ibmPlexArabic.variable + " " + inter.variable}
    >
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-primary)] antialiased selection:bg-[#1D61E7] selection:text-white">
        {children}
      </body>
    </html>
  );
}
