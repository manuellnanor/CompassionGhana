"use client";

import { useEffect, useRef, useState } from "react";
import { Award, BookOpen, Church, Heart, MapPin, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { motion } from "motion/react";
import RoutePageShell from "./RoutePageShell";
import SectionBadge from "./SectionBadge";
import TitleReveal from "./TitleReveal";

const aboutUs1 = "/assets/about-us-1.jpg";
const aboutUs2 = "/assets/about-us-2.png";

const pillars = [
  {
    title: "Christ-centered ministry",
    description: "Every program is shaped by the dignity, hope, and care reflected in the life and teachings of Jesus Christ.",
    icon: Heart,
  },
  {
    title: "Church-driven delivery",
    description: "Local churches lead the community-level work because they know the children, families, and context best.",
    icon: Church,
  },
  {
    title: "Child-focused care",
    description: "Support is designed around each child's physical, cognitive, social-emotional, and spiritual development.",
    icon: Users,
  },
];

const stats = [
  { value: 2005, label: "Established in Ghana" },
  { value: 418, suffix: "+", label: "Church partners" },
  { value: 99, suffix: "k+", label: "Children and youth served" },
  { value: 12, suffix: "/16", label: "Regions reached" },
];

function CountUpStat({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frameId = 0;
    const duration = 1400;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));

          if (progress < 1) {
            frameId = requestAnimationFrame(animate);
          }
        };

        frameId = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <RoutePageShell>
      <section className="relative min-h-[74vh] bg-[#0038a8] text-white overflow-hidden font-sans flex items-end">
        <img
          src={aboutUs2}
          alt="Compassion Ghana team gathering"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-[#0038a8]/70 to-[#0038a8]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-40 pb-20 w-full">
          <div className="max-w-3xl space-y-6">
            <SectionBadge tone="dark" icon={<Sparkles className="w-4 h-4" />}>
              About Compassion Ghana
            </SectionBadge>
            <h1 className="font-title font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
              Releasing children from poverty through local church partnerships.
            </h1>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl">
              Compassion International Ghana partners with churches and communities to deliver holistic child development programs across Ghana, helping children grow in health, learning, faith, resilience, and opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center flex min-h-34 flex-col items-center justify-center">
                <div className="font-display text-3xl font-extrabold text-[#0038a8]">
                  <CountUpStat value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <SectionBadge>Who We Are</SectionBadge>
            <TitleReveal className="font-title font-extrabold text-3xl sm:text-4xl text-blue-950 leading-tight">
              A Ghanaian team committed to whole-life child development.
            </TitleReveal>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Compassion International Ghana (CIGH) Was Established In 2005 And Partners With Evangelical Churches, Currently Collaborating With Over 418 Church Partners Across 33 Denominations In 12 Out Of 16 Regions Of Ghana. CIGH Responds To The Needs Of Over 99,394 Children, Youth, And Their Households Living In Poverty. Our Mission Involves Facilitating Opportunities For Children And Youth To Develop Their God-Given Potential, Empowering Them Through Spiritual Nurturing, Career Development, Health, And Overall Well-Being. Our Aim Is To Reach And Transform The Lives Of 150,000 Children And Youth In Poverty-Stricken Communities By 2030.
              </p>
              <p>
                As A Member Of The Compassion International Group, Which Has Been In Existence For Over Seven Decades, Compassion International Is Recognized Globally For Its Commitment To Long-Term Holistic Child And Youth Development. Compassion International Is Regarded As The World's Leading Authority In Holistic Child Development Through Sponsorships. These Sponsorships And Donations Empower Local Churches To Provide Individualized And Holistic Care, Enabling Children In Poverty To Learn, Grow, Play, And Dream. The Head Office Of Compassion International Is Located In Colorado Springs, USA, And It Operates In 29 Countries, Including Ten In Africa. In East Africa, We Have A Presence In Rwanda, Kenya, Ethiopia, Uganda, Malawi, Zambia, And Tanzania, While In West Africa, We Operate In Burkina Faso, Ghana, And Togo.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <Heart className="w-5 h-5 text-[#00A896] mb-3" />
                <h3 className="font-display font-bold text-blue-950 text-sm">Mission</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                  Releasing children from poverty in Jesus name.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <Target className="w-5 h-5 text-[#00A896] mb-3" />
                <h3 className="font-display font-bold text-blue-950 text-sm">Vision</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                  To raise fulfilled Christian youth who are influencing their world.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:col-span-2">
                <ShieldCheck className="w-5 h-5 text-[#00A896] mb-3" />
                <h3 className="font-display font-bold text-blue-950 text-sm">Core Values</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Discernment", "Stewardship", "Integrity", "Dignity", "Excellence"].map((value) => (
                    <span key={value} className="rounded-full bg-slate-50 border border-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-xl border border-white">
              <img src={aboutUs1} alt="Compassion Ghana representative speaking" className="w-full h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 bg-[#0038a8] text-white rounded-2xl p-5 shadow-xl border border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFD100] shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Serving communities through church partners across Greater Accra, Eastern, Volta, Central, Ashanti, Western, and other regions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col items-center gap-4">
            <SectionBadge>Our Foundation</SectionBadge>
            <TitleReveal className="font-title font-extrabold text-3xl sm:text-4xl text-[#0038a8]">
              The 3Cs shape every decision.
            </TitleReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-8 hover:bg-white hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#0038a8] flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">0{index + 1}</span>
                  </div>
                  <h3 className="font-title font-extrabold text-xl text-[#0038a8]">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-20 bg-[#0038a8] text-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionBadge tone="dark">Leadership & Stewardship</SectionBadge>
            <h2 className="font-title font-extrabold text-3xl sm:text-4xl mt-4 leading-tight">
              Guided by mission, measured by faithful impact.
            </h2>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Target, title: "Strategic focus", text: "Aligned to the 2030 goal of transforming 150,000 children and youth." },
              { icon: BookOpen, title: "Program quality", text: "Care plans balance education, health, protection, mentoring, and family support." },
              { icon: Award, title: "Accountability", text: "Partnership, reporting, and stewardship practices keep resources close to mission." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl bg-white/10 border border-white/10 p-6">
                  <Icon className="w-6 h-6 text-[#FFD100]" />
                  <h3 className="mt-5 font-display font-bold text-base">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/75">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </RoutePageShell>
  );
}
