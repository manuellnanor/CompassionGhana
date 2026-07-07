"use client";

import { ArrowLeft, CalendarDays, Heart, Package, Quote, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import RoutePageShell from "./RoutePageShell";
import SectionBadge from "./SectionBadge";

const storyImages = {
  header: "/assets/difficult-decisions-header.jpg",
  delivery: "/assets/difficult-decisions-delivery.jpg",
};

const sections = [
  {
    title: "Paying More for Less Food",
    body: [
      "Families across Ghana have felt the strain of rising food prices. For many parents, the question is no longer what they would like to provide, but what they can afford before the next day arrives.",
      "When food costs climb, children feel the impact quickly. Meals become smaller, choices narrow, and caregivers are forced into difficult decisions that no family should have to make.",
    ],
  },
  {
    title: "The Hope of Better Days to Come",
    body: [
      "Through local church partners and Compassion center staff, emergency food packs help vulnerable families meet immediate needs while staying connected to long-term support.",
      "The food baskets bring practical relief, but they also carry a message: families are not facing these pressures alone. Local caregivers, sponsors, and church partners are standing with them.",
    ],
  },
  {
    title: "Support That Reaches the Household",
    body: [
      "For children like Raphael, food support means more than a full plate. It helps keep attention on school, friendship, faith, and the ordinary rhythms of childhood.",
      "For parents and caregivers, it creates breathing room in a season when every purchase matters. That relief can help protect a household from deeper instability.",
    ],
  },
];

export default function DifficultDecisionsStoryPage() {
  const router = useRouter();

  return (
    <RoutePageShell>
      <section className="relative min-h-[82vh] overflow-hidden bg-[#0038a8] text-white font-sans flex items-end">
        <img
          src={storyImages.header}
          alt="Mother and child standing together in Ghana"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0038a8]/70 to-[#0038a8]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-40 pb-20">
          <button
            type="button"
            onClick={() => router.push("/#interventions")}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to interventions
          </button>
          <div className="max-w-4xl space-y-6">
            <SectionBadge tone="dark" icon={<Package className="w-4 h-4" />}>
              Ghana Emergency Food Packs
            </SectionBadge>
            <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Difficult Decisions: Is There Enough For Everyone?
            </h1>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
              As food prices rise, local Compassion staff and church partners provide food baskets to help vulnerable families meet urgent needs.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-bold text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <CalendarDays className="h-4 w-4 text-[#FFD100]" />
                December 29, 2022
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <Package className="h-4 w-4 text-[#FFD100]" />
                Emergency food support
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <article className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-slate-700">
              Director Godwin and his team at a Compassion center in Ghana work with families who are facing the pressure of rising food costs. Their response is practical and immediate: food baskets that help parents feed their children through difficult days.
            </p>

            <div className="my-10 rounded-3xl bg-blue-50 p-6 sm:p-8 border border-blue-100">
              <Quote className="h-8 w-8 text-[#0038a8]" />
              <p className="mt-4 font-title text-2xl font-bold leading-snug text-blue-950">
                When prices rise and income stays the same, food support can be the difference between anxiety and relief.
              </p>
            </div>

            {sections.map((section, index) => (
              <section key={section.title} className="mt-12">
                <h2 className="font-title text-3xl font-extrabold text-blue-950">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm sm:text-base leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {index === 0 && (
                  <img
                    src={storyImages.delivery}
                    alt="Food basket being delivered to a mother and child"
                    className="mt-8 h-auto w-full rounded-3xl object-cover shadow-lg"
                  />
                )}
              </section>
            ))}

            <div className="mt-14 rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
              <h2 className="font-title text-2xl font-extrabold text-blue-950">Why this intervention matters</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Emergency food support protects children during seasons of economic pressure. It helps families keep moving while local church partners continue the deeper work of care, mentoring, and long-term development.
              </p>
              <button
                type="button"
                onClick={() => window.open("https://www.compassion.com/sponsor-a-child/", "_blank", "noopener,noreferrer")}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#00A896] px-6 py-3 font-display text-sm font-bold text-white shadow-md shadow-teal-100 transition-colors hover:bg-[#02C39A]"
              >
                Sponsor a Child
                <Heart className="h-4 w-4 fill-current" />
              </button>
            </div>
          </article>

          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <SectionBadge>Story Focus</SectionBadge>
              <div className="mt-5 space-y-4">
                {[
                  ["Need", "Families are paying more for less food."],
                  ["Intervention", "Emergency food packs delivered through local partners."],
                  ["Outcome", "Children and caregivers receive immediate household relief."],
                ].map(([title, text]) => (
                  <div key={title} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                    <h2 className="font-display text-sm font-extrabold text-blue-950">{title}</h2>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-[#0038a8] p-6 text-white">
              <Users className="h-7 w-7 text-[#FFD100]" />
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Food support is delivered through trusted local relationships, keeping relief close to children and families.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </RoutePageShell>
  );
}
