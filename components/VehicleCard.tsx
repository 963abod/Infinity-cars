"use client";

import { Clock, ArrowLeft, ArrowRight, Gauge, Users, ShieldCheck } from "lucide-react";
import { Vehicle, LocaleCode } from "@/lib/data/vehicles";
import { Dictionary, isRTL } from "@/lib/i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";

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
    <div
      onClick={() => onSelectVehicle(vehicle)}
      className="group relative flex flex-col justify-between p-5 rounded-3xl cursor-pointer text-start transition-all duration-500
        bg-white/70 backdrop-blur-xl border border-white/80
        shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)]
        hover:-translate-y-1.5 hover:border-blue-200/60 overflow-hidden"
    >
      {/* لمسة توهج زجاجي خفيفة بالخلفية */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl group-hover:bg-blue-200/60 transition-all duration-500" />

      <div className="relative z-10">
        {/* الترويسة: الفئة ووقت التسليم */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-slate-100/90 text-slate-800 text-xs font-bold capitalize tracking-wide border border-slate-200/60 shadow-xs">
            {vehicle.category}
          </span>

          <div className="inline-flex items-center gap-1.5 text-slate-600 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>{pickupLabel}</span>
          </div>
        </div>

        {/* صورة السيارة: عريضة وواضحة */}
        <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden mb-4 bg-slate-100/80 border border-slate-200/40">
          <img
            src={vehicle.images[0]}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>

        {/* اسم السيارة ووصفها */}
        <div className="space-y-1 mb-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1">
            {tagline}
          </p>
        </div>

        {/* المواصفات الفنية */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200/70 mb-5 text-center bg-white/40 rounded-xl px-1">
          <div className="flex flex-col items-center justify-center gap-1">
            <Gauge className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 line-clamp-1">
              {engineText}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 border-x border-slate-200/70 px-1">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 line-clamp-1">
              {seatsText}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 line-clamp-1">
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
        className="relative z-10 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-600/25 transition-all duration-300 active:scale-[0.98]"
      >
        <span>{dict.vehicles.card.bookNow}</span>
        <ArrowIcon className="w-4 h-4" />
      </a>
    </div>
  );
}
