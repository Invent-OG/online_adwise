
"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  BrainCircuit,
  Filter,
  Zap,
  Activity,
  Video,
  Bot,
} from "lucide-react";
import { ProfileCard } from "./ui/profile-card";

/* ---------------- DATA ---------------- */
const features = [
  { name: "Buyer Psychology", icon: BrainCircuit },
  { name: "Funnel Design", icon: Filter },
  { name: "High-Performance Ads", icon: Zap },
  { name: "Behavior Analytics", icon: Activity },
  { name: "Video Leverage", icon: Video },
  { name: "GHL Automations", icon: Bot },
];

const platforms = ["Meta", "Google", "YouTube"];

export function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(headerRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white overflow-hidden"
      
    >
      {/* STICKY WRAPPER */}
      <div className=" min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT — MANIFESTO */}
          <motion.div
          
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 max-w-xl flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-neutral-400"></span>
              <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">
                Who We Are
              </p>
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl leading-[1.1]">
              Growth Isn’t Random. <br />
              <span className="text-neutral-500">It’s Architected.</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              Online Adwise™ helps founders escape guesswork by designing
              predictable growth systems — not isolated campaigns.
            </p>

            <div className="mt-8 border-l-2 border-neutral-200 pl-6">
              <p className="text-xl font-medium italic text-neutral-800">
                "Ads are execution."
              </p>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              Real growth comes from psychology, structure, automation, and
              iteration — unified through the{" "}
              <span className="font-bold text-neutral-900 underline decoration-neutral-300 underline-offset-4">
                NAREN Method™
              </span>
              .
            </p>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Scaling On
              </p>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full bg-neutral-100 px-5 py-2
                    text-sm font-semibold text-neutral-700
                    border border-neutral-200 transition-colors hover:bg-neutral-200 hover:border-neutral-300"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — PROFILE CARD */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
             <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
