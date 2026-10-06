"use client";

import { useState, useEffect } from "react";
import {
  X,
  MessageCircle,
  CheckCircle2,
  Gauge,
  Users,
  ShieldCheck,
  Cog,
  DoorOpen,
  Briefcase,
} from "lucide-react";
import { Vehicle, LocaleCode } from "@/lib/data/vehicles";
import { Dictionary } from "@/lib/i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  locale: LocaleCode;
  dict: Dictionary;
}

export function VehicleDetailModal({ vehicle, onClose, locale, dict }: VehicleDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [vehicle]);

  useEffect(() => {
    if (!vehicle) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  const name = vehicle.name[locale] || vehicle.name.ar;
  const tagline = vehicle.tagline[locale] || vehicle.tagline.ar;
  const description = (vehicle.description && vehicle.description[locale]) || vehicle.description?.ar || tagline;
  const whatsappUrl = getWhatsAppLink(locale, vehicle);

  const specsList = [
    { icon: Gauge, label: dict.vehicles.card.specs.engine, value: vehicle.specs.engine[locale] || vehicle.specs.engine.ar },
    { icon: Users, label: dict.vehicles.card.specs.seats, value: vehicle.specs.seats[locale] || vehicle.specs.seats.ar },
    { icon: ShieldCheck, label: dict.vehicles.card.specs.insurance, value: vehicle.specs.insurance[locale] || vehicle.specs.insurance.ar },
    ...(vehicle.specs.transmission ? [{ icon: Cog, label: dict.vehicles.card.specs.transmission, value: vehicle.specs.transmission[locale] || vehicle.specs.transmission.ar }] : []),
    ...(vehicle.specs.doors ? [{ icon: DoorOpen, label: dict.vehicles.card.specs.doors, value: vehicle.specs.doors[locale] || vehicle.specs.doors.ar }] : []),
    ...(vehicle.specs.luggage ? [{ icon: Briefcase, label: dict.vehicles.card.specs.luggage, value: vehicle.specs.luggage[locale] || vehicle.specs.luggage.ar }] : []),
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
      <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-vehicle-title"
        className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white/90 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] rounded-t-[32px] sm:rounded-[32px] p-6 sm:p-8 space-y-6 text-start animate-in fade-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={dict.vehicles.modal.close}
          className="absolute top-4 inset-inline-end-4 p-2.5 rounded-full bg-slate-100/80 hover:bg-slate-200/90 text-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-20 border border-white/60 shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-3">
          <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-inner">
            <img
              src={vehicle.images[selectedImageIndex] || vehicle.images[0]}
              alt={name}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {vehicle.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {vehicle.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 p-1 bg-[var(--color-surface-tint)] ${
                    selectedImageIndex === idx
                      ? "border-[var(--color-brand-blue)] ring-2 ring-[var(--color-brand-blue)]/20"
                      : "border-[var(--color-border)] opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`${name} thumbnail ${idx + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2 border-b border-slate-200/70 pb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold capitalize">{vehicle.category}</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/70">
              <CheckCircle2 className="w-4 h-4" />
              <span>{dict.vehicles.modal.available}</span>
            </span>
          </div>
          <h2 id="modal-vehicle-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900">{name}</h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">{tagline}</p>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal relative z-10">{description}</p>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900">{dict.vehicles.card.viewDetails}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {specsList.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100"><Icon className="w-4 h-4" /></div>
                  <div className="min-w-0">
                    <span className="block text-[11px] text-slate-500 font-medium">{spec.label}</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 truncate">{spec.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-2">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 w-full min-h-[52px] px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-base font-bold transition-all duration-300 shadow-lg shadow-blue-600/30 active:scale-[0.99] rounded-2xl">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{dict.vehicles.modal.bookVehicle}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
