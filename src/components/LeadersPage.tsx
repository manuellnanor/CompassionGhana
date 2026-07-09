"use client";

import RoutePageShell from "./RoutePageShell";

type Leader = {
  name: string;
  title: string;
  image: string;
  imageClass?: string;
};

const management: Leader[] = [
  {
    name: "Kobina Yeboah Okyere",
    title: "National Director",
    image: "/assets/leaders/kobina-yeboah-okyere-management.png",
  },
  {
    name: "Edward Kwesi Nyamekye",
    title: "Senior Manager of Partnership",
    image: "/assets/leaders/edward-kwesi-nyamekye.png",
  },
  {
    name: "Leticia Boafo",
    title: "Senior Manager of Business Support",
    image: "/assets/leaders/leticia-boafo.png",
  },
  {
    name: "Florence Sena Amponsah",
    title: "Senior Manager of Program Support",
    image: "/assets/leaders/florence-sena-amponsah.png",
  },
  {
    name: "Adoma Appiah",
    title: "Senior People and Culture Strategic Partner",
    image: "/assets/leaders/adoma-appiah.png",
  },
];

const council: Leader[] = [
  {
    name: "Rev. Philip Kofi Tutu",
    title: "Chairman",
    image: "/assets/leaders/rev-philip-kofi-tutu.png",
  },
  {
    name: "Madam Peggy Donkor",
    title: "Director",
    image: "/assets/leaders/madam-peggy-donkor.png",
  },
  {
    name: "Dr. Isaac Agyapong",
    title: "Director",
    image: "/assets/leaders/dr-isaac-agyapong.png",
  },
  {
    name: "Madam Afia Darkwah",
    title: "Director",
    image: "/assets/leaders/madam-afia-darkwah.png",
  },
  {
    name: "Mr. Isaac Brown ESQ",
    title: "Director",
    image: "/assets/leaders/mr-isaac-brown.png",
  },
  {
    name: "Dr. John Laba",
    title: "Director",
    image: "/assets/leaders/dr-john-laba.png",
  },
  {
    name: "Mr. Palamanga Ouali",
    title: "Director",
    image: "/assets/leaders/mr-palamanga-ouali.png",
  },
  {
    name: "Dr. Alexander Amankwaa",
    title: "Company Secretary",
    image: "/assets/leaders/dr-alexander-amankwaa.png",
  },
  {
    name: "Mr. Kobina Yeboah Okyere",
    title: "National Director",
    image: "/assets/leaders/kobina-yeboah-okyere-council.png",
  },
];

function LeaderCard({ leader, variant = "light" }: { leader: Leader; variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <article className="group overflow-hidden rounded-[20px] bg-white shadow-[0_14px_40px_rgba(0,30,90,0.18)] ring-1 ring-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,30,90,0.24)]">
      <div className={`relative aspect-[4/5] overflow-hidden ${isDark ? "bg-white/95" : "bg-slate-100"}`}>
        <img
          src={leader.image}
          alt={leader.name}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] ${leader.imageClass ?? ""}`}
        />
      </div>
      <div className="bg-[#0038a8] px-4 py-4 text-center text-white transition duration-300 group-hover:bg-white">
        <h3 className="font-display text-sm font-black leading-tight transition duration-300 group-hover:text-[#0038a8] sm:text-base">
          {leader.name}
        </h3>
        <p className="mt-1 text-xs leading-5 text-white/70 transition duration-300 group-hover:text-[#0038a8]/75 sm:text-sm">
          {leader.title}
        </p>
      </div>
    </article>
  );
}

export default function LeadersPage() {
  return (
    <RoutePageShell>
      <section className="relative overflow-hidden bg-[#0038a8] pt-36 text-white sm:pt-44">
        <img
          src="/assets/about-us-2.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#0038a8]/78" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 text-center sm:px-8">
          <h1 className="font-title text-4xl font-extrabold leading-tight sm:text-6xl">
            Compassion Ghana Leadership
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/88 sm:text-base">
            Together, let's empower and transform the lives of 150,000 children and youth,
            unlocking their God-given potential for a brighter future.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[url('/assets/logo-header.png')] bg-center bg-no-repeat opacity-[0.025]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="mb-10 text-center font-title text-3xl font-extrabold text-[#0038a8]">
            Management
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {management.slice(0, 4).map((leader) => (
              <LeaderCard key={leader.name} leader={leader} />
            ))}
          </div>
          <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {management.slice(4).map((leader) => (
              <LeaderCard key={leader.name} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0038a8] py-16 text-white sm:py-20">
        <img
          src="/assets/about-us-2.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-12"
        />
        <div className="absolute inset-0 bg-[#0038a8]/92" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="mb-10 text-center font-title text-3xl font-extrabold">
            Governing Council Members
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {council.map((leader) => (
              <LeaderCard key={leader.name} leader={leader} variant="dark" />
            ))}
          </div>
        </div>
      </section>
    </RoutePageShell>
  );
}
