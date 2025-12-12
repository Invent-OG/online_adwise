"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-bg-shape",
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
          },
          0
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-24 text-center md:px-8"
    >
      {/* Background Shapes */}
      <div className="hero-bg-shape absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl filter md:h-96 md:w-96" />
      <div className="hero-bg-shape absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl filter md:h-96 md:w-96" />
      <div className="hero-bg-shape absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl filter" />

      <div className="z-10 max-w-5xl space-y-8">
        <h1 className="hero-text text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Transform Your <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Digital Presence
          </span>
        </h1>
        <p className="hero-text mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
          We build modern, scalable, and high-performance web applications tailored to your business needs. Elevate your brand with our expert solutions.
        </p>
        <div className="hero-buttons flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
