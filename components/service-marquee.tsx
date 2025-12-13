"use client";

import React from "react";
import { motion } from "framer-motion";
import { Dices, Star } from "lucide-react";

const services = [
  "SEO Optimization",
  "Digital Marketing",
  "Website Development",
  "GBP Management",
  "Content Strategy",
  "Social Media Marketing",
];

export function ServiceMarquee() {
  return (
    <section
      data-aos="fade-up"
      className="relative w-full overflow-hidden py-16"
    >
      <div className="flex">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap"
        >
          {[...services, ...services, ...services, ...services].map(
            (service, index) => (
              <div key={index} className="flex items-center">
                <span className="mx-8 text-5xl font-black uppercase tracking-tight text-white/90 sm:text-5xl">
                  {service}
                </span>
                <Dices className="h-8 w-8 fill-yellow-600 text-yellow-600 sm:h-12 sm:w-12" />{" "}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
