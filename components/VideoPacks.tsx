"use client";

import React from "react";
import CardSwap, { Card } from "./CardSwap";

function VideoPacks() {
  return (
    <section className="w-full bg-black py-32">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div data-aos="fade-up">
          <p className="text-[#DFB025] uppercase tracking-widest text-xs font-semibold mb-4">
            Video Package Store
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="text-[#DFB025]">Explainer</span> Video Packs
          </h2>

          <p className="mt-6 text-lg text-neutral-400 max-w-xl">
            A powerful add-on included in our consulting ecosystem. Three
            ready-to-use video formats for 20+ local business niches.
          </p>

          <div className="mt-10 space-y-2 text-sm text-neutral-300">
            <div>→ US & UK voiceovers</div>
            <div>→ Logo + business detail insertion</div>
            <div>→ Ready for ads, website, social & YouTube</div>
            <div>→ No customization required (simple, fast setup)</div>
          </div>
        </div>

        {/* RIGHT ANIMATION */}
        <div className="relative h-[420px]">
          <CardSwap>
            {/* CARD 1 */}
            <Card className="p-8 space-y-4 bg-neutral-900 border-white/10">
              <span className="text-[#DFB025] font-bold">01</span>

              <h3 className="text-xl font-semibold mt-4 text-white">
                Commercial Video
              </h3>

              <p className="text-white text-sm leading-relaxed">
                High-impact animations designed to trigger immediate action.
              </p>

              <p className="text-white text-sm">
                Meta Ads, YouTube Ads, Landing Page Hero Sections
              </p>

              <p className="text-white text-sm leading-relaxed">
                Built to capture attention within the first few seconds, these
                videos focus on clarity, speed, and visual hooks that stop the
                scroll and communicate value instantly.
              </p>

              <ul className="space-y-2 text-white text-sm">
                <li>• Optimized for paid traffic performance</li>
                <li>• Strong hooks, bold messaging, fast pacing</li>
                <li>• Designed to drive clicks, leads, and conversions</li>
              </ul>
            </Card>

            {/* CARD 2 */}
            <Card className="p-8 space-y-4 bg-neutral-900 border-white/10">
              <span className="text-[#DFB025] font-bold">02</span>

              <h3 className="text-xl font-semibold mt-4 text-white">
                Explainer Video
              </h3>

              <p className="text-white text-sm leading-relaxed">
                Question-based, educational videos ideal for awareness.
              </p>

              <p className="text-white text-sm">
                YouTube SEO, Website trust-building, Top-of-funnel ads
              </p>

              <p className="text-white text-sm leading-relaxed">
                Designed to answer common buyer questions and simplify complex
                services, these videos position your brand as a trusted
                authority before the sales conversation begins.
              </p>

              <ul className="space-y-2 text-white text-sm">
                <li>• Educates cold audiences without selling</li>
                <li>• Increases watch time and engagement</li>
                <li>• Builds familiarity and brand confidence</li>
              </ul>
            </Card>

            {/* CARD 3 */}
            <Card className="p-8 space-y-4 bg-neutral-900 border-white/10">
              <span className="text-[#DFB025] font-bold">03</span>

              <h3 className="text-xl font-semibold text-white">
                Storytelling Video
              </h3>

              <p className="text-white text-sm leading-relaxed">
                Emotion-driven brand story videos crafted to build trust,
                authority, and long-term emotional connection with your
                audience.
              </p>

              <ul className="space-y-2 text-white text-sm">
                <li>• Ideal for retargeting & warm audiences</li>
                <li>• Builds credibility & brand recall</li>
                <li>• Converts attention into trust</li>
              </ul>

              <p className="text-white text-sm">
                Best used across retargeting ads, website about sections, and
                credibility-focused funnels.
              </p>

            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

export default VideoPacks;
