"use client";

import { Clock, ArrowLeft, ArrowRight, Gauge, Users, ShieldCheck } from "lucide-react";
import { Vehicle, LocaleCode } from "@/lib/data/vehicles";
import { Dictionary, isRTL } from "@/lib/i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";
import LiquidGlassCard from "@/components/lightswind/liquid-glass-card";

interface VehicleCardProps {
  vehicle: Vehicle;
  locale: LocaleCode;
  dict: Dictionary;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export function VehicleCard({
  vehicle,
  locale,
  dict,
  onSelectVehicle,
}: VehicleCardProps) {
  const rtl = isRTL(locale);
  const name = vehicle.name[locale] || vehicle.name.ar;
  const tagline = vehicle.tagline[locale] || vehicle.tagline.ar;
  const whatsappUrl = getWhatsAppLink(locale, vehicle);

  const engineText = vehicle.specs.engine[locale] || vehicle.specs.engine.ar;
  const seatsText = vehicle.specs.seats[locale] || vehicle.specs.seats.ar;
  const insuranceText = vehicle.specs.insurance[locale] || vehicle.specs.insurance.ar;

  const pickupLabel = dict.vehicles.card.pickupTime.replace(
    "{time}",
    vehicle.pickupTimeMinutes.toString()
  );

  const ArrowIcon = rtl ? ArrowLeft : ArrowRight;

  return (
    <LiquidGlassCard
      variant="aurora"
      glow
      hoverEffect
      onClick={() => onSelectVehicle(vehicle)}
      className="group flex flex-col justify-between p-5 cursor-pointer text-start transition-all duration-300"
    >
      <div>
        {/* الترويسة: الفئة ووقت التسليم */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold capitalize tracking-wide backdrop-blur-sm border border-white/10">
            {vehicle.category}
          </span>

          <div className="inline-flex items-center gap-1.5 text-neutral-300 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>{pickupLabel}</span>
          </div>
        </div>

        {/* صورة السيارة: عريضة و object-cover بدون فراغات */}
        <div className="relative w-full h-[210px] sm:h-[220px] rounded-2xl overflow-hidden mb-4 bg-neutral-900/50 border border-white/5">
          <img
            src={vehicle.images[0]}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />
        </div>

        {/* اسم ووصف السيارة */}
        <div className="space-y-1 mb-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-sky-300 transition-colors">
            {name}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 font-medium line-clamp-1">
            {tagline}
          </p>
        </div>

        {/* المواصفات الفنية */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 mb-5 text-center">
          <div className="flex flex-col items-center justify-center gap-1">
            <Gauge className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold text-neutral-200 line-clamp-1">
              {engineText}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 border-x border-white/10 px-1">
            <Users className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold text-neutral-200 line-clamp-1">
              {seatsText}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold text-neutral-200 line-clamp-1">
              {insuranceText}
            </span>
          </div>
        </div>
      </div>

      {/* زر الحجز عبر واتساب */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all duration-300 active:scale-[0.98]"
      >
        <span>{dict.vehicles.card.bookNow}</span>
        <ArrowIcon className="w-4 h-4" />
      </a>
    </LiquidGlassCard>
  );
}
