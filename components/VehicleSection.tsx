"use client";

import { useState } from "react";
import { VEHICLES, Vehicle, LocaleCode } from "@/lib/data/vehicles";
import { Dictionary } from "@/lib/i18n";
import { VehicleCard } from "./VehicleCard";
import { VehicleDetailModal } from "./VehicleDetailModal";

interface VehicleSectionProps {
  locale: LocaleCode;
  dict: Dictionary;
}

export function VehicleSection({ locale, dict }: VehicleSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalVehicle, setActiveModalVehicle] = useState<Vehicle | null>(
    null
  );

  const categories = [
    { id: "all", label: dict.vehicles.filterAll },
    { id: "luxury", label: dict.vehicles.filterLuxury },
    { id: "suv", label: dict.vehicles.filterSuv },
    { id: "sports", label: dict.vehicles.filterSports },
  ];

  const filteredVehicles =
    selectedCategory === "all"
      ? VEHICLES
      : VEHICLES.filter((v) => v.category === selectedCategory);

  return (
    <section id="vehicles" className="w-full py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-start">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--color-brand-blue)] uppercase">
              {dict.vehicles.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-text-primary)]">
              {dict.vehicles.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-normal">
              {dict.vehicles.description}
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none shrink-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`min-h-[40px] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-[var(--color-brand-navy)] text-white shadow-xs"
                      : "bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-brand-blue)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vehicle Grid (4 cols >=1440, 3 cols 1024-1439, 2 cols 768-1023, 1 col <768) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              locale={locale}
              dict={dict}
              onSelectVehicle={(v) => setActiveModalVehicle(v)}
            />
          ))}
        </div>
      </div>

      {/* Vehicle Detail Modal / Drawer */}
      <VehicleDetailModal
        vehicle={activeModalVehicle}
        onClose={() => setActiveModalVehicle(null)}
        locale={locale}
        dict={dict}
      />
    </section>
  );
}
