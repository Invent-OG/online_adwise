"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Home,
  Dumbbell,
  ShoppingCart,
  Sparkles,
  Cloud,
  Store,
  GraduationCap,
  Paintbrush,
  Stethoscope,
  Landmark,
  Video,
  Users,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

interface NicheItem {
  name: string;
  icon: LucideIcon;
  description: string;
  image: string;
}

const niches: NicheItem[] = [
  {
    name: "Coaches & Consultants",
    icon: Briefcase,
    description: "Personal brand scaling.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Real Estate",
    icon: Home,
    description: "Property market growth.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fitness & Gyms",
    icon: Dumbbell,
    description: "Health & wellness leads.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    description: "Online retail sales.",
    image:
      "https://images.unsplash.com/photo-1556742046-1596708034d6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Beauty & Skincare",
    icon: Sparkles,
    description: "Aesthetics & cosmetics.",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "SaaS",
    icon: Cloud,
    description: "Software user acquisition.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Local Businesses",
    icon: Store,
    description: "Foot traffic & awareness.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Education & EdTech",
    icon: GraduationCap,
    description: "Platform expansion.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Interior Designers",
    icon: Paintbrush,
    description: "High-ticket styling.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Doctors & Clinics",
    icon: Stethoscope,
    description: "Patient booking flow.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Financial Consultants",
    icon: Landmark,
    description: "Wealth management.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Course Creators",
    icon: Video,
    description: "Digital product launch.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Influencers",
    icon: Users,
    description: "Engagement & reach.",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80",
  },
];

export default function NichesSpecialize() {
  return (
    <section className="w-full py-24 overflow-hidden relative bg-[#F5F7FA]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
          Niches We <br /> <span className="text-neutral-600">Specialize In</span>
        </h2>
        <p className="text-base text-neutral-600">
          Data-driven growth across premium industries.
        </p>
      </div>

      {/* Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F7FA] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F7FA] to-transparent z-10" />

      {/* Marquee */}
      <motion.div
        className="flex gap-6 w-max px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...niches, ...niches].map((item, i) => (
          <MarqueeCard key={i} item={item} />
        ))}
      </motion.div>
    </section>
  );
}

function MarqueeCard({ item }: { item: NicheItem }) {
  const Icon = item.icon;

  return (
    <div className="w-[260px] shrink-0 group rounded-[26px] overflow-hidden bg-white/60 backdrop-blur-xl border border-white/60 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="h-40 relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
          <Icon size={16} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-yellow-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-neutral-500 mb-4">{item.description}</p>

        <div className="flex items-center text-yellow-600 font-semibold text-sm">
          Explore Niche
          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
}
