"use client";

import React from "react";
import { Zap, TrendingUp, Award, CheckCircle } from "lucide-react";

export default function PricingTwo() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold mb-4">
            Our Packages
          </p>

          <h2 className="text-4xl md:text-6xl text-center font-bold text-neutral-900 mb-4">
            Consultation , Video <span className="text-neutral-600">, Ads Setup</span>
          </h2>

          <p className="text-base max-w-sm mx-auto text-neutral-600">
            Choose the package that fits your business needs and growth stage.
          </p>
        </div>

        {/* CARDS */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* LEFT CARD */}
          <div className="rounded-3xl border border-neutral/10 bg-white p-8 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-yellow-600/10 flex items-center justify-center mb-5">
              <Zap className="w-5 h-5 text-yellow-600" />
            </div>

            <h3 className="text-base font-semibold text-neutral mb-1">
              Explainer Video Pack Only
            </h3>

            <p className="text-lg font-semibold text-neutral mb-4">
              $97 – $197
            </p>

            <ul className="space-y-2.5 text-sm text-neutral/70 mb-7">
              {[
                "3 niche videos",
                "US & UK voices",
                "Upload instructions",
                "Licensing",
                "Funnel copy template",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-600" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-2.5 rounded-xl bg-yellow-600 text-white font-medium hover:bg-yellow-700 transition">
              Get Video Pack
            </button>
          </div>

          {/* CENTER CARD */}
          <div className="relative rounded-3xl bg-gradient-to-b from-yellow-50 to-white border-2 border-yellow-600 p-12 shadow-2xl scale-[1.05] z-10">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 text-xs font-semibold rounded-full bg-yellow-600 text-white">
              Most Popular
            </span>

            <div className="w-14 h-14 rounded-2xl bg-yellow-600 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-xl font-semibold text-neutral mb-1">
              Consultation + DWY Setup
            </h3>

            <p className="text-lg font-semibold text-neutral mb-6">
              $297 – $497
            </p>

            <ul className="space-y-3 text-sm text-neutral/70 mb-10">
              {[
                "All videos",
                "YouTube SEO setup",
                "Meta Ads blueprint",
                "Google Ads blueprint",
                "GHL funnel import",
                "One strategy session",
                "Offer guidance",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-600" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-xl bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition">
              Start Consultation
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-3xl border border-neutral/10 bg-white p-8 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-yellow-600/10 flex items-center justify-center mb-5">
              <Award className="w-5 h-5 text-yellow-600" />
            </div>

            <h3 className="text-base font-semibold text-neutral mb-1">
              Full DFY Growth System
            </h3>

            <p className="text-lg font-semibold text-neutral mb-4">
              $750 – $1500
            </p>

            <ul className="space-y-2.5 text-sm text-neutral/70 mb-7">
              {[
                "All videos",
                "Meta Ads setup",
                "Google Ads setup",
                "YouTube Ads setup",
                "Conversion tracking",
                "Retargeting strategy",
                "GHL CRM + automations",
                "Weekly optimization",
                "Performance dashboard",
                "Monthly consulting",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-600" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-2.5 rounded-xl bg-yellow-600 text-white font-medium hover:bg-yellow-700 transition">
              Get Full System
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
