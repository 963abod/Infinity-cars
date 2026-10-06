import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/locales";
import { getDictionary } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BenefitsStrip } from "@/components/BenefitsStrip";
import { VehicleSection } from "@/components/VehicleSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { PromotionalCTA } from "@/components/PromotionalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { StructuredData } from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (!LOCALES.includes(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  const baseUrl = "https://infinitycars.sy";
  const alternatesLanguages: Record<string, string> = {};
  LOCALES.forEach((loc) => {
    alternatesLanguages[loc] = `${baseUrl}/${loc}`;
  });
  alternatesLanguages["x-default"] = `${baseUrl}/ar`;

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: alternatesLanguages,
    },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: `${baseUrl}/${locale}`,
      siteName: "INFINITY CARS",
      locale: locale === "ar" ? "ar_SY" : `${locale}_US`,
      type: "website",
    },
  };
}

export default async function LocalePage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (!LOCALES.includes(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <Header locale={locale} dict={dict} />
      <main className="flex-1">
        <Hero locale={locale} dict={dict} />
        <BenefitsStrip dict={dict} />
        <VehicleSection locale={locale} dict={dict} />
        <WhyChooseUs dict={dict} />
        <Testimonials dict={dict} />
        <PromotionalCTA locale={locale} dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
      <FloatingWhatsAppButton locale={locale} />
    </>
  );
}
