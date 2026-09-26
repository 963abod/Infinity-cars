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

export function VehicleDetailModal({
  vehicle,
  onClose,
  locale,
  dict,
}: VehicleDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Reset selected image index when vehicle changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [vehicle]);

  // Handle ESC key press and body overflow lock
  useEffect(() => {
    if (!vehicle) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
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
  const description =
    (vehicle.description && vehicle.description[locale]) ||
    vehicle.description?.ar ||
    tagline;
  const whatsappUrl = getWhatsAppLink(locale, vehicle);

  const specsList = [
    {
      icon: Gauge,
      label: dict.vehicles.card.specs.engine,
      value: vehicle.specs.engine[locale] || vehicle.specs.engine.ar,
    },
    {
      icon: Users,
      label: dict.vehicles.card.specs.seats,
      value: vehicle.specs.seats[locale] || vehicle.specs.seats.ar,
    },
    {
      icon: ShieldCheck,
      label: dict.vehicles.card.specs.insurance,
      value: vehicle.specs.insurance[locale] || vehicle.specs.insurance.ar,
    },
    ...(vehicle.specs.transmission
      ? [
          {
            icon: Cog,
            label: dict.vehicles.card.specs.transmission,
            value:
              vehicle.specs.transmission[locale] ||
              vehicle.specs.transmission.ar,
          },
        ]
      : []),
    ...(vehicle.specs.doors
      ? [
          {
            icon: DoorOpen,
            label: dict.vehicles.card.specs.doors,
            value: vehicle.specs.doors[locale] || vehicle.specs.doors.ar,
          },
        ]
      : []),
    ...(vehicle.specs.luggage
      ? [
          {
            icon: Briefcase,
            label: dict.vehicles.card.specs.luggage,
            value: vehicle.specs.luggage[locale] || vehicle.specs.luggage.ar,
          },
        ]
      : []),
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-vehicle-title"
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--color-surface)] rounded-t-[28px] sm:rounded-[28px] border border-[var(--color-border)] shadow-lg p-6 sm:p-8 space-y-6 text-start animate-in fade-in slide-in-from-bottom-6 sm:zoom-in-95 duration-250"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={dict.vehicles.modal.close}
          className="absolute top-4 inset-inline-end-4 p-2.5 rounded-full bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Gallery Section */}
        <div className="space-y-3">
          {/* Main Image Display */}
          <div className="relative w-full h-[220px] sm:h-[320px] rounded-2xl bg-radial from-[var(--color-surface-tint)] to-[var(--color-surface)] p-6 flex items-center justify-center overflow-hidden border border-[var(--color-border)]">
            <img
              src={vehicle.images[selectedImageIndex] || vehicle.images[0]}
              alt={name}
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>

          {/* Gallery Thumbnails */}
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
                  <img
                    src={img}
                    alt={`${name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Header Info */}
        <div className="space-y-2 border-b border-[var(--color-border)] pb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3.5 py-1 rounded-full bg-[var(--color-surface-tint)] text-[var(--color-brand-navy)] text-xs font-semibold capitalize">
              {vehicle.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>{dict.vehicles.modal.available}</span>
            </span>
          </div>

          <h2
            id="modal-vehicle-title"
            className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]"
          >
            {name}
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-medium">
            {tagline}
          </p>
        </div>

        {/* Description Paragraph */}
        <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-normal">
          {description}
        </p>

        {/* Specs Grid */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-[var(--color-text-primary)]">
            {dict.vehicles.card.viewDetails}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {specsList.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-surface-tint)] flex items-center justify-center text-[var(--color-brand-navy)] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] text-[var(--color-text-secondary)] font-medium">
                      {spec.label}
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-[var(--color-text-primary)] truncate">
                      {spec.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Modal CTA */}
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full min-h-[52px] px-6 py-3.5 rounded-xl bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-blue)] text-white text-base font-semibold transition-colors duration-200 shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{dict.vehicles.modal.bookVehicle}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
