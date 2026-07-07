"use client";

import { ArrowLeft, CalendarDays, Heart, Quote, Store, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import RoutePageShell from "./RoutePageShell";
import SectionBadge from "./SectionBadge";

const storyImages = {
  header: "/assets/sponsor-gift-story-header.jpg",
  carpentry: "/assets/sponsor-gift-carpentry.jpg",
  shelves: "/assets/sponsor-gift-store-shelves.jpg",
  familyStore: "/assets/sponsor-gift-family-store.jpg",
};

const sections = [
  {
    id: "survival",
    title: "Simply Survival",
    body: [
      "Joseph's carpentry work had become unpredictable, and every quiet week made it harder for the family to keep up with daily needs. When customers had no money to build or repair, his own household felt the pressure immediately.",
      "The family kept going with resilience, but their margin was thin. Food, school needs, health care, and the arrival of a new baby all competed for the same limited income.",
    ],
  },
  {
    id: "gift",
    title: "The Gift That Changed Everything",
    body: [
      "A financial gift from sponsors gave the family room to breathe and a practical way forward. Together with Compassion staff, Joseph planned how to use the money in a way that would support the family beyond a single month.",
      "Part of the gift helped provide care for the household. The rest became seed capital for a small grocery storefront near a school, where snacks and household basics could create a steady income stream.",
    ],
  },
  {
    id: "future",
    title: "A Family Rebuilding With Hope",
    body: [
      "The store became more than a business. It gave Joseph and his wife a dependable source of income, helped them care for their children, and restored confidence after a difficult season.",
      "For the children, the change meant greater stability at home and renewed opportunity for school, health, and growth. A single act of generosity became a pathway toward dignity and resilience.",
    ],
  },
];

export default function InterventionStoryPage() {
  const router = useRouter();

  return (
    <RoutePageShell>
      <section className="relative min-h-[82vh] overflow-hidden bg-[#0038a8] text-white font-sans flex items-end">
        <img
          src={storyImages.header}
          alt="Young girl standing in a family grocery store in Ghana"
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
            <SectionBadge tone="dark" icon={<Heart className="w-4 h-4 fill-current" />}>
              Intervention Story
            </SectionBadge>
            <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              A Sponsor's Gift Changed This Family's Life
            </h1>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
              As Joseph's carpentry work slowed and health needs weighed on the family, a sponsor's gift helped them build a new source of stability.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-bold text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <CalendarDays className="h-4 w-4 text-[#FFD100]" />
                July 1, 2025
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <Store className="h-4 w-4 text-[#FFD100]" />
                Family resilience
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <article className="lg:col-span-8">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-slate-700">
                In a fishing community in Ghana, Joseph worked hard to provide for his wife and children. But carpentry income rose and fell with the fortunes of his customers, and when families in the area could not afford repairs or new work, Joseph's own household had to stretch every cedi.
              </p>
            </div>

            <div className="my-10 rounded-3xl bg-blue-50 p-6 sm:p-8 border border-blue-100">
              <Quote className="h-8 w-8 text-[#0038a8]" />
              <p className="mt-4 font-title text-2xl font-bold leading-snug text-blue-950">
                A thoughtful gift became more than temporary help. It became a way for one family to move from pressure toward possibility.
              </p>
            </div>

            {sections.map((section, index) => (
              <section key={section.id} className="mt-12">
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
                    src={storyImages.carpentry}
                    alt="Joseph working with carpentry tools"
                    className="mt-8 h-auto w-full rounded-3xl object-cover shadow-lg"
                  />
                )}
                {index === 1 && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img
                      src={storyImages.shelves}
                      alt="Shelves stocked with grocery goods"
                      className="h-72 w-full rounded-3xl object-cover shadow-lg"
                    />
                    <img
                      src={storyImages.familyStore}
                      alt="Family standing in front of their store"
                      className="h-72 w-full rounded-3xl object-cover shadow-lg"
                    />
                  </div>
                )}
              </section>
            ))}

            <div className="mt-14 rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
              <h2 className="font-title text-2xl font-extrabold text-blue-950">Why this story matters</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Child sponsorship is not only a monthly transaction. When sponsors, church partners, and local staff work together, support can reach the exact pressure points that keep families from moving forward.
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
                  ["Family", "A household facing unstable income and urgent needs."],
                  ["Intervention", "Sponsor generosity paired with local Compassion guidance."],
                  ["Outcome", "A small store that helped rebuild daily stability."],
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
                Compassion's local church partnerships help connect sponsor support to practical care plans that fit each family's context.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </RoutePageShell>
  );
}
