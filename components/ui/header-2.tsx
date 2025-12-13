"use client";
import React, { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/" },
    { label: "About", href: "/" },
    { label: "Contact", href: "/" },
    { label: "Project Wellness", href: "/" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Check if scrolled past a threshold to add background
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide/Show logic
    if (latest > previous && latest > 150) {
      setHidden(true); // Scrolling down & past 150px -> Hide
    } else {
      setHidden(false); // Scrolling up or at top -> Show
    }
  });

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-4 left-0 right-0 z-50 mx-auto w-full max-w-6xl rounded-full border border-white/5 transition-all duration-300 ease-out",
        "backdrop-blur-sm bg-transparent", // Default transparent state
        {
          "bg-black/80 backdrop-blur-xl border-white/10 shadow-lg": scrolled, // Scrolled state
          "bg-black": open, // Mobile menu open state
        }
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-16 md:px-6 transition-all duration-300 ease-out"
        )}
      >
        <span className="font-extrabold text-xl tracking-tight text-white/90">
          Online<span className="text-[#DFB025]">Adwise</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link, i) => (
            <a
              key={i}
              className={buttonVariants({
                variant: "ghost",
                className:
                  "text-white/80 hover:text-[#DFB025] hover:bg-white/5 font-medium transition-colors",
              })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 mt-2 z-50 flex flex-col rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 overflow-hidden",
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col p-4 gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({
                variant: "ghost",
                className:
                  "justify-start text-lg py-3 rounded-xl text-white/90 hover:text-[#DFB025] hover:bg-white/5",
              })}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
