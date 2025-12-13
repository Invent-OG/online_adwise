"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  TrendingDown,
  CalendarCheck,
  PhoneCall,
  UserCheck,
  XCircle,
  ArrowRight,
  Search,
  Filter,
  PenTool,
  Maximize2,
  Repeat
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { id: "01", title: "Navigate", desc: "Research & Positioning", icon: Search },
  { id: "02", title: "Analyze", desc: "Offer & Funnel Audit", icon: Filter },
  { id: "03", title: "Refine", desc: "Copy & Creatives", icon: PenTool },
  { id: "04", title: "Expand", desc: "Scaling & Retargeting", icon: Maximize2 },
  { id: "05", title: "Nurture", desc: "CRM & Automation", icon: Repeat },
];

const challenges = [
  "Zero Tracking Installed",
  "No Consistent Leads",
  "No Proven Offer",
  "Wasted Ad Budget",
  "Broken Sales Funnel"
];

export default function CaseStudy() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const verticalLineRef = useRef(null);
  
  // Array of refs for step dots
  const dotsRefs = useRef<Array<HTMLDivElement | null>>([]);
  // Array of refs for content
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

 useEffect(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    // Desktop horizontal animation
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 0.5,
        },
      }
    );
  });

  mm.add("(max-width: 767px)", () => {
    // Mobile vertical animation
    gsap.fromTo(
      verticalLineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 0.5,
        },
      }
    );
  });

  return () => mm.revert();
}, []);


  return (
    <section ref={sectionRef} className="w-full py-24 px-6 relative overflow-visible">
      <div className="max-w-6xl mx-auto">
        
        {/* === HEADER === */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-yellow-700 uppercase">Case Study</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            HVAC Growth <span className="text-slate-400">Partner</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            How we transformed a local HVAC business from zero online presence to a market leader in 42 days.
          </p>
        </div>

        {/* === MAIN BENTO GRID === */}
        <div className="grid lg:grid-cols-12 gap-8 mb-32">
          
          {/* Left Column: Challenges (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <XCircle className="text-red-500" />
                Initial Challenges
              </h3>
              <div className="space-y-4">
                {challenges.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/60 hover:shadow-md transition-all duration-300 group">
                    <div className="w-2 h-2 rounded-full bg-red-400 group-hover:scale-150 transition-transform" />
                    <span className="text-slate-600 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Results (Span 8) */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6 h-full">
              
              {/* Result Card 1 */}
              <div className="p-8 rounded-[32px] bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-xl shadow-yellow-900/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                <CalendarCheck className="w-10 h-10 mb-4 text-yellow-200" />
                <div className="text-5xl font-bold mb-2 tracking-tight">74</div>
                <div className="text-yellow-100 font-medium">Booked Appointments</div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs bg-white/20 px-3 py-1 rounded-full">
                  <TrendingUp size={12} />
                  <span>In 30 Days</span>
                </div>
              </div>

              {/* Result Card 2 */}
              <div className="p-8 rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <TrendingDown className="w-10 h-10 mb-4 text-emerald-500" />
                <div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">47%</div>
                <div className="text-slate-500 font-medium">Reduction in CPL</div>
                <p className="text-xs text-slate-400 mt-2">Optimized ad spend efficiency</p>
              </div>

              {/* Result Card 3 */}
              <div className="p-8 rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <PhoneCall className="w-10 h-10 mb-4 text-purple-500" />
                <div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">3X</div>
                <div className="text-slate-500 font-medium">Inbound Call Volume</div>
                <p className="text-xs text-slate-400 mt-2">Qualified local leads</p>
              </div>

              {/* Result Card 4 */}
              <div className="p-8 rounded-[32px] bg-slate-900 text-white shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
                <UserCheck className="w-10 h-10 mb-4 text-yellow-400 relative z-10" />
                <div className="text-3xl font-bold mb-2 relative z-10">Full-Time</div>
                <div className="text-slate-400 font-medium relative z-10">Growth Partner</div>
                <div className="absolute bottom-6 right-6 p-2 bg-yellow-600 rounded-full">
                  <ArrowRight size={20} />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* === ANIMATED TIMELINE === */}
        <div ref={timelineRef} className="relative pt-4 pb-12">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-slate-900">The NAREN Method™</h3>
            <p className="text-slate-500">Our proprietary execution framework</p>
          </div>

          {/* Desktop Horizontal Line Track */}
          {/* Positioned absolutely to sit behind the dots. Top-28 corresponds to roughly 112px, aligning with dot center */}
          <div className="hidden md:block absolute top-[11rem] left-0 w-full h-0.5 bg-slate-200 rounded-full overflow-hidden">
             {/* The Fill Line */}
             <div ref={lineRef} className="h-full bg-gradient-to-r from-yellow-200 to-yellow-600 origin-left" />
          </div>

          {/* Mobile Vertical Line Track */}
          <div
  className="md:hidden absolute top-[180px] left-[23px] w-0.5 h-[calc(100%-180px)] bg-slate-200 overflow-hidden"
>
  <div
    ref={verticalLineRef}
    className="w-full h-full bg-gradient-to-b from-yellow-200 to-yellow-600 origin-top"
  />
</div>


          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  ref={(el) => { contentRefs.current[index] = el; }}
                  className="flex md:flex-col items-start md:items-center text-left md:text-center group"
                >
                  
                  {/* Icon (Top on Desktop, Right of line on Mobile) */}
                  <div className="mb-0 md:mb-6 pl-16 md:pl-0 order-2 md:order-1 flex-1">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-center mb-4 md:mb-6 relative transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-yellow-200 group-hover:border-yellow-200 mx-auto md:mx-auto ml-0">
                      <span className="absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] md:text-xs font-bold border-4 border-slate-50">
                        {step.id}
                      </span>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" strokeWidth={1.5} />
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-yellow-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Connector Dot */}
                  {/* On Mobile: Absolute positioned to left. On Desktop: In flow between Icon and Text */}
                  <div 
                     ref={(el) => { dotsRefs.current[index] = el; }}
                     className="absolute md:hidden left-[16px] md:static md:left-auto order-1 md:order-2 w-4 h-4 rounded-full border-[3px] shadow-sm z-20 mt-[2.5rem] md:mt-0 md:mb-6 bg-white border-slate-300"
                  />
                  
                  {/* Spacer for Flex Order on Desktop */}
                  <div className="hidden md:block order-3 h-0" />
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}