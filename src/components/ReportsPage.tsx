"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import RoutePageShell from "./RoutePageShell";

const reports = [
  {
    title: "Compassion International Ghana Annual Report",
    period: "July 2023 - June 2024",
    description:
      "A visual summary of Compassion International Ghana's ministry progress, program reach, and child-focused impact.",
    href: "/reports/compassion-ghana-annual-report-2024.pdf",
    image: "/assets/reports/compassion-ghana-annual-report-2024.png",
    accent: "bg-[#0038a8]",
  },
  {
    title: "Asempa Newsletter",
    period: "Issue 01",
    description:
      "News and updates from Compassion International Ghana for partners, churches, and supporters.",
    href: "/reports/asempa-newsletter-issue-01.pdf",
    image: "/assets/reports/asempa-newsletter-issue-01.png",
    accent: "bg-[#00A896]",
  },
  {
    title: "Impact of Climate Change on Children and Youth",
    period: "Policy Brief - August 2024",
    description:
      "A policy brief on climate change risks for children and youth and the urgent responses needed.",
    href: "/reports/impact-of-climate-change-policy-brief.pdf",
    image: "/assets/reports/impact-of-climate-change-policy-brief.png",
    accent: "bg-[#F5B700]",
  },
  {
    title: "Impact of Climate Change on Children and Youth",
    period: "Final Report - August 2024",
    description:
      "A final report exploring the role of faith in addressing climate change impacts on children and youth.",
    href: "/reports/impact-of-climate-change-final-report.pdf",
    image: "/assets/reports/impact-of-climate-change-final-report.png",
    accent: "bg-[#EF3340]",
  },
];

export default function ReportsPage() {
  return (
    <RoutePageShell>
      <section className="relative overflow-hidden bg-[#0038a8] pt-36 text-white sm:pt-44">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/hero-2.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0038a8]/80" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFD100]">
              <FileText className="h-4 w-4" />
              Reports
            </div>
            <h1 className="font-display text-4xl font-black leading-tight sm:text-6xl">
              Publications and reports
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Download current Compassion International Ghana publications, including annual reporting,
              newsletters, and research documents.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reports.map((report) => (
              <article
                key={report.href}
                className="group flex min-h-full flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <a
                  href={report.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-44 overflow-hidden bg-slate-100"
                  aria-label={`Open ${report.title}`}
                >
                  <img
                    src={report.image}
                    alt={`${report.title} cover`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute left-0 top-0 h-1.5 w-full ${report.accent}`} />
                </a>

                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#0038a8]">
                    {report.period}
                  </p>
                  <h2 className="mt-2 font-display text-base font-black leading-snug text-slate-950">
                    {report.title}
                  </h2>
                  <p className="mt-2 flex-1 text-xs leading-5 text-slate-600">
                    {report.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={report.href}
                      download
                      className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full bg-[#0038a8] px-3 py-2 text-xs font-extrabold text-white transition hover:bg-[#002d86]"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                    <a
                      href={report.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#0038a8] transition hover:border-[#0038a8] hover:bg-[#0038a8] hover:text-white"
                      aria-label={`Open ${report.title} in a new tab`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </RoutePageShell>
  );
}
