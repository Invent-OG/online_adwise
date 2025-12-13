"use client";

import React from "react";
import styles from "./electric-card.module.css";
import { BrainCircuit, Filter, Zap, Activity, Video, Bot } from "lucide-react";

const features = [
  { name: "Buyer Psychology", icon: BrainCircuit },
  { name: "Funnel Design", icon: Filter },
  { name: "High-Performance Ads", icon: Zap },
  { name: "Behavior Analytics", icon: Activity },
  { name: "Video Leverage", icon: Video },
  { name: "GHL Automations", icon: Bot },
];

export function ElectricCard() {
  return (
    <div className={styles.mainContainer}>
      <svg className={styles.svgContainer}>
        <defs>
          <filter
            id="turbulent-displace"
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="1"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate
                attributeName="dy"
                values="700; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="1"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate
                attributeName="dy"
                values="0; -700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="2"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate
                attributeName="dx"
                values="490; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="2"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate
                attributeName="dx"
                values="0; -490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend
              in="part1"
              in2="part2"
              mode="color-dodge"
              result="combinedNoise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      <div className={styles.cardContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.borderOuter}>
             {/* Main card border effect */}
          </div>
           <div className={styles.mainCard}></div>
          <div className={styles.glowLayer1}></div>
          <div className={styles.glowLayer2}></div>
        </div>

        <div className={styles.overlay1}></div>
        <div className={styles.overlay2}></div>
        <div className={styles.backgroundGlow}></div>

        <div className={styles.contentContainer}>
          <div className={styles.contentTop}>
            <div className={styles.scrollbarGlass}>Growth Architecture</div>
            <p className={styles.title}>The NAREN Method™</p>
            
            <div className="mt-8 space-y-3">
               {features.slice(0, 6).map((feature) => (
                  <div key={feature.name} className="flex items-center gap-3 text-white/80">
                     <feature.icon className="h-5 w-5 text-[#dd8448]" />
                     <span className="text-sm font-medium">{feature.name}</span>
                  </div>
               ))}
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.contentBottom}>
            <p className={styles.description}>
              A proprietary psychological framework designed for predictable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
