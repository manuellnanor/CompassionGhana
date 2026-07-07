"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Clock, HeartHandshake, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import RoutePageShell from "./RoutePageShell";
import SectionBadge from "./SectionBadge";
import TitleReveal from "./TitleReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <RoutePageShell>
      <section className="relative bg-[#0038a8] text-white font-sans overflow-hidden">
        <img
          src="/assets/hero-3.webp"
          alt="Compassion Ghana community"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0038a8]/70 to-[#0038a8]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-40 pb-20">
          <div className="max-w-3xl space-y-5">
            <SectionBadge tone="dark" icon={<MessageCircle className="w-4 h-4" />}>
              Contact Us
            </SectionBadge>
            <h1 className="font-title font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
              Let us connect you with the right Compassion Ghana team.
            </h1>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl">
              Reach out about sponsorship, donations, church partnerships, media requests, or program information. We will route your message to the appropriate team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
              <SectionBadge>Office Details</SectionBadge>
              <TitleReveal className="font-title font-extrabold text-3xl text-blue-950 mt-3 leading-tight">
                Compassion International Ghana
              </TitleReveal>
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: MapPin,
                    title: "Office address",
                    text: "1st & 2nd Floors, Seed House, 33 Westland Boulevard, Madina - New Road, Accra, Ghana.",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    text: "+233 20 264 2506 / 7",
                    href: "tel:+233202642506",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    text: "info.compassionghana@gh.ci.org",
                    href: "mailto:info.compassionghana@gh.ci.org",
                  },
                  {
                    icon: Clock,
                    title: "Office hours",
                    text: "Monday to Friday, 8:30 AM - 5:00 PM GMT",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <p className="font-display font-bold text-sm text-blue-950">{item.title}</p>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.text}</p>
                    </>
                  );

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0038a8] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      {item.href ? (
                        <a href={item.href} className="group hover:text-[#0038a8]">
                          {content}
                        </a>
                      ) : (
                        <div>{content}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl bg-[#0038a8] text-white p-8 overflow-hidden relative">
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
              <HeartHandshake className="w-8 h-8 text-[#FFD100]" />
              <h2 className="font-title font-extrabold text-2xl mt-5">Partnership enquiries</h2>
              <p className="text-sm text-white/80 leading-relaxed mt-3">
                Churches, ministries, local organizations, and corporate teams can use the form to begin a partnership conversation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-xl p-6 sm:p-8">
            <div className="mb-8">
              <SectionBadge>Send a Message</SectionBadge>
              <h2 className="font-title font-extrabold text-3xl text-blue-950 mt-2">Contact form</h2>
              <p className="text-sm text-slate-500 mt-2">Fields marked with an asterisk are required.</p>
            </div>

            {submitted ? (
              <div className="rounded-3xl bg-green-50 border border-green-100 p-8 text-center">
                <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto" />
                <h3 className="font-display font-extrabold text-xl text-green-900 mt-5">Message ready to send</h3>
                <p className="text-sm text-green-800/80 leading-relaxed mt-2 max-w-md mx-auto">
                  This front-end form is prepared for integration. Connect it to your preferred email, CRM, or API endpoint to deliver submissions.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-green-700 hover:bg-green-800 text-white rounded-full px-6 py-3 text-sm font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block text-xs font-bold text-slate-600 mb-2">Full name *</span>
                    <input required name="name" type="text" className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0038a8] focus:ring-4 focus:ring-blue-100" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-bold text-slate-600 mb-2">Email address *</span>
                    <input required name="email" type="email" className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0038a8] focus:ring-4 focus:ring-blue-100" placeholder="you@example.com" />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block text-xs font-bold text-slate-600 mb-2">Phone number</span>
                    <input name="phone" type="tel" className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0038a8] focus:ring-4 focus:ring-blue-100" placeholder="+233..." />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-bold text-slate-600 mb-2">Topic *</span>
                    <select required name="topic" className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0038a8] focus:ring-4 focus:ring-blue-100 bg-white">
                      <option value="">Select a topic</option>
                      <option>Sponsorship</option>
                      <option>Donation support</option>
                      <option>Church partnership</option>
                      <option>Program information</option>
                      <option>Media or general enquiry</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="block text-xs font-bold text-slate-600 mb-2">Message *</span>
                  <textarea required name="message" rows={7} className="w-full rounded-2xl border-2 border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0038a8] focus:ring-4 focus:ring-blue-100 resize-none" placeholder="How can we help?" />
                </label>

                <label className="flex items-start gap-3 text-xs text-slate-500 leading-relaxed">
                  <input required type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#0038a8]" />
                  <span>I agree that Compassion Ghana may use these details to respond to my enquiry.</span>
                </label>

                <button type="submit" className="w-full sm:w-auto bg-[#00A896] hover:bg-[#02C39A] text-white rounded-full px-8 py-3.5 font-display font-bold text-sm shadow-lg shadow-teal-100 inline-flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </RoutePageShell>
  );
}
