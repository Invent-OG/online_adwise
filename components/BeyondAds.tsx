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
    <section ref={sectionRef} className="bg-black">
      {/* INTRO */}
      <div
        data-aos="fade-up"
        className="max-w-7xl text-center mx-auto px-6 pt-32 pb-24"
      >
        <p className="text-[#DFB025] uppercase tracking-widest text-xs font-semibold mb-4">
 Complete Systems        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white">
          Growth Happens <br />
          <span className="text-[#DFB025]">In Layers</span>
        </h2>
        <p className="mt-6 text-base max-w-sm mx-auto text-neutral-400">
          Each system builds on the previous one — revealed only when it
          matters.
        </p>
      </div>

      {/* STACKED PANELS */}
      <div className="relative">
        {serviceSuite
          .map((service, index) => {
            const isImageRight = index % 2 === 0;

            return (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) panelRefs.current[index] = el;
                }}
                className="sticky top-12 min-h-[75vh] flex items-center justify-center px-6"
                style={{ zIndex: 10 + index }}
              >
                <div className="w-full max-w-5xl bg-neutral-900 rounded-3xl shadow-lg overflow-hidden border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* IMAGE */}
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
                      <span className="inline-block text-[#DFB025] font-bold mb-3">
                        0{service.id}
                      </span>

                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        {service.title}
                      </h3>

                      <p className="text-neutral-400 mb-4">
                        {service.tagline}
                      </p>

                      <p className="text-neutral-300 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {service.services.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full
                            bg-[#DFB025]/10 text-[#DFB025] font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* PACKAGES */}
                      {service.packages && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                            Packages
                          </p>
                          <div className="space-y-2">
                            {service.packages.map((pkg, pIdx) => (
                              <div
                                key={pIdx}
                                className="flex justify-between text-sm"
                              >
                                <span className="text-white font-medium">
                                  {pkg.name}
                                </span>
                                <span className="text-neutral-400">
                                  {pkg.scope}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
