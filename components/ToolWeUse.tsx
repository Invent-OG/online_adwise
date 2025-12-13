"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Check } from "lucide-react";

const tools = [
  "Meta Business Suite",
  "Ads Manager",
  "Google Ads",
  "Google Ads Editor",
  "GA4 + GTM",
  "Looker Studio Dashboards",
  "GoHighLevel (GHL)",
  "Zapier",
  "Make.com",
  "N8n",
  "Calendly / GHL Calendar",
  "Loom",
  "Figma",
  "Notion",
  "Motion",
];

function ToolWeUse() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;

      gsap.to(marquee, {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="max-w-5xl mx-auto bg-black py-28 overflow-hidden">
      <div
        data-aos="fade-up"
        className="max-w-7xl text-center mx-auto px-6 mb-16"
      >
        {/* HEADER */}
        <p className="text-sm uppercase tracking-widest font-bold text-yellow-600 mb-4">
          Infrastructure Stack
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tools We Use
        </h2>
        <p className="max-w-sm mx-auto text-neutral-400 text-base md:text-base">
          Industry-leading tools powering performance marketing, automation,
          analytics, and scale.
        </p>
      </div>

      {/* MARQUEE */}
      <div data-aos="fade-up" className="relative w-full overflow-hidden">
        <div ref={marqueeRef} className="flex w-max gap-6 items-center">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="
          flex items-center gap-3 px-6 py-3
          rounded-full
          bg-neutral-900 backdrop-blur-md
          border border-white/10
          shadow-md
          text-sm font-semibold text-white
          whitespace-nowrap
        "
            >
              <Check className="w-4 h-4 text-yellow-500" />
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolWeUse;
