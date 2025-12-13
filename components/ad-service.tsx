
// "use client";

// import React, { useState, useEffect } from "react";
// import { CheckCircle2 } from "lucide-react";

// const services = [
//   {
//     id: "meta-ads",
//     title: "Meta Ads",
//     subtitle: "Facebook + Instagram Ads",
//     naren: "Navigate → Analyze → Execute → Retarget → Nurture",
//     execute: [
//       "Complete Meta Business Suite Setup",
//       "Pixel + CAPI (Server-Side Tracking) Integration",
//       "Campaign Structure (TOF/MOF/BOF based on NAREN Split)",
//       "Advanced Audience Targeting",
//       "Lookalike Creation (Data-Driven)",
//       "Creative Strategy: Hooks, Scripts, Thumbnails",
//       "A/B Testing (Creatives, Audiences, Landing Page)",
//       "Retargeting and Re-engagement Systems",
//       "Scaling Systems (Horizontal + Vertical)",
//       "Weekly Optimization & Analytics Dashboard",
//     ],
//     packages: [
//       {
//         name: "Starter Meta Package",
//         features: [
//           "Basic Campaign Launch",
//           "1 Funnel Entry Point",
//           "2 Ad Creatives",
//           "Basic Reporting",
//         ],
//       },
//       {
//         name: "Growth Meta Package",
//         features: [
//           "Multi-layer NAREN Audience Framework",
//           "6–8 Creatives",
//           "Retargeting + Automation",
//           "Weekly Optimization Reporting",
//         ],
//       },
//       {
//         name: "Performance Scaling Package",
//         features: [
//           "Full NAREN Implementation",
//           "CAPI + Advanced Tracking",
//           "Funnel Optimization",
//           "Weekly Strategy Calls",
//           "🎬 Includes: Whiteboard Video Explainer (1 Video for Ads/Funnel)",
//         ],
//       },
//     ],
//   },
//   {
//     id: "google-ads",
//     title: "Google Ads",
//     subtitle: "Search, Performance Max, Display, YouTube",
//     naren: "Navigate Intent → Analyze Journeys → Execute",
//     execute: [
//       "Google Ads Account Setup",
//       "Conversion Tracking (GTAG, GA4, GMC for e-commerce)",
//       "Keyword Research + Competitor Analysis",
//       "Search Campaign Buildout",
//       "Performance Max Shopping/Lead Campaign",
//       "Display Audience Segmentation",
//       "YouTube Ad Setup (Skippable, Non-Skippable, In-feed)",
//       "Landing Page Sync",
//       "Bid Optimization (Max Conversions / Target CPA)",
//       "Weekly Reporting Dashboard",
//     ],
//     packages: [
//       {
//         name: "Google Starter",
//         features: ["Search Only", "1 Landing Page", "Basic Tracking"],
//       },
//       {
//         name: "Google Growth",
//         features: [
//           "Search + Display",
//           "2–3 Landing Pages",
//           "GA4 Dashboard",
//         ],
//       },
//       {
//         name: "Google Performance Suite",
//         features: [
//           "Search + Pmax + Display + YouTube",
//           "Full Tracking Stack",
//           "NAREN Analytics Layer",
//           "Weekly Strategy Call",
//           "🎬 Includes: 1 Whiteboard Explainer for YouTube Ads",
//         ],
//       },
//     ],
//   },
//   {
//     id: "youtube-ads",
//     title: "YouTube Ads",
//     subtitle: "Direct Response + Storytelling Ads",
//     naren: "Narrative Psychology → Retargeting Loops",
//     execute: [
//       "YouTube Campaign Setup",
//       "Hook Strategy + Scriptwriting",
//       "Custom Thumbnails for Ads",
//       "Retargeting Sequence",
//       "Full Funnel Sync (Lead, VSL, Appointment, Webinar)",
//       "Scaling via High-Intent Audiences",
//     ],
//     packages: [],
//   },
//   {
//     id: "linkedin-ads",
//     title: "LinkedIn Ads",
//     subtitle: "High-Ticket B2B",
//     naren: "Narrow Targeting → Authority Messaging",
//     execute: [
//       "Profile Optimization",
//       "Campaign Setup (Lead Form + Website)",
//       "B2B Audience Segmentation",
//       "Message Ads + Sponsored Content",
//       "Retargeting Layer",
//       "Analytics + CRO",
//     ],
//     packages: [],
//   },
//   {
//     id: "social-media",
//     title: "Social Media Setup",
//     subtitle: "Organic Foundations",
//     naren: "Brand Identity → Content Systems",
//     execute: [
//       "Profile Optimization (Instagram, Facebook, LinkedIn, YouTube, X)",
//       "Bio Writing & Brand Guide Creation",
//       "Highlight Cover Setup",
//       "Content Calendar (NAREN-Based: Education + Proof + Intent + Nurture)",
//     ],
//     packages: [],
//   },
// ];

// export function AdService() {
//   const [activeId, setActiveId] = useState(services[0].id);

//   useEffect(() => {
//     const onScroll = () => {
//       services.forEach((s) => {
//         const el = document.getElementById(s.id);
//         if (!el) return;
//         const r = el.getBoundingClientRect();
//         if (r.top <= 180 && r.bottom >= 180) setActiveId(s.id);
//       });
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     window.scrollTo({
//       top: el.getBoundingClientRect().top + window.scrollY - 120,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="bg-white py-28">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* HEADER */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-black sm:text-6xl">
//             Platform-Wise <span className="text-yellow-600">Execution</span>
//           </h2>
//           <p className="mt-4 max-w-3xl text-lg text-neutral-600">
//             Paid Media Execution • Funnel Scaling • Performance Marketing Strategy
//           </p>
//         </div>

//         <div className="flex flex-col gap-16 lg:flex-row">
//           {/* LEFT NAV (STICKY UNCHANGED) */}
//           <aside className="hidden lg:block lg:w-1/3">
//             <div className="sticky top-28 space-y-4">
//               {services.map((s) => (
//                 <button
//                   key={s.id}
//                   onClick={() => scrollToSection(s.id)}
//                   className={`w-full rounded-xl border px-6 py-5 text-left transition ${
//                     activeId === s.id
//                       ? "border-yellow-600 bg-yellow-50"
//                       : "border-neutral-200"
//                   }`}
//                 >
//                   <h4 className="font-bold">{s.title}</h4>
//                   <p className="text-sm text-neutral-500">{s.subtitle}</p>
//                 </button>
//               ))}
//             </div>
//           </aside>

//           {/* RIGHT CONTENT – DESIGNED */}
//           <div className="lg:w-2/3 space-y-40">
//             {services.map((service) => (
//               <section key={service.id} id={service.id} className="scroll-mt-28">
//                 {/* HEADER */}
//                 <div className="mb-10">
//                   <h3 className="text-3xl font-extrabold">
//                     {service.title}
//                   </h3>
//                   <p className="text-neutral-600">
//                     {service.subtitle}
//                   </p>
//                 </div>

//                 {/* NAREN BAR */}
//                 <div className="mb-10 rounded-2xl border border-yellow-600/30 bg-yellow-50 px-6 py-4">
//                   <p className="font-semibold text-yellow-700">
//                     NAREN Flow:
//                   </p>
//                   <p className="mt-1 text-sm text-neutral-700">
//                     {service.naren}
//                   </p>
//                 </div>

//                 {/* EXECUTION PANEL */}
//                 <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
//                   <h4 className="mb-6 text-xl font-bold">
//                     Execution Framework
//                   </h4>

//                   <div className="grid gap-4 sm:grid-cols-2">
//                     {service.execute.map((item, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
//                       >
//                         <CheckCircle2 className="h-5 w-5 text-yellow-600" />
//                         <span className="text-sm text-neutral-700">
//                           {item}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* PACKAGES FRAME */}
//                 {service.packages.length > 0 && (
//                   <div className="mt-16 grid gap-10 md:grid-cols-3">
//                     {service.packages.map((pkg, i) => (
//                       <div
//                         key={i}
//                         className="rounded-2xl border border-neutral-200 bg-white p-6"
//                       >
//                         <h5 className="mb-5 font-bold text-yellow-700">
//                           {pkg.name}
//                         </h5>
//                         <ul className="space-y-3 text-sm text-neutral-600">
//                           {pkg.features.map((f, j) => (
//                             <li key={j} className="flex gap-3">
//                               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-600" />
//                               {f}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </section>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    subtitle: "Facebook + Instagram Ads",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600",
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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
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
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1600",
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
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600",
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
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1600",
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
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-black sm:text-6xl">
            Platform-Wise <br /> <span className="text-neutral-600">Execution</span>
          </h2>
          <p className="mt-4 max-w-sm mx-auto text-base text-neutral-600">
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
                  className={`w-full rounded-xl border px-6 py-5 text-left transition ${
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

          {/* RIGHT CONTENT (UNCHANGED + IMAGE ADDED) */}
          <div className="lg:w-2/3 space-y-40">
            {services.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-28">
                {/* IMAGE */}
                <div className="mb-10 overflow-hidden rounded-3xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1600}
                    height={900}
                    className="h-[260px] w-full object-cover"
                  />
                </div>

                {/* EXISTING CONTENT (UNCHANGED) */}
                <div className="mb-10">
                  <h3 className="text-3xl font-extrabold">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600">
                    {service.subtitle}
                  </p>
                </div>

                <div className="mb-10 rounded-2xl border border-yellow-600/30 bg-yellow-50 px-6 py-4">
                  <p className="font-semibold text-yellow-700">
                    NAREN Flow:
                  </p>
                  <p className="mt-1 text-sm text-neutral-700">
                    {service.naren}
                  </p>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
                  <h4 className="mb-6 text-xl font-bold">
                    Execution Framework
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.execute.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                      >
                        <CheckCircle2 className="h-5 w-5 text-yellow-600" />
                        <span className="text-sm text-neutral-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.packages.length > 0 && (
                  <div className="mt-16 grid gap-10 md:grid-cols-3">
                    {service.packages.map((pkg, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-neutral-200 bg-white p-6"
                      >
                        <h5 className="mb-5 font-bold text-yellow-700">
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
