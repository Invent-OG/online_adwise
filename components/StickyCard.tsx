"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const puzzleLetters = ["N", "A", "R", "E", "N"];

const cards = [
  {
    step: "Navigate",
    letter: "N",
    title: "Strategic Clarity",
    desc: "Before touching ads, we study your industry, customer psychology, funnel gaps, and data accuracy.",
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
    letter: "A",
    title: "Creative + Ads System",
    desc: "We craft attention-pulling assets using proven persuasion triggers and deploy across all major platforms.",
    points: [
      "Scroll-stopping creatives",
      "High-intent messaging",
      "Pain / desire hooks",
      "Niche-specific videos",
      "Meta, Google, YouTube Ads",
    ],
    outcome: "You start attracting not just leads — but buyer-ready prospects.",
  },
  {
    step: "Refine",
    letter: "R",
    title: "Fix + Improve",
    desc: "Behavior analysis + funnel forensics to optimize every touchpoint in your customer journey.",
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
    letter: "E",
    title: "Scale Without Wasting Money",
    desc: "We scale psychologically and structurally for sustainable growth with predictable ROI.",
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
    letter: "N",
    title: "Predictable System",
    desc: "Your business now runs on a system — not luck. Marketing becomes stable and reliable.",
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: `${index * 20}% top`,
          end: `${index * 20 + 20}% top`,
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });

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
    <section ref={sectionRef} className="relative h-[500vh] bg-black">
      <p className="text-[#DFB025] text-center uppercase tracking-widest text-xs font-bold mb-4">
Our Signature Framework              </p>
      <div className="sticky top-0 h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 max-w-7xl mx-auto items-center">
        

        {/* LEFT — STICKY CARDS */}
        <div className="flex justify-center">
          <div className="relative h-[520px] w-[420px]">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                style={{ zIndex: cards.length - index }}
                className="absolute inset-0 flex flex-col justify-between rounded-3xl
                border border-white/10 bg-neutral-900 p-8 shadow-xl
                bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
                bg-[size:24px_24px]"
              >
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB] text-white text-xl font-extrabold">
                      {card.letter}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {card.step}
                      </h3>
                      <p className="text-sm font-semibold text-[#DFB025]">
                        {card.title}
                      </p>
                    </div>
                  </div>

                  <p className="mb-6 text-neutral-400 leading-relaxed">
                    {card.desc}
                  </p>

                  <ul className="mb-6 space-y-3 text-sm text-neutral-300">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#DFB025]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-[#DFB025]/30 bg-[#DFB025]/10 p-4 text-sm font-medium text-[#DFB025]">
                  <span className="mr-2">📌</span>
                  <strong>Outcome:</strong> {card.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — FRAMEWORK + LETTERS */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            THE <span className="text-[#DFB025]">NAREN METHOD™</span>
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed mb-10">
            A 5-stage behavioral + performance system that ensures consistent,
            sustainable, high-quality leads — not just inconsistent spikes.
          </p>

          {/* 🔥 NEW LETTER DESIGN (DFB025 ONLY) */}
          <div className="flex gap-3">
            {puzzleLetters.map((letter, index) => (
              <div
                key={index}
                className={`relative h-14 w-14 rounded-full flex items-center justify-center
                text-lg font-extrabold transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-[#DFB025] text-black shadow-[0_0_28px_rgba(223,176,37,0.45)]"
                    : "bg-neutral-900 text-neutral-600 border border-neutral-800"
                }`}
              >
                {letter}

                {activeIndex === index && (
                  <span className="absolute inset-0 rounded-full ring-2 ring-[#DFB025]/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
