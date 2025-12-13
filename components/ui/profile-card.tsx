"use client";

import React, { useRef } from "react";
import styles from "./profile-card.module.css";
import { BrainCircuit, Filter, Zap, Activity, Video, Bot } from "lucide-react";
import { useInView } from "framer-motion";

const features = [
  { name: "Buyer Psychology", icon: BrainCircuit },
  { name: "Funnel Design", icon: Filter },
  { name: "High-Performance Ads", icon: Zap },
  { name: "Behavior Analytics", icon: Activity },
  { name: "Video Leverage", icon: Video },
  { name: "GHL Automations", icon: Bot },
];

export function ProfileCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className={styles.wrapper} ref={ref}>
      <aside className={`${styles.profileCard} ${isInView ? styles.animating : ""}`}>
        <header className={styles.header}>
            
          {/* Name */}
          <h1>The NAREN Method™</h1>

          {/* Role */}
          <h2 className=" text-[#ffffff]" >Growth Architecture</h2>
        </header>

        {/* Features List */}
        <div className={styles.profileBio}>
          <div className="grid grid-cols-1 gap-6 text-left">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <feature.icon size={16} className="text-[#DFB025]" />
                <span className="text-xs font-bold text-[#ffffff]">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className={styles.footer}>
          <p className="mt-10">
            Stop guessing. Start scaling with a system built for predictability.
          </p>
          <button className={styles.ctaButton}>
            Explore the System
          </button>
        </div>
      </aside>
    </div>
  );
}
