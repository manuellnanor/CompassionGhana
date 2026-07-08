"use client";

import { ArrowLeft, CalendarDays, Heart, Mail, Quote, Route, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import RoutePageShell from "./RoutePageShell";
import SectionBadge from "./SectionBadge";

const storyImages = {
  checking: "/assets/letters-delivered-checking.jpg",
  children: "/assets/letters-delivered-children.jpg",
  motorbike: "/assets/letters-delivered-motorbike.jpg",
  boatCrossing: "/assets/letters-delivered-boat-crossing.jpg",
  boatArrival: "/assets/letters-delivered-boat-arrival.jpg",
  office: "/assets/letters-delivered-office.jpg",
  riverMotorbike: "/assets/letters-delivered-river-motorbike.jpg",
  sortingRoom: "/assets/letters-delivered-sorting-room.jpg",
  celebration: "/assets/letters-delivered-celebration.jpg",
};

const sections = [
  {
    title: "Letter Arrival",
    body: [
      "When sponsor letters arrive at the Compassion Ghana national office, staff review them carefully. Letters are checked to protect both sponsor and child, and questions are highlighted so children and center workers can respond well.",
      "In Ghana, letters do not usually need translation because English is the official language, but they still move through quality checks, sorting, and careful documentation before leaving the office.",
    ],
  },
  {
    title: "Letter Leaving",
    body: [
      "Letters are printed, sorted by development center, grouped into clusters, packaged, protected, and sealed. Each cluster has a collation center and a collation officer who logs the movement of correspondence.",
      "A courier carries the packages to collation points, where representatives from individual development centers begin their own journeys to collect them.",
    ],
  },
  {
    title: "Letter Journey",
    body: [
      "For Lorlor, the journey is not quick. She travels by motorbike, crosses the River Volta by boat, and then continues by motorbike to reach the collation center at Adidome.",
      "After checking the records and receiving the packages, she repeats the journey back to Dove, carrying letters that children are eagerly waiting to read.",
    ],
  },
  {
    title: "Letter Delivery",
    body: [
      "Back at the center, the letters are logged again. Copies are placed in children's folders, and the originals are handed to children so they can take them home and treasure them.",
      "For children like Godwin, letter day is deeply meaningful. Sponsor letters remind children that someone knows their name, prays for them, and cares about their life.",
    ],
  },
];

export default function LettersDeliveredStoryPage() {
  const router = useRouter();

  return (
    <RoutePageShell>
      <section className="relative min-h-[82vh] overflow-hidden bg-[#0038a8] text-white font-sans flex items-end">
        <img
          src={storyImages.children}
          alt="Children gathered as a Compassion letter is delivered"
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
            <SectionBadge tone="dark" icon={<Mail className="w-4 h-4" />}>
              Compassion Letter Club
            </SectionBadge>
            <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              How Are Your Compassion Letters Delivered?
            </h1>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
              Follow the journey of sponsor letters in Ghana, from careful office checks to roads, river crossings, and the hands of waiting children.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-bold text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <CalendarDays className="h-4 w-4 text-[#FFD100]" />
                Sponsor correspondence
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <Route className="h-4 w-4 text-[#FFD100]" />
                Ghana letter journey
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <article className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-slate-700">
              A sponsor can send a message online in minutes, but many children still receive letters on paper. In Ghana, those letters are handled with care by staff and volunteers who know how much encouragement they carry.
            </p>

            <div className="my-10 rounded-3xl bg-blue-50 p-6 sm:p-8 border border-blue-100">
              <Quote className="h-8 w-8 text-[#0038a8]" />
              <p className="mt-4 font-title text-2xl font-bold leading-snug text-blue-950">
                For a child in a small community, a sponsor letter says: someone far away remembers me.
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
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img src={storyImages.office} alt="Staff sorting sponsor letters in an office" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.checking} alt="Staff checking and logging letters" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                  </div>
                )}
                {index === 1 && (
                  <img
                    src={storyImages.sortingRoom}
                    alt="Letters being sorted in a collation room"
                    className="mt-8 h-auto w-full rounded-3xl object-cover shadow-lg"
                  />
                )}
                {index === 2 && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img src={storyImages.motorbike} alt="Letter carrier meeting a motorbike rider" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.boatCrossing} alt="Letter carrier crossing a river by boat" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.boatArrival} alt="Letter carrier stepping from a boat" className="h-72 w-full rounded-3xl object-cover shadow-lg sm:col-span-2" />
                    <img src={storyImages.riverMotorbike} alt="Letter carrier preparing to continue by motorbike near the river" className="h-72 w-full rounded-3xl object-cover shadow-lg sm:col-span-2" />
                  </div>
                )}
                {index === 3 && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img src={storyImages.children} alt="A child receiving a sponsor letter" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.celebration} alt="Student celebrating after receiving a letter" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                  </div>
                )}
              </section>
            ))}

            <div className="mt-14 rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
              <h2 className="font-title text-2xl font-extrabold text-blue-950">Why this intervention matters</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Sponsor letters strengthen the relationship at the heart of child sponsorship. Staff go to great lengths because encouragement, prayer, and personal connection can be life-changing for a child.
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
                  ["Connection", "Letters help children feel known, remembered, and encouraged."],
                  ["Intervention", "Staff check, sort, transport, log, and deliver each letter with care."],
                  ["Outcome", "Children receive personal encouragement they can keep and treasure."],
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
                Correspondence is part of holistic care because children need encouragement, belonging, and trusted relationships as they grow.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </RoutePageShell>
  );
}
