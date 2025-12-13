
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceSuite } from "@/public/data/services";

gsap.registerPlugin(ScrollTrigger);

export default function BeyondAds() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      panelRefs.current.forEach((panel, i) => {
        if (i === panelRefs.current.length - 1) return;

        gsap.to(panel, {
          scale: 0.92,
          opacity: 0.5,
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: panelRefs.current[i + 1],
            start: "top center",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold mb-4">
          Beyond Ads
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-950 max-w-4xl">
          Growth Happens <br />
          <span className="text-neutral-600">In Layers</span>
        </h2>
        <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
          Each system builds on the previous one — revealed only when it matters.
        </p>
      </div>

      {/* STACKED PANELS */}
      <div className="relative">
        {serviceSuite
          .filter((s) => s.category === "Beyond Ads")
          .map((service, index) => {
            const isImageRight = index % 2 === 0;

            return (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) panelRefs.current[index] = el;
                }}
                className="sticky top-24 min-h-[75vh] flex items-center justify-center px-6"
                style={{ zIndex: 10 + index }}
              >
                <div className="w-full max-w-5xl bg-[#fafafa] rounded-3xl shadow-lg overflow-hidden border border-black/5">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* IMAGE (LEFT OR RIGHT) */}
                    <div
                      className={`relative min-h-[320px] ${
                        isImageRight ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>

                    {/* TEXT */}
                    <div
                      className={`p-10 ${
                        isImageRight ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <span className="inline-block text-yellow-500 font-bold mb-3">
                        0{service.id}
                      </span>

                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {service.title}
                      </h3>

                      <p className="text-black/60 mb-4">
                        {service.tagline}
                      </p>

                      <p className="text-black/70 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {service.services.slice(0, 4).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* END SPACER */}
      <div className="h-[20vh]" />
    </section>
  );
}
