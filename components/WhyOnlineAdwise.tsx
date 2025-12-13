"use client";

import React from "react";
import {
  Brain,
  Calculator,
  Monitor,
  Settings,
  X,
  Check,
} from "lucide-react";

function WhyOnlineAdwise() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-yellow-500 mb-4">
            The Difference
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            Why Online <br /> <span className="text-neutral-600">Adwise</span> Works
          </h2>

          <p className="text-lg text-neutral-600">
            We treat digital marketing as:
          </p>
        </div>

        {/* CORE PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
              highlight: true,
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
                className={`rounded-3xl border p-8 text-center transition ${
                  item.highlight
                    ? "border-neutral-900 shadow-lg"
                    : "border-neutral-200"
                }`}
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-neutral-100 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-neutral-900" />
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* COMPARISON – NEW STYLE */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

  {/* NO MORE CARD */}
  <div className="relative rounded-3xl border border-neutral-200 bg-neutral-50 p-8 overflow-hidden">
    {/* Accent */}
    <div className="absolute top-0 left-0 h-full w-1 bg-red-500/70" />

    <p className="text-sm font-semibold text-neutral-900 mb-6">
      No more:
    </p>

    <ul className="space-y-4">
      {[
        "Random posting",
        "Guesswork ads",
        "Patchy funnels",
      ].map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-3 text-sm text-neutral-600"
        >
          <span className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center shrink-0">
            <X className="w-4 h-4 text-red-600" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* JUST CARD */}
  <div className="relative rounded-3xl border border-neutral-900 bg-white p-8 overflow-hidden shadow-lg">
    {/* Accent */}
    <div className="absolute top-0 left-0 h-full w-1 bg-neutral-900" />

    <p className="text-sm font-semibold text-neutral-900 mb-6">
      Just:
    </p>

    <div className="flex items-start gap-4">
      <span className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center shrink-0">
        <Check className="w-4 h-4 text-white" />
      </span>

      <p className="text-sm text-neutral-600 leading-relaxed">
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
