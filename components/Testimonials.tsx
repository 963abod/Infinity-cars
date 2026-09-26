import { Star } from "lucide-react";
import { Dictionary } from "@/lib/i18n";

interface TestimonialsProps {
  dict: Dictionary;
}

export function Testimonials({ dict }: TestimonialsProps) {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  ];

  return (
    <section id="testimonials" className="w-full py-16 lg:py-24 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--color-brand-blue)] uppercase">
            {dict.testimonials.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-text-primary)]">
            {dict.testimonials.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-normal">
            {dict.testimonials.description}
          </p>
        </div>

        {/* 3 Testimonial Cards Grid / Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.testimonials.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 rounded-[24px] bg-[var(--color-bg)] border border-[var(--color-border)] space-y-4 hover:shadow-xs transition-shadow duration-200 text-start"
            >
              <div className="space-y-3">
                {/* 5 Star Rating Row */}
                <div className="flex items-center gap-1 text-[var(--color-star-amber)]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current text-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Review Comment Quote */}
                <p className="text-sm sm:text-base text-[var(--color-text-primary)] font-normal leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                <img
                  src={avatars[index % avatars.length]}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover shrink-0 border border-[var(--color-border)]"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                    {item.name}
                  </h3>
                  <span className="text-xs text-[var(--color-text-secondary)] font-medium">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
