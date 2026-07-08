"use client";

import { ArrowLeft, CalendarDays, Heart, Image as ImageIcon, Mail, Quote, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import RoutePageShell from "./RoutePageShell";
import SectionBadge from "./SectionBadge";

const storyImages = {
  header: "/assets/letter-writing-tips-unexpected-gift.jpeg",
  childPhotos: "/assets/letter-writing-tips-child-photos.jpeg",
  smilingLetter: "/assets/letter-writing-tips-smiling-letter.jpeg",
};

const sections = [
  {
    title: "Start with what children can see",
    body: [
      "Sponsors often recommend sending photos, drawings, postcards, or simple visual prompts. A picture of family, nature, pets, local food, or a place you visited can help a child imagine your world and respond with their own story.",
      "Some sponsors turn letter writing into an exchange by tracing hands, sharing children's artwork back to them, or asking children to draw something from their daily life.",
    ],
  },
  {
    title: "Write simply and consistently",
    body: [
      "The best letters do not need to be long or complicated. A few sentences of care, prayer, encouragement, and interest can still tell a child that they are remembered.",
      "Many sponsors use reminders, monthly routines, or the Compassion app to keep writing. Several sponsors said they write before receiving a reply because steady encouragement matters.",
    ],
  },
  {
    title: "Ask questions that invite connection",
    body: [
      "Good questions help children share more than basic updates. Sponsors ask about dreams, hobbies, school, favorite foods, Bible stories, family celebrations, and what God is teaching them.",
      "These questions can become a conversation over time, especially when sponsors also share their own answers honestly and age-appropriately.",
    ],
  },
  {
    title: "Anchor letters in faith and encouragement",
    body: [
      "Sponsors frequently include Scripture, short prayers, reminders of God's love, and words that affirm a child's dignity and purpose.",
      "The article's strongest theme is simple: sponsored children need to know they are loved, prayed for, and not forgotten.",
    ],
  },
];

export default function LetterWritingTipsStoryPage() {
  const router = useRouter();

  return (
    <RoutePageShell>
      <section className="relative min-h-[82vh] overflow-hidden bg-[#0038a8] text-white font-sans flex items-end">
        <img
          src={storyImages.header}
          alt="Child holding a sponsor photo frame"
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
              Sponsor Correspondence
            </SectionBadge>
            <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Sponsors Share Their Best Letter Writing Tips
            </h1>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/90">
              Practical ideas from sponsors on writing letters that encourage, connect, and remind children they are deeply valued.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-bold text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <CalendarDays className="h-4 w-4 text-[#FFD100]" />
                Letter writing tips
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <ImageIcon className="h-4 w-4 text-[#FFD100]" />
                Photos, prayers, and encouragement
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <article className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-slate-700">
              Sponsor letters are one of the simplest ways to strengthen a child's sense of connection. The best ideas often come from sponsors who have learned how to write with warmth, consistency, and care.
            </p>

            <div className="my-10 rounded-3xl bg-blue-50 p-6 sm:p-8 border border-blue-100">
              <Quote className="h-8 w-8 text-[#0038a8]" />
              <p className="mt-4 font-title text-2xl font-bold leading-snug text-blue-950">
                "I want to thank my sponsor for having not forgotten me. I love her and her letters."
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                Fortune, age 6, Togo
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
                    <img src={storyImages.childPhotos} alt="Child holding printed sponsor photos" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                    <img src={storyImages.smilingLetter} alt="Smiling child holding sponsor letters" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
                  </div>
                )}
                {index === 2 && (
                  <img
                    src={storyImages.header}
                    alt="Child holding a framed sponsor photo"
                    className="mt-8 h-auto w-full rounded-3xl object-cover shadow-lg"
                  />
                )}
              </section>
            ))}

            <div className="mt-14 rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
              <h2 className="font-title text-2xl font-extrabold text-blue-950">Why this intervention matters</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Letter writing supports the relationship side of sponsorship. Encouraging words, prayers, questions, and photos help children feel known and give sponsors a practical way to participate in holistic care.
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
                  ["Connection", "Letters remind children that someone knows, prays for, and remembers them."],
                  ["Intervention", "Sponsors use words, photos, questions, Scripture, and consistency to encourage children."],
                  ["Outcome", "Children receive personal affirmation that can strengthen hope and belonging."],
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
                Sponsorship is not only financial support. Personal encouragement helps children grow with confidence, faith, and a sense of belonging.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </RoutePageShell>
  );
}
