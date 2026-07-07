"use client";

import { ArrowLeft, CalendarDays, Heart, Quote, ShieldCheck, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import RoutePageShell from "./RoutePageShell";
import SectionBadge from "./SectionBadge";

const storyImages = {
  header: "/assets/human-trafficking-header.jpg",
  gold: "/assets/human-trafficking-gold.jpg",
  labor: "/assets/human-trafficking-labor.jpg",
  child: "/assets/human-trafficking-child.jpg",
  stone: "/assets/human-trafficking-stone.jpg",
  family: "/assets/human-trafficking-family.jpg",
  path: "/assets/human-trafficking-path.jpg",
};

const sections = [
  {
    title: "What Human Trafficking Means",
    body: [
      "Human trafficking happens when a person is deceived, forced, or coerced into labor, domestic servitude, or sexual exploitation. Children and families living in poverty are especially vulnerable because desperation can make false promises sound like a way out.",
      "The harm is physical, emotional, and spiritual. Children can lose school time, safety, health, trust, and the freedom to grow in the way every child deserves.",
    ],
  },
  {
    title: "Why Children Are at Risk",
    body: [
      "Children account for a significant share of trafficking victims worldwide. Poverty, weak protection systems, lack of education, conflict, and cultural pressures can all increase a child's exposure to exploitation.",
      "Traffickers often target young people with promises of work, income, training, or opportunity. When families are under pressure, those offers can be difficult to question until danger is already near.",
    ],
  },
  {
    title: "How Compassion Responds",
    body: [
      "Compassion works through local churches to surround children with adults who know, love, and protect them. Staff and volunteers are trained to identify signs of abuse, exploitation, and trafficking, and to act when a child is at risk.",
      "Support includes right-now needs like food, health care, education, and counseling. Meeting those needs reduces the pressure that can push families toward unsafe decisions and helps children recover when harm has already occurred.",
    ],
  },
  {
    title: "Marali's Story of Rescue",
    body: [
      "Marali left school hoping to earn money for his family, but a promised job became exploitation far from home. He was taken deep into a forest and forced to dig for gold under dangerous conditions.",
      "A tutor from his Compassion center noticed he was missing, stayed in contact with him, and helped alert local leaders and police. After weeks of fear and exhaustion, Marali was found, returned home, and connected with medical care and support.",
    ],
  },
];

export default function HumanTraffickingStoryPage() {
  const router = useRouter();

  return (
    <RoutePageShell>
      <section className="relative min-h-[82vh] overflow-hidden bg-[#0038a8] text-white font-sans flex items-end">
        <img
          src={storyImages.header}
          alt="Young person standing in silhouette"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#0038a8]/70 to-[#0038a8]" />
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
            <SectionBadge tone="dark" icon={<ShieldCheck className="w-4 h-4" />}>
              Poverty & Human Rights
            </SectionBadge>
            <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              What Is Human Trafficking?
            </h1>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
              Every country is affected by human trafficking, and children are among the most vulnerable. Protection begins with awareness, prevention, and trusted local care.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-bold text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <CalendarDays className="h-4 w-4 text-[#FFD100]" />
                May 29, 2025
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <ShieldCheck className="h-4 w-4 text-[#FFD100]" />
                Child protection
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <article className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-slate-700">
              Human trafficking is a global injustice that exploits vulnerability for profit. For children living in poverty, the risk grows when basic needs are unmet and unsafe offers appear to promise relief.
            </p>

            <div className="my-10 rounded-3xl bg-blue-50 p-6 sm:p-8 border border-blue-100">
              <Quote className="h-8 w-8 text-[#0038a8]" />
              <p className="mt-4 font-title text-2xl font-bold leading-snug text-blue-950">
                Child protection is not only rescue after harm. It is prevention, trusted relationships, and care that helps children know their value.
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
                    <img src={storyImages.child} alt="Child holding a toy outdoors" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.family} alt="Caregiver walking with a child near a home" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                  </div>
                )}
                {index === 1 && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <img src={storyImages.labor} alt="Young person lifting material outdoors" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.stone} alt="Young person holding a large stone" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                  </div>
                )}
                {index === 3 && (
                  <div className="mt-8 space-y-5">
                    <img src={storyImages.gold} alt="Hands holding gold-colored stones" className="h-auto w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.path} alt="Young person walking along a green path" className="h-auto w-full rounded-3xl object-cover shadow-lg" />
                  </div>
                )}
              </section>
            ))}

            <div className="mt-14 rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
              <h2 className="font-title text-2xl font-extrabold text-blue-950">Why this intervention matters</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Child sponsorship helps reduce trafficking risk by surrounding children with trained adults, meeting urgent needs, strengthening families, and creating safe spaces where children are known and protected.
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
                  ["Risk", "Poverty can make children vulnerable to false promises and exploitation."],
                  ["Intervention", "Local church partners identify risk, meet needs, and protect children."],
                  ["Outcome", "Children receive care, recovery support, and trusted adults who act quickly."],
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
                Children are safer when trained staff, local churches, families, and communities work together to recognize danger and respond quickly.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </RoutePageShell>
  );
}
