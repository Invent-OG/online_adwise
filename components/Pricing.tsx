"use client";

import React from "react";
import { Zap, TrendingUp, Award, CheckCircle } from "lucide-react";

export default function CompleteSuites() {
  return (
    <section className="w-full bg-black py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div data-aos="fade-up" className="text-center mb-20">
          <p className="text-[#DFB025] uppercase tracking-widest text-xs font-semibold mb-4">
            Complete Packages
          </p>

          <h2 className="text-4xl md:text-6xl text-center font-extrabold text-white mb-4">
            NAREN Method™ <br />
            <span className="text-neutral-500">Complete Suites</span>
          </h2>

          <p className="text-base text-neutral-400">
            Everything you need in one powerful package
          </p>
        </div>

        {/* CARDS */}
        <div
          data-aos="fade-up"
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* LEFT CARD */}
          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#DFB025]/10 flex items-center justify-center mb-5">
              <Zap className="w-5 h-5 text-[#DFB025]" />
            </div>

            <h3 className="text-base font-semibold text-white mb-2">
              NAREN Paid Ads Performance Suite
            </h3>

            <p className="text-sm text-neutral-400 mb-5">
              Complete paid advertising solution across all platforms
            </p>

            <ul className="space-y-2.5 text-sm text-neutral-300 mb-7">
              {[
                "Meta Ads",
                "Google Ads",
                "YouTube Ads",
                "Tracking Setup",
                "Funnel Optimization",
                "Creative Strategy",
                "Weekly Reports",
                "Whiteboard Video (1)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#DFB025]" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-2.5 rounded-xl bg-[#DFB025] text-black font-medium transition hover:bg-[#DFB025]/90 hover:shadow-[0_15px_40px_rgba(223,176,37,0.35)]">
              Get Started
            </button>
          </div>

          {/* CENTER CARD */}
          <div className="relative rounded-3xl bg-neutral-900 border-2 border-[#DFB025] p-12 scale-[1.05] z-10 shadow-[0_25px_80px_rgba(223,176,37,0.25)]">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 text-xs font-semibold rounded-full bg-[#DFB025] text-black">
              Most Popular
            </span>

            <div className="w-14 h-14 rounded-2xl bg-[#DFB025] flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(223,176,37,0.45)]">
              <TrendingUp className="w-7 h-7 text-black" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              NAREN Business Growth System
            </h3>

            <p className="text-sm text-neutral-400 mb-6">
              Full-stack growth with ads, funnels, and automation
            </p>

            <ul className="space-y-3 text-sm text-neutral-300 mb-10">
              {[
                "Paid Ads",
                "Website + Funnels",
                "Copywriting",
                "Automation",
                "CRM Setup",
                "YouTube Content Strategy",
                "Lead Nurture",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#DFB025]" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-xl bg-[#DFB025] text-black font-semibold transition hover:bg-[#DFB025]/90 hover:shadow-[0_20px_60px_rgba(223,176,37,0.45)]">
              Get Started
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#DFB025]/10 flex items-center justify-center mb-5">
              <Award className="w-5 h-5 text-[#DFB025]" />
            </div>

            <h3 className="text-base font-semibold text-white mb-2">
              NAREN Brand Authority Suite
            </h3>

            <p className="text-sm text-neutral-400 mb-5">
              Complete brand building with organic + paid strategy
            </p>

            <ul className="space-y-2.5 text-sm text-neutral-300 mb-7">
              {[
                "Website",
                "Content Writing",
                "Social Media Setup",
                "Organic + Paid Strategy",
                "Long-form Narrative Copy",
                "Explainer Video",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#DFB025]" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full py-2.5 rounded-xl bg-[#DFB025] text-black font-medium transition hover:bg-[#DFB025]/90 hover:shadow-[0_15px_40px_rgba(223,176,37,0.35)]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
