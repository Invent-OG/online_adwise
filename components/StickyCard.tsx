
// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const cards = [
//   {
//     title: "Better User Acquisition",
//     desc: "Turn visitors into loyal users with smart UX and strategy.",
//   },
//   {
//     title: "Responsive Design",
//     desc: "Perfect layouts across mobile, tablet and desktop.",
//   },
//   {
//     title: "High Performance",
//     desc: "Fast loading experiences that users love.",
//   },
//   {
//     title: "Data Driven Decisions",
//     desc: "Analytics-based improvements that actually convert.",
//   },
//   {
//     title: "Conversion Focused",
//     desc: "Every pixel guides users to take action.",
//   },
// ];

// export default function StickyCard() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const ctx = gsap.context(() => {
//       cardsRef.current.forEach((card, index) => {
//         gsap.fromTo(
//           card,
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//           },
//           {
//             y: "-120vh", // 👈 moves fully to top and out
//             opacity: 0,
//             scale: 0.95,
//             ease: "none",
//             scrollTrigger: {
//               trigger: sectionRef.current,
//               start: `${index * 20}% top`,
//               end: `${index * 20 + 20}% top`,
//               scrub: true,
//             },
//           }
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-[500vh]"
//     >
//       <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
//         <div className="relative h-[420px] w-[360px]">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               ref={(el) => {
//                 if (el) cardsRef.current[index] = el;
//               }}
//               className="absolute bg-gradient-to-br from-orange-100 via-orange-400 to-orange-100 inset-0 flex flex-col  items-center justify-center rounded-3xl bg-white p-8 shadow-2xl"
//               style={{ zIndex: cards.length - index }}
//             >
//               <h3 className="mb-4 text-center md:text-3xl text-2xl font-extrabold text-white">
//                 {card.title}
//               </h3>
//               <p className="text-center text-white font-bold">
//                 {card.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    step: "Navigate",
    title: "Strategic Clarity",
    desc:
      "Before touching ads, we study your industry, customer psychology, funnel gaps, and data accuracy.",
    points: [
      "Industry, niche & competition analysis",
      "Customer fears, desires, objections",
      "Funnel gap identification",
      "Offer weakness assessment",
      "Data + tracking accuracy",
    ],
    outcome:
      "You know exactly what to do, why you're doing it, and where growth is blocked.",
  },
  {
    step: "Attract",
    title: "Creative + Ads System",
    desc:
      "We craft attention-pulling assets using proven persuasion triggers and deploy across all major platforms.",
    points: [
      "Scroll-stopping creatives",
      "High-intent messaging",
      "Pain / desire hooks",
      "Niche-specific videos",
      "Meta, Google, YouTube Ads",
    ],
    outcome:
      "You start attracting not just leads — but buyer-ready prospects.",
  },
  {
    step: "Refine",
    title: "Fix + Improve",
    desc:
      "Behavior analysis + funnel forensics to optimize every touchpoint in your customer journey.",
    points: [
      "Heatmap study",
      "Drop-off detection",
      "Landing page refinement",
      "Creative improvement",
      "CAPI + Enhanced Conversion setup",
    ],
    outcome:
      "Lower CPL, stronger conversions, cleaner data, profitable performance.",
  },
  {
    step: "Expand",
    title: "Scale Without Wasting Money",
    desc:
      "We scale psychologically and structurally for sustainable growth with predictable ROI.",
    points: [
      "Multi-geo expansion",
      "Budget scaling",
      "Offer variations",
      "Creative clusters",
      "Funnel upgrades (VSL, upsells)",
    ],
    outcome: "Sustainable scaling with predictable ROI.",
  },
  {
    step: "Normalize",
    title: "Predictable System",
    desc:
      "Your business now runs on a system — not luck. Marketing becomes stable and reliable.",
    points: [
      "Weekly audits",
      "Creative rotation",
      "Predictable lead flow",
      "Evergreen nurturing",
      "AI forecasting + GHL automation",
    ],
    outcome: "Marketing becomes stable and reliable.",
  },
];

export default function StickyCard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 0, opacity: 1, scale: 1 },
          {
            y: "-120vh",
            opacity: 0,
            scale: 0.95,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${index * 20}% top`,
              end: `${index * 20 + 20}% top`,
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[500vh] ">
      <div className="sticky top-0 flex h-screen flex-col-reverse items-center justify-center gap-10 px-6 overflow-hidden lg:flex-row lg:gap-16">
        {/* Cards (Now Left) */}
        <div data-aos="fade-right" className="relative h-[520px] w-[420px]">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              style={{ zIndex: cards.length - index }}
              className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            >
              <div>
                {/* Step */}
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-yellow-600">
                  {card.step}
                </p>

                {/* Title */}
                <h3 className="mb-4 text-3xl font-extrabold text-neutral-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-neutral-600 leading-relaxed">
                  {card.desc}
                </p>

                {/* Bullet points */}
                <ul className="mb-6 space-y-3 text-sm text-neutral-700">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-yellow-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="rounded-xl border border-yellow-100 bg-yellow-50/50 p-4 text-sm font-medium text-yellow-800">
                <span className="mr-2">📌</span>
                <strong>Outcome:</strong> {card.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* Heading (Now Right) */}
        <div data-aos="fade-left" className="max-w-md">
          <h1 className="text-5xl font-extrabold leading-tight text-neutral-900">
            WHAT YOUR WEBSITE <br />
            <span className="text-neutral-400">TRULY NEEDS</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
