"use client";

import { Church, HeartHandshake, PlayCircle } from "lucide-react";
import RoutePageShell from "./RoutePageShell";

const denominations = [
  "Assemblies of God",
  "Church of Pentecost",
  "Presbyterian Church of Ghana",
  "Methodist Church Ghana",
  "Anglican Church of Ghana",
  "Ghana Baptist Convention",
  "Christ Apostolic Church International",
  "The Apostolic Church, Ghana",
  "Global Evangelical Church",
  "Evangelical Presbyterian Church",
  "International Central Gospel Church",
  "The Lord's Pentecostal Church International",
  "African Methodist Episcopal Zion Church",
  "Fountain Gate Chapel",
  "Salvation Army Church",
  "Divine Healers Church",
  "New Covenant Apostolic Church",
  "New Faith Baptist Church",
  "Christian Faith Church International",
  "City of Grace",
  "Eden Revival Church",
  "Evangelical Church of Ghana",
  "Full Gospel Church International",
  "Good News Bible Church",
  "Hall of Strength",
  "Redemption Hour Faith Ministries",
  "Victorious Life Chapel",
  "House of Faith",
  "Harvest Chapel International",
  "Lutheran Church of Ghana",
  "Maranatha Gospel Church",
  "Bible Baptist Church",
];

export default function ChurchPartnersPage() {
  return (
    <RoutePageShell>
      <section className="relative overflow-hidden bg-[#0038a8] pt-36 text-white sm:pt-44">
        <img
          src="/assets/about-us-2.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-32"
        />
        <div className="absolute inset-0 bg-[#0038a8]/82" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 text-center sm:px-8">
          <h1 className="font-title text-4xl font-extrabold leading-tight sm:text-6xl">
            Church Partners
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/88 sm:text-base">
            Engage your whole church in mission by partnering with Compassion.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[url('/assets/logo-header.png')] bg-center bg-no-repeat opacity-[0.025]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#0038a8]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#0038a8]">
                <HeartHandshake className="h-4 w-4" />
                Partner with us
              </div>
              <h2 className="font-title text-3xl font-extrabold leading-tight text-[#0038a8] sm:text-5xl">
                Is your church ready to move with compassion?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                When your church partners with Compassion, you join hands with local churches in some of the world's most impoverished communities. This partnership empowers local leaders to serve children and families in desperate need. By connecting your church with the life-changing work of the global Church, you help cultivate a deeper culture of love, mercy, and discipleship within your own congregation.
              </p>
            </div>
            <div className="overflow-hidden rounded-[20px] bg-slate-100 shadow-xl">
              <img
                src="/assets/about-us-2.png"
                alt="Compassion Ghana church partners gathering"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-title text-3xl font-extrabold text-[#0038a8] sm:text-4xl">
              List of Denominations
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {denominations.map((name) => (
                <div
                  key={name}
                  className="group flex min-h-16 cursor-default items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0038a8] hover:bg-[#0038a8] hover:text-white hover:shadow-[0_14px_32px_rgba(0,56,168,0.22)]"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0038a8] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#0038a8]">
                    <Church className="h-4 w-4" />
                  </span>
                  <span className="font-medium leading-6">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0038a8] py-16 text-white sm:py-20">
        <img
          src="/assets/about-us-2.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-16"
        />
        <div className="absolute inset-0 bg-[#0038a8]/88" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[20px] bg-black shadow-2xl">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/3GLu2BOrkF8"
              title="Compassion Ghana beneficiaries dance with sponsors"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#FFD100]">
              <PlayCircle className="h-4 w-4" />
              Church resources
            </div>
            <h2 className="font-title text-3xl font-extrabold leading-tight sm:text-4xl">
              Enable The Church
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/88 sm:text-base">
              We've created a series of resources to equip you in the great work you're already doing as a church. From harvest resources to inspiration on being thankful, find sermons, presentation templates and images that will encourage your congregation and grow their heart for the poor.
            </p>
          </div>
        </div>
      </section>
    </RoutePageShell>
  );
}
