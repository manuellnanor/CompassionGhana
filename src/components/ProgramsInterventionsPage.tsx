"use client";

import { HeartHandshake } from "lucide-react";
import Interventions from "./Interventions";
import RoutePageShell from "./RoutePageShell";
import SectionBadge from "./SectionBadge";

export default function ProgramsInterventionsPage() {
  const handleOpenDonateWithCause = () => {
    window.open("https://www.compassion.com/sponsor-a-child/", "_blank", "noopener,noreferrer");
  };

  return (
    <RoutePageShell>
      <section className="relative bg-[#0038a8] text-white font-sans overflow-hidden">
        <img
          src="/assets/interventions-background.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-[#0038a8]/80 to-[#0038a8]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-40 pb-20">
          <div className="max-w-3xl space-y-5">
            <SectionBadge tone="dark" icon={<HeartHandshake className="w-4 h-4" />}>
              Our Work
            </SectionBadge>
            <h1 className="font-title font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
              Programs & Interventions
            </h1>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl">
              Explore Compassion Ghana's program interventions and field stories showing how local church partners support children, youth, and families.
            </p>
          </div>
        </div>
      </section>

      <Interventions onOpenDonateWithCause={handleOpenDonateWithCause} />
    </RoutePageShell>
  );
}
