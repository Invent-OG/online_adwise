"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Users,
  Globe2,
  Star,
  BadgeCheck,
} from "lucide-react";

/* ---------------- DATA ---------------- */
const stats = [
  {
    label: "Global Customers",
    value: 11000,
    suffix: "+",
    icon: Users,
    gradient: "from-indigo-600 to-slate-800",
  },
  {
    label: "Countries Served",
    value: 120,
    suffix: "+",
    icon: Globe2,
    gradient: "from-teal-600 to-cyan-700",
  },
  {
    label: "Average Client Rating",
    value: 4.8,
    suffix: "/5",
    icon: Star,
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    label: "Client Satisfaction",
    value: 100,
    suffix: "%",
    icon: BadgeCheck,
    gradient: "from-rose-600 to-red-700",
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
function StatCard({
  stat,
  index,
}: {
  stat: any;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  const count = useCountUp(stat.value, isInView);

  return (
    <div
      ref={ref}
      className={`relative rounded-3xl bg-white p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]
      transition-all duration-700 ease-out
      ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* ICON */}
      <div
        className={`absolute -top-7 left-1/2 -translate-x-1/2
        flex h-14 w-14 items-center justify-center rounded-xl
        bg-gradient-to-br ${stat.gradient} shadow-lg`}
      >
        <stat.icon className="h-7 w-7 text-white" />
      </div>

      {/* VALUE */}
      <div className="mt-8 text-center">
        <h3 className="text-5xl font-extrabold text-gray-900">
          {stat.value % 1 !== 0 ? count : Math.floor(count)}
          <span className="text-gray-700">{stat.suffix}</span>
        </h3>

        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

/* ---------------- SECTION ---------------- */
export function StatsSection({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  const finalStats = reverse ? [...stats].reverse() : stats;

  return (
    <section className="w-full relative bg-gradient-to-b from-gray-50 to-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Proven Global Impact
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-600">
            Delivering consistent results across industries worldwide
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {finalStats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
