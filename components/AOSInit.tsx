"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return null;
}
