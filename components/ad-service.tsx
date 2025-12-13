
"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    subtitle: "Facebook + Instagram Ads",
    naren: "Navigate → Analyze → Execute → Retarget → Nurture",
    execute: [
      "Complete Meta Business Suite Setup",
      "Pixel + CAPI (Server-Side Tracking) Integration",
      "Campaign Structure (TOF/MOF/BOF based on NAREN Split)",
      "Advanced Audience Targeting",
      "Lookalike Creation (Data-Driven)",
      "Creative Strategy: Hooks, Scripts, Thumbnails",
      "A/B Testing (Creatives, Audiences, Landing Page)",
      "Retargeting and Re-engagement Systems",
      "Scaling Systems (Horizontal + Vertical)",
      "Weekly Optimization & Analytics Dashboard",
    ],
    packages: [
      {
        name: "Starter Meta Package",
        features: [
          "Basic Campaign Launch",
          "1 Funnel Entry Point",
          "2 Ad Creatives",
          "Basic Reporting",
        ],
      },
      {
        name: "Growth Meta Package",
        features: [
          "Multi-layer NAREN Audience Framework",
          "6–8 Creatives",
          "Retargeting + Automation",
          "Weekly Optimization Reporting",
        ],
      },
      {
        name: "Performance Scaling Package",
        features: [
          "Full NAREN Implementation",
          "CAPI + Advanced Tracking",
          "Funnel Optimization",
          "Weekly Strategy Calls",
          "🎬 Includes: Whiteboard Video Explainer (1 Video for Ads/Funnel)",
        ],
      },
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    subtitle: "Search, Performance Max, Display, YouTube",
    naren: "Navigate Intent → Analyze Journeys → Execute",
    execute: [
      "Google Ads Account Setup",
      "Conversion Tracking (GTAG, GA4, GMC for e-commerce)",
      "Keyword Research + Competitor Analysis",
      "Search Campaign Buildout",
      "Performance Max Shopping/Lead Campaign",
      "Display Audience Segmentation",
      "YouTube Ad Setup (Skippable, Non-Skippable, In-feed)",
      "Landing Page Sync",
      "Bid Optimization (Max Conversions / Target CPA)",
      "Weekly Reporting Dashboard",
    ],
    packages: [
      {
        name: "Google Starter",
        features: ["Search Only", "1 Landing Page", "Basic Tracking"],
      },
      {
        name: "Google Growth",
        features: [
          "Search + Display",
          "2–3 Landing Pages",
          "GA4 Dashboard",
        ],
      },
      {
        name: "Google Performance Suite",
        features: [
          "Search + Pmax + Display + YouTube",
          "Full Tracking Stack",
          "NAREN Analytics Layer",
          "Weekly Strategy Call",
          "🎬 Includes: 1 Whiteboard Explainer for YouTube Ads",
        ],
      },
    ],
  },
  {
    id: "youtube-ads",
    title: "YouTube Ads",
    subtitle: "Direct Response + Storytelling Ads",
    naren: "Narrative Psychology → Retargeting Loops",
    execute: [
      "YouTube Campaign Setup",
      "Hook Strategy + Scriptwriting",
      "Custom Thumbnails for Ads",
      "Retargeting Sequence",
      "Full Funnel Sync (Lead, VSL, Appointment, Webinar)",
      "Scaling via High-Intent Audiences",
    ],
    packages: [],
  },
  {
    id: "linkedin-ads",
    title: "LinkedIn Ads",
    subtitle: "High-Ticket B2B",
    naren: "Narrow Targeting → Authority Messaging",
    execute: [
      "Profile Optimization",
      "Campaign Setup (Lead Form + Website)",
      "B2B Audience Segmentation",
      "Message Ads + Sponsored Content",
      "Retargeting Layer",
      "Analytics + CRO",
    ],
    packages: [],
  },
  {
    id: "social-media",
    title: "Social Media Setup",
    subtitle: "Organic Foundations",
    naren: "Brand Identity → Content Systems",
    execute: [
      "Profile Optimization (Instagram, Facebook, LinkedIn, YouTube, X)",
      "Bio Writing & Brand Guide Creation",
      "Highlight Cover Setup",
      "Content Calendar (NAREN-Based: Education + Proof + Intent + Nurture)",
    ],
    packages: [],
  },
];

export function AdService() {
  const [activeId, setActiveId] = useState(services[0].id);

  useEffect(() => {
    const onScroll = () => {
      services.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 180 && r.bottom >= 180) setActiveId(s.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 120,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-20">
          <h2 className="text-4xl font-black sm:text-6xl">
            Platform-Wise <span className="text-yellow-600">Execution</span>
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Paid Media Execution • Funnel Scaling • Performance Marketing Strategy
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row">
          {/* LEFT NAV */}
          <aside className="hidden lg:block lg:w-1/3">
            <div className="sticky top-28 space-y-4">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full rounded-xl border px-6 py-5 text-left ${
                    activeId === s.id
                      ? "border-yellow-600 bg-yellow-50"
                      : "border-neutral-200"
                  }`}
                >
                  <h4 className="font-bold">{s.title}</h4>
                  <p className="text-sm text-neutral-500">{s.subtitle}</p>
                </button>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT – NEW */}
          <div className="lg:w-2/3 space-y-36">
            {services.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-28">
                <h3 className="text-3xl font-extrabold">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {service.subtitle}
                </p>

                {/* NAREN FLOW */}
                <div className="mb-12 flex flex-wrap gap-3 text-sm font-semibold text-yellow-700">
                  {service.naren.split("→").map((step, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-yellow-600 px-4 py-2"
                    >
                      {step.trim()}
                    </span>
                  ))}
                </div>

                {/* EXECUTION MODULES */}
                <div className="grid gap-6 md:grid-cols-2">
                  {service.execute.map((item, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-yellow-600 pl-5"
                    >
                      <div className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <span className="text-neutral-700">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PACKAGES AS CAPABILITIES */}
                {service.packages.length > 0 && (
                  <div className="mt-16 grid gap-10 md:grid-cols-3">
                    {service.packages.map((pkg, i) => (
                      <div key={i}>
                        <h5 className="mb-4 text-lg font-bold text-yellow-700">
                          {pkg.name}
                        </h5>
                        <ul className="space-y-3 text-sm text-neutral-600">
                          {pkg.features.map((f, j) => (
                            <li key={j} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-600" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
