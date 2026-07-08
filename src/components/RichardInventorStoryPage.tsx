"use client";

import { ArrowLeft, CalendarDays, Heart, Lightbulb, Quote, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import RoutePageShell from "./RoutePageShell";
import SectionBadge from "./SectionBadge";

const storyImages = {
  radio: "/assets/richard-inventor-radio.jpg",
  workshop: "/assets/richard-inventor-workshop.jpg",
  dump: "/assets/richard-inventor-finds-experiments-dump.jpg",
  truck: "/assets/richard-inventor-toy-dump-truck.jpg",
  smiling: "/assets/richard-inventor-smiling.jpg",
  fire: "/assets/richard-inventor-lighting-fire.jpg",
};

const sections = [
  {
    title: "A Spark of Curiosity",
    body: [
      "Richard Amenu's day often began before sunrise. While helping his family prepare for the morning, his mind kept returning to machines, sparks, motors, and how ordinary objects could be made to work in new ways.",
      "Even in a crowded home and with limited resources, Richard saw possibility. He built his first invention at age 9: a hand-held lawn mower to help his father cut grass.",
    ],
  },
  {
    title: "Building From What Others Throw Away",
    body: [
      "Richard gathered discarded parts from a nearby dump and turned them into working experiments. With help from his Compassion center director, he found the extra parts he needed to build a fully functional radio from an oil jug.",
      "His inventions grew from there: flashlights, solar-powered phone chargers, power strips, and toy vehicles made from broken electronics and found materials.",
    ],
  },
  {
    title: "Encouragement That Opens Doors",
    body: [
      "Compassion center staff recognized Richard's gift and arranged an apprenticeship with a local electrician who repairs broken appliances. That exposure helped Richard sharpen his skills and earn money repairing radios, TVs, and other electronics.",
      "Richard now hopes to study mechanical engineering and design cars or planes. Compassion is helping him attend a technical secondary school in auto mechanics.",
    ],
  },
  {
    title: "Potential With the Right Push",
    body: [
      "Richard's story shows what can happen when young people are known, encouraged, and given room to develop their God-given abilities.",
      "Surrounded by poverty, Richard still sees raw material for possibility. With mentoring and education, that can-do spirit becomes a path toward service, dignity, and innovation.",
    ],
  },
];

export default function RichardInventorStoryPage() {
  const router = useRouter();

  return (
    <RoutePageShell>
      <section className="relative min-h-[82vh] overflow-hidden bg-[#0038a8] text-white font-sans flex items-end">
        <img
          src={storyImages.radio}
          alt="Richard smiling beside a handmade radio"
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
            <SectionBadge tone="dark" icon={<Lightbulb className="w-4 h-4" />}>
              Youth Development Ghana
            </SectionBadge>
            <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Richard the Inventor
            </h1>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
              An innovative teenager shows how far a little encouragement can go when talent is recognized, mentored, and given room to grow.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-bold text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <CalendarDays className="h-4 w-4 text-[#FFD100]" />
                Youth development
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <Lightbulb className="h-4 w-4 text-[#FFD100]" />
                Skills & innovation
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <article className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-slate-700">
              Richard Amenu grew up in Tema, Ghana, with a mind full of machines. While his family faced daily pressures, Richard kept seeing possibility in discarded parts, broken appliances, and the small sparks that make engines and inventions come alive.
            </p>

            <div className="my-10 rounded-3xl bg-blue-50 p-6 sm:p-8 border border-blue-100">
              <Quote className="h-8 w-8 text-[#0038a8]" />
              <p className="mt-4 font-title text-2xl font-bold leading-snug text-blue-950">
                A little encouragement helped Richard move from tinkering with scraps to imagining a future in mechanical engineering.
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
                    src={storyImages.fire}
                    alt="Richard working in his corner workshop"
                    className="mt-8 h-auto w-full rounded-3xl object-cover shadow-lg"
                  />
                )}
                {index === 1 && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img src={storyImages.dump} alt="Richard searching for experiment parts at a dump" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.truck} alt="Richard holding his handmade toy dump truck" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                  </div>
                )}
                {index === 2 && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img src={storyImages.workshop} alt="Richard assembling electronics in his workshop" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.smiling} alt="Richard smiling" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                  </div>
                )}
              </section>
            ))}

            <div className="mt-14 rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
              <h2 className="font-title text-2xl font-extrabold text-blue-950">Why this intervention matters</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Youth development helps children discover that poverty does not define their potential. Mentoring, technical education, and encouragement can transform curiosity into skills that serve families and communities.
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
                  ["Talent", "Richard turns discarded materials into working inventions."],
                  ["Intervention", "Mentors recognized his gift and connected him to technical training."],
                  ["Outcome", "He is pursuing auto mechanics with a dream of engineering cars or planes."],
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
                Youth thrive when local mentors help them see their gifts, practice their skills, and believe their future can serve others.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </RoutePageShell>
  );
}
