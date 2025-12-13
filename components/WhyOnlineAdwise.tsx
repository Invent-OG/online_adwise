"use client";

import React from "react";
import { Brain, Calculator, Monitor, Settings, X, Check } from "lucide-react";

function WhyOnlineAdwise() {
  return (
    <section className="w-full bg-black py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div data-aos="fade-up" className="text-center mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#DFB025] mb-4">
            The Difference
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Why  <span className="text-[#DFB025]">Online <br /> Adwise</span>{" "}
            Works
          </h2>

          <p className="text-lg text-neutral-400">
            We treat digital marketing as:
          </p>
        </div>

        {/* CORE PILLARS */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {[
            {
              title: "Psychology",
              desc: "Mindset of the buyer",
              icon: Brain,
            },
            {
              title: "Math",
              desc: "Data + tracking",
              icon: Calculator,
            },
            {
              title: "Media",
              desc: "Ads + videos + funnels",
              icon: Monitor,
            },
            {
              title: "Mechanism",
              desc: "Systems + automation",
              icon: Settings,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="
                  rounded-3xl border border-white/10
                  bg-neutral-900/70
                  p-8 text-center
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#DFB025]/40
                  hover:shadow-[0_25px_80px_rgba(223,176,37,0.28)]
                "
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-black border border-white/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* COMPARISON */}
        <div
          data-aos="fade-right"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* NO MORE */}
          <div className="relative rounded-3xl border border-white/10 bg-neutral-900 p-8 overflow-hidden transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 left-0 h-full w-1 bg-red-500/70" />

            <p className="text-sm font-semibold text-white mb-6">No more:</p>

            <ul className="space-y-4">
              {["Random posting", "Guesswork ads", "Patchy funnels"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-neutral-400"
                  >
                    <span className="w-7 h-7 rounded-full bg-red-900/20 flex items-center justify-center shrink-0">
                      <X className="w-4 h-4 text-red-500" />
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* JUST */}
          <div className="relative rounded-3xl border border-[#DFB025]/30 bg-neutral-900 p-8 overflow-hidden transition hover:shadow-[0_25px_80px_rgba(223,176,37,0.35)]">
            <div className="absolute top-0 left-0 h-full w-1 bg-[#DFB025]" />

            <p className="text-sm font-semibold text-white mb-6">Just:</p>

            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#DFB025] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-black" />
              </span>

              <p className="text-sm text-neutral-400 leading-relaxed">
                A structured, proven, behavioral system that grows your business
                step by step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyOnlineAdwise;
