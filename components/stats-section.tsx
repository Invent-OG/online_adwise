"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, Globe2, Star, BadgeCheck } from "lucide-react";

/* ---------------- DATA ---------------- */
const stats = [
  {
    label: "Global Customers",
    value: 11000,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Countries Served",
    value: 120,
    suffix: "+",
    icon: Globe2,
  },
  {
    label: "Average Client Rating",
    value: 4.8,
    suffix: "/5",
    icon: Star,
  },
  {
    label: "Client Satisfaction",
    value: 100,
    suffix: "%",
    icon: BadgeCheck,
  },
];

/* ---------------- COUNT UP HOOK ---------------- */
function useCountUp(target: number, start: boolean, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      setCount(Number((progress * target).toFixed(1)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, target, duration]);

  return count;
}

/* ---------------- CARD ---------------- */
function StatCard({ stat, index }: { stat: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  const count = useCountUp(stat.value, isInView);

  return (
    <div
      ref={ref}
      className={`rounded-2xl bg-neutral-900 p-8
      shadow-[0_18px_45px_-20px_rgba(234,179,8,0.15)]
      border border-white/10
      transition-all duration-700 ease-out
      ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* ICON */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-yellow-600/30 bg-yellow-600/10">
        <stat.icon className="h-6 w-6 text-yellow-600" />
      </div>

      {/* VALUE */}
      <h3 className="text-4xl font-extrabold text-white">
        {stat.value % 1 !== 0 ? count : Math.floor(count)}
        <span className="text-yellow-600">{stat.suffix}</span>
      </h3>

      {/* LABEL */}
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-neutral-400">
        {stat.label}
      </p>
    </div>
  );
}

/* ---------------- SECTION ---------------- */
export function StatsSection({ reverse = false }: { reverse?: boolean }) {
  const finalStats = reverse ? [...stats].reverse() : stats;

  return (
    <section className="w-full bg-black py-28">
      <div data-aos="fade-up" className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Proven Global Impact
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-neutral-400">
            Delivering consistent results across industries worldwide
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {finalStats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
