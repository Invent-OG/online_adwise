"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Stethoscope,
  Activity,
  Paintbrush,
  Bug,
  Sparkles,
  Baby,
  Dumbbell,
  Home,
  Scale,
  HeartPulse,
  User,
  Wrench,
  Gavel,
  Building2,
  Droplet,
  Zap,
  Snowflake,
  BookOpen,
} from "lucide-react";

function Niches() {
  const niches = [
    { icon: Stethoscope, name: "Dentist" },
    { icon: Activity, name: "Chiropractor" },
    { icon: Paintbrush, name: "Painter" },
    { icon: Bug, name: "Pest Control" },
    { icon: Sparkles, name: "Carpet Cleaner" },
    { icon: Baby, name: "Pediatric Dentist" },
    { icon: Dumbbell, name: "Physical Therapist" },
    { icon: Home, name: "Roofer" },
    { icon: Scale, name: "Bankruptcy Lawyer" },
    { icon: HeartPulse, name: "Senior Care" },
    { icon: User, name: "Pediatrician" },
    { icon: Activity, name: "Massage Therapist" },
    { icon: Wrench, name: "Plumber" },
    { icon: Gavel, name: "DUI Lawyer" },
    { icon: Building2, name: "Insurance Agency" },
    { icon: Droplet, name: "Dermatologist" },
    { icon: Zap, name: "Electrician" },
    { icon: Snowflake, name: "HVAC Contractor" },
    { icon: Scale, name: "Personal Injury Lawyer" },
    { icon: BookOpen, name: "Bookkeeper" },
  ];

  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate niche items
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.05,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
      });

      // Hover effects
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div data-aos="fade-up" className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER - Modern design */}
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-yellow-500 uppercase tracking-widest mb-4 text-xs font-semibold">
              20+ Local Business Niches
            </p>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            <span className="block">Built for Proven</span>
            <span className="relative inline-block">
              <span className="text-neutral-600">
                 Industries
              </span>
            </span>
          </h2>

          <p className="text-base max-w-sm mx-auto text-neutral-600 leading-relaxed ">
            Each niche pack is pre-engineered using real market behavior,
            buyer psychology, and platform-specific ad patterns.
          </p>
        </div>

        {/* NICHE GRID - Modern card design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-32">
          {niches.map((niche, i) => {
            const Icon = niche.icon;
            return (
              <div
                key={i}
ref={(el) => {
  itemsRef.current[i] = el;
}}
                className="group relative cursor-pointer"
              >
                {/* Card background with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 group-hover:border-yellow-500/30 transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-yellow-500/10" />
                
                {/* Card content */}
                <div className="relative p-6 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    {/* Icon background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    
                    {/* Icon container */}
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 group-hover:border-yellow-500 flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7 text-gray-700 group-hover:text-yellow-600 transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <span className="font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                    {niche.name}
                  </span>
                  
                  {/* Hover indicator */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-full transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* WHAT EACH NICHE GETS - Modern layout */}
        <div className="pt-16 border-t border-gray-200">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-gray-900 mb-4">
      Each Niche Pack Includes
    </h3>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Complete systems designed for maximum performance in each specific industry
    </p>
  </div>

  <div  className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Left side - Feature cards in grid */}
    <div data-aos="fade-up" className="grid grid-cols-2 gap-6">
      {[
        { 
          title: "Video Assets", 
          desc: "3 Signature Conversion Videos",
          icon: "🎬",
          bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
          border: "border-blue-200"
        },
        { 
          title: "Landing Structure", 
          desc: "High-conversion framework",
          icon: "🖥️",
          bg: "bg-gradient-to-br from-emerald-500/10 to-green-500/10",
          border: "border-emerald-200"
        },
        { 
          title: "Ad Angles", 
          desc: "Platform-specific messaging",
          icon: "🎯",
          bg: "bg-gradient-to-br from-yellow-500/10 to-amber-500/10",
          border: "border-yellow-200"
        },
        { 
          title: "Automation", 
          desc: "GHL workflows + scripts",
          icon: "⚡",
          bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
          border: "border-purple-200"
        },
      ].map((feature, i) => (
        <div
          key={i}
          className={`group relative p-6 rounded-2xl border-2 ${feature.border} ${feature.bg} hover:shadow-xl transition-all duration-300`}
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            {feature.title}
          </h4>
          <p className="text-sm text-gray-600">
            {feature.desc}
          </p>
          
          {/* Hover line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full transition-all duration-300" />
        </div>
      ))}
    </div>

    {/* Right side - Benefits list */}
    <div data-aos="fade-down" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
      <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        Niche-Specific Advantages
      </h4>
      
      <div className="space-y-6">
        {[
          "Pre-tested buyer psychology patterns",
          "Industry-specific pain points addressed",
          "Platform-optimized ad creatives",
          "Proven conversion frameworks",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-100 border border-yellow-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-500" />
            </div>
            <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
              {item}
            </p>
          </div>
        ))}
      </div>
      
      {/* Stats ribbon */}
      <div className="mt-10 p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-50 border border-yellow-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-900">Industry Match Rate</span>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-600">
            95%
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

export default Niches;