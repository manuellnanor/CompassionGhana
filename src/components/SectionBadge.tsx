import type { ReactNode } from "react";

interface SectionBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionBadge({
  children,
  icon,
  tone = "light",
  className = "",
}: SectionBadgeProps) {
  const toneClass =
    tone === "dark"
      ? "bg-white/10 border-white/20 text-[#FFD100]"
      : "bg-[#0038a8]/5 border-[#0038a8]/15 text-[#0038a8]";

  return (
    <span
      className={`relative z-10 inline-flex max-w-full shrink-0 items-center justify-center gap-2 rounded-full border px-4 py-2 text-center text-xs font-bold uppercase leading-none tracking-widest backdrop-blur-md ${toneClass} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
