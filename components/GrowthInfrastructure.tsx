"use client";

import React, { useState } from "react";
import {
  Layers,
  Video,
  Mic,
  BarChart3,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const systems = [
  {
    icon: Layers,
    title: "Funnel Strategy & Scaling Systems (GHL)",
    description:
      "We design end-to-end funnel ecosystems inside GoHighLevel — engineered to convert cold users into booked calls and customers.",
    points: [
      "Lead generation funnels",
      "Appointment booking funnels",
      "Webinar funnels",
      "Local business funnels",
      "High-ticket VSL funnels",
      "Landing pages",
      "Opt-in systems",
      "Multi-step onboarding",
    ],
    footer:
      "SMS & Email automation · Lead nurturing · CRM pipelines · AI reminders · Sales scripts & follow-ups",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Video,
    title: "Creative & Video Suite",
    description:
      "Conversion-focused video assets with professional US/UK voiceovers, built for ads, landing pages, and brand authority.",
    points: [
      "Commercial videos",
      "Explainer videos",
      "Storytelling videos",
      "Animation",
      "US / UK voiceovers",
      "CTA-ready edits",
    ],
    footer:
      "Meta Ads · YouTube Ads · Google Video · Landing pages · Social media · YouTube SEO",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Mic,
    title: "Content Strategy & Distribution",
    description:
      "We build a full content foundation that attracts, educates, and converts — consistently.",
    points: [
      "Short-form ad creatives",
      "YouTube SEO videos",
      "Social content calendars",
      "Reels, Shorts & TikTok edits",
      "Content hooks & angles",
      "Brand positioning",
    ],
    footer:
      "Organic + paid distribution · Authority building · Platform-native formats",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: BarChart3,
    title: "Tracking, Analytics & Automation",
    description:
      "Full-funnel tracking and automation so every decision is data-driven and every scale move is intentional.",
    points: [
      "GA4 & GTM",
      "Meta Pixel + CAPI",
      "Google Ads tracking",
      "GHL events & conversions",
      "Lead scoring",
      "Multi-touch attribution",
    ],
    footer:
      "Zapier · Make · N8n · CRM-driven actions · Performance-based scaling",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

function GrowthInfrastructure() {
  const [index, setIndex] = useState(0);
  const system = systems[index];
  const Icon = system.icon;

  const prev = () =>
    setIndex((index - 1 + systems.length) % systems.length);
  const next = () => setIndex((index + 1) % systems.length);

  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div data-aos="fade-up" className="max-w-4xl text-center mx-auto mb-24">
          <p className="text-sm uppercase tracking-widest font-bold text-yellow-500 mb-4">
            Complete Systems
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
            Growth Infrastructure
          </h2>
          <p className="text-base max-w-sm mx-auto text-neutral-600 leading-relaxed">
            Beyond ads — we architect complete growth infrastructure that turns
            traffic into revenue and systems into scale.
          </p>
        </div>

        {/* CAROUSEL */}
        <div data-aos="fade-up" className="grid lg:grid-cols-2 gap-16 items-center relative">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={system.image}
              alt={system.title}
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Icon className="w-8 h-8 text-neutral" />
              <h3 className="text-3xl font-semibold text-neutral">
                {system.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {system.description}
            </p>

            <ul className="grid grid-cols-2 gap-y-3 text-sm text-gray-700 mb-8">
              {system.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="border-l-2 border-neutral pl-6 text-sm text-gray-700">
              {system.footer}
            </div>
          </div>

          {/* ARROWS */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-neutral hover:text-white transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-neutral hover:text-white transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default GrowthInfrastructure;
