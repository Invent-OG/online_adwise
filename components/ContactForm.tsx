"use client";

import React from "react";
import { Mail, Phone, Globe, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full bg-black py-28" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — CONTACT INFO */}
          <div data-aos="fade-right" className="space-y-10">
            <div>
              <p className="text-[#DFB025] uppercase tracking-widest text-xs font-semibold mb-4">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Let’s Scale Your <br />
                <span className="text-neutral-500">Business Today.</span>
              </h2>
              <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-sm">
                Ready to stop guessing and start growing? Reach out to us and
                deploy the NAREN Method™ in your business.
              </p>
            </div>

            <div className="space-y-6">
              {/* ITEM 1 */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#DFB025]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <a
                    href="mailto:info.onlineadwise@gmail.com"
                    className="text-neutral-400 hover:text-[#DFB025] transition-colors"
                  >
                    info.onlineadwise@gmail.com
                  </a>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#DFB025]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <a
                    href="tel:+917065578055"
                    className="text-neutral-400 hover:text-[#DFB025] transition-colors"
                  >
                    +91-7065578055
                  </a>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#DFB025]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Global Reach
                  </h4>
                  <p className="text-neutral-400 max-w-xs">
                    Serving clients in USA, UK, Canada, Australia, and UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div
            data-aos="fade-left"
            className="rounded-3xl border border-white/10 bg-neutral-900/50 p-8 md:p-10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#DFB025] focus:ring-1 focus:ring-[#DFB025] outline-none transition-all"
                  />
                </div>
                {/* PHONE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#DFB025] focus:ring-1 focus:ring-[#DFB025] outline-none transition-all"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#DFB025] focus:ring-1 focus:ring-[#DFB025] outline-none transition-all"
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business goals..."
                  className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-[#DFB025] focus:ring-1 focus:ring-[#DFB025] outline-none transition-all resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 rounded-xl bg-[#DFB025] border border-[#DFB025] px-8 py-4 text-black font-semibold transition-all hover:bg-[#DFB025] hover:text-black hover:shadow-[0_0_30px_rgba(223,176,37,0.3)] active:scale-[0.98] mt-4"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}