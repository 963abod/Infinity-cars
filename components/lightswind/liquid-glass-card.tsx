import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "aurora" | "default";
  glow?: boolean;
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export default function LiquidGlassCard({
  variant = "aurora",
  glow = false,
  hoverEffect = false,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl transition-all duration-500
        ${glow ? "shadow-[0_0_40px_-10px_rgba(56,189,248,0.25)]" : "shadow-xl"}
        ${hoverEffect ? "hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_0_50px_-5px_rgba(56,189,248,0.35)]" : ""}
        ${className}
      `}
      {...props}
    >
      {/* Aurora Ambient Glow Layer */}
      {variant === "aurora" && (
        <div className="pointer-events-none absolute -inset-px -z-10 overflow-hidden rounded-3xl opacity-60">
          <div className="absolute -top-24 -left-20 h-56 w-56 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute top-1/2 -right-20 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        </div>
      )}

      {children}
    </div>
  );
}

export function LiquidGlassCardHeader({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pb-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function LiquidGlassCardTitle({ className = "", children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-xl font-bold tracking-tight text-white ${className}`}>
      {children}
    </h3>
  );
}

export function LiquidGlassCardDescription({ className = "", children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-neutral-400 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function LiquidGlassCardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function LiquidGlassCardFooter({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}
