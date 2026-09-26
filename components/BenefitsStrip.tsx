import { Car, ShieldCheck, Clock, Headset } from "lucide-react";
import { Dictionary } from "@/lib/i18n";

interface BenefitsStripProps {
  dict: Dictionary;
}

export function BenefitsStrip({ dict }: BenefitsStripProps) {
  const benefits = [
    {
      icon: Car,
      title: dict.benefits.modernFleet.title,
      desc: dict.benefits.modernFleet.desc,
    },
    {
      icon: ShieldCheck,
      title: dict.benefits.insurance.title,
      desc: dict.benefits.insurance.desc,
    },
    {
      icon: Clock,
      title: dict.benefits.fastDelivery.title,
      desc: dict.benefits.fastDelivery.desc,
    },
    {
      icon: Headset,
      title: dict.benefits.support.title,
      desc: dict.benefits.support.desc,
    },
  ];

  return (
    <section className="w-full bg-[var(--color-surface)] border-y border-[var(--color-border)] py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex items-center lg:flex-col lg:text-center gap-4 px-4 lg:px-6 group"
              >
                {/* Hairline Divider for Desktop */}
                {index > 0 && (
                  <div className="hidden lg:block absolute inset-y-0 inset-inline-start-0 w-[1px] bg-[var(--color-border)] my-auto h-[60%]" />
                )}

                {/* Light Blue Tinted Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-tint)] flex items-center justify-center shrink-0 text-[var(--color-brand-navy)] group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
