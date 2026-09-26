"use client";

import { Clock, MessageCircle, ArrowLeft, ArrowRight, Gauge, Users, ShieldCheck } from "lucide-react";
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

  return (
    <div
      onClick={() => onSelectVehicle(vehicle)}
      className="group relative flex flex-col justify-between bg-[var(--color-surface)] rounded-[24px] border border-[var(--color-border)] p-5 shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer overflow-hidden"
    >
      <div>
        {/* Card Header Row: Category Badge + Pickup Time Chip */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-[var(--color-surface-tint)] text-[var(--color-brand-navy)] text-xs font-semibold capitalize tracking-wide">
            {vehicle.category}
          </span>
          <div className="inline-flex items-center gap-1.5 text-[var(--color-text-secondary)] text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-[var(--color-brand-blue)]" />
            <span>{pickupLabel}</span>
          </div>
        </div>

        {/* Vehicle Image Plate */}
        <div className="relative w-full h-[180px] sm:h-[200px] rounded-2xl bg-radial from-[var(--color-surface-tint)] to-[var(--color-surface)] flex items-center justify-center p-4 mb-4 overflow-hidden">
          <img
            src={vehicle.images[0]}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-[1.05] transition-transform duration-300 ease-out"
            loading="lazy"
          />
        </div>

        {/* Vehicle Name & Tagline */}
        <div className="space-y-1 mb-4 text-start">
          <h3 className="text-lg sm:text-xl font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-navy)] transition-colors">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium line-clamp-1">
            {tagline}
          </p>
        </div>

        {/* 3 Key Spec Items */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-[var(--color-border)] mb-5 text-center">
          <div className="flex flex-col items-center justify-center gap-1">
            <Gauge className="w-4 h-4 text-[var(--color-brand-blue)]" />
            <span className="text-xs font-semibold text-[var(--color-text-primary)] line-clamp-1">
              {engineText}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 border-x border-[var(--color-border)] px-1">
            <Users className="w-4 h-4 text-[var(--color-brand-blue)]" />
            <span className="text-xs font-semibold text-[var(--color-text-primary)] line-clamp-1">
              {seatsText}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[var(--color-brand-blue)]" />
            <span className="text-xs font-semibold text-[var(--color-text-primary)] line-clamp-1">
              {insuranceText}
            </span>
          </div>
        </div>
      </div>

      {/* Primary WhatsApp CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()} // Direct booking without opening modal
        className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-blue)] text-white text-sm font-semibold flex items-center justify-between gap-2 transition-colors duration-200 shadow-xs"
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>{dict.vehicles.card.bookNow}</span>
        </div>
        {rtl ? (
          <ArrowLeft className="w-4 h-4 rtl-flip shrink-0" />
        ) : (
          <ArrowRight className="w-4 h-4 shrink-0" />
        )}
      </a>
    </div>
  );
}
