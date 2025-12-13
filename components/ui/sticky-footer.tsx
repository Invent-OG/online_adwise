"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { Mail, Phone, Globe, ArrowUpRight } from "lucide-react";

type StickyFooterProps = React.ComponentProps<"footer">;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn("relative h-[500px] w-full", className)}
      style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
      {...props}
    >
      <div className="fixed bottom-0 h-[500px] w-full bg-black">
        <div className="sticky top-[calc(100vh-500px)] h-full">
          <div className="relative h-full border-t border-white/10 px-8 md:px-14 py-12">
            
            {/* SUBTLE ACCENT */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(223,176,37,0.10),transparent_70%)]" />
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

              {/* COL 1: BRAND (Span 3) */}
              <AnimatedContainer className="md:col-span-3">
                <div className="space-y-6 max-w-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl bg-[#DFB025] flex items-center justify-center shadow-[0_8px_28px_rgba(223,176,37,0.35)]">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Online Adwise
                      </h3>
                      <p className="text-[11px] tracking-widest text-neutral-500">
                        POWERED BY NAREN METHOD™
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Growth & Paid Ads Consultation powered by
                    <br />
                    The <span className="text-white">NAREN Method™</span>
                  </p>

                  <p className="text-sm font-medium text-[#DFB025]">
                    Smarter Decisions. Stronger Funnels.
                  </p>
                </div>
              </AnimatedContainer>

              {/* COL 2: QUICK LINKS (Span 3) */}
              <AnimatedContainer delay={0.15} className="md:col-span-3">
                <h4 className="text-sm font-semibold text-white mb-6">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2.5 text-sm text-neutral-400">
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Home
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Services
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Testimonials
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Contact
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      About
                    </li>
                  </ul>
                  <ul className="space-y-2.5 text-sm text-neutral-400">
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Work
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Packages
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Store
                    </li>
                  </ul>
                </div>
              </AnimatedContainer>

              {/* COL 3: NICHES + TOOLS (Span 6) */}
              <AnimatedContainer delay={0.25} className="md:col-span-6">
                <h4 className="text-sm font-semibold text-white mb-6">
                  Niches We Serve
                </h4>
                
                {/* 3-Column Niche Grid */}
                <div className="grid grid-cols-3 gap-4 mb-10 text-sm text-neutral-400">
                  <ul className="space-y-2.5">
                    <li>Dentist</li>
                    <li>Chiropractor</li>
                    <li>Painter</li>
                    <li>Pest Control</li>
                    <li>Carpet Cleaner</li>
                  </ul>
                  <ul className="space-y-2.5">
                    <li>Physical Therapist</li>
                    <li>Roofer</li>
                    <li>Lawyer</li>
                    <li>Plumber</li>
                    <li>Electrician</li>
                  </ul>
                  <ul className="space-y-2.5">
                    <li>HVAC</li>
                    <li>Bookkeeper</li>
                  </ul>
                </div>

                {/* Tools We Use */}
                <div>
                  <h5 className="text-xs font-semibold text-white mb-3">
                    Tools We Use
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Meta",
                      "Google",
                      "GHL",
                      "Zapier",
                      "Make",
                      "N8n",
                      "GA4",
                      "GTM",
                      "Calendars",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-[#DFB025]/30 px-3 py-1 text-[11px] font-medium text-[#DFB025]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedContainer>

            </div>

            {/* BOTTOM BAR */}
            <div className="absolute bottom-6 left-0 right-0 px-8 md:px-14">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-neutral-500">
                <p>
                  © 2025 Online Adwise™. All rights reserved. Powered by the
                  NAREN Method™
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

/* COLUMN */
function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="space-y-2 text-sm text-neutral-400">
        {children}
      </ul>
    </div>
  );
}

/* MOTION */
function AnimatedContainer({
  delay = 0.1,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
