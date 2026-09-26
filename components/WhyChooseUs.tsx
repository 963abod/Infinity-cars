import { ShieldCheck, Award, Sparkles, Zap } from "lucide-react";
import { Dictionary } from "@/lib/i18n";

interface WhyChooseUsProps {
  dict: Dictionary;
}

export function WhyChooseUs({ dict }: WhyChooseUsProps) {
  const icons = [Sparkles, Award, ShieldCheck, Zap];

  return (
    <section id="why-us" className="w-full py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* High quality Vehicle Interior Photo */}
          <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-md group">
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
              alt="Infinity Cars Luxury Vehicle Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>

          {/* Content Block */}
          <div className="space-y-6 text-start">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--color-brand-blue)] uppercase">
                {dict.whyUs.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-text-primary)] leading-tight">
                {dict.whyUs.title}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal">
              {dict.whyUs.description}
            </p>

            {/* List of 4 Benefit Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {dict.whyUs.list.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--color-surface-tint)] flex items-center justify-center shrink-0 text-[var(--color-brand-navy)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)] font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
