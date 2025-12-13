// "use client";

// import React from "react";

// function VideoPacks() {
//   return (
//     <section className="w-full bg-white py-32">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* HEADER */}
//         <div className="max-w-3xl mb-24">
//           <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold mb-4">
//             Video Package Store
//           </p>

//           <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
//             Explainer Video Packs
//           </h2>

//           <p className="mt-6 text-lg text-black/65">
//             A productized video system inside our consulting ecosystem.
//             Three ready-to-use formats built for 20+ local business niches.
//           </p>
//         </div>

//         {/* CONTENT */}
//         <div className="relative">
//           {/* Vertical Rail */}
//           <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-yellow-500/20 hidden md:block" />

//           <div className="space-y-24">
//             {/* ITEM 1 */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//               {/* INDEX */}
//               <div className="md:col-span-1 flex md:justify-center">
//                 <span className="text-yellow-500 font-bold text-lg">
//                   01
//                 </span>
//               </div>

//               {/* CONTENT */}
//               <div className="md:col-span-11">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4">
//                   Commercial Video
//                 </h3>

//                 <p className="text-black/70 max-w-2xl mb-6">
//                   High-impact animated videos designed to trigger immediate
//                   action and capture attention in seconds.
//                 </p>

//                 <div className="flex flex-wrap gap-4 text-sm text-black/70">
//                   <span className="px-4 py-2 rounded-full bg-yellow-500/10">
//                     Meta Ads
//                   </span>
//                   <span className="px-4 py-2 rounded-full bg-yellow-500/10">
//                     YouTube Ads
//                   </span>
//                   <span className="px-4 py-2 rounded-full bg-yellow-500/10">
//                     Landing Page Hero
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* ITEM 2 */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//               <div className="md:col-span-1 flex md:justify-center">
//                 <span className="text-yellow-500 font-bold text-lg">
//                   02
//                 </span>
//               </div>

//               <div className="md:col-span-11">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4">
//                   Explainer Video
//                 </h3>

//                 <p className="text-black/70 max-w-2xl mb-6">
//                   Question-driven, educational videos that build understanding,
//                   trust, and awareness before the sale.
//                 </p>

//                 <div className="flex flex-wrap gap-4 text-sm text-black/70">
//                   <span className="px-4 py-2 rounded-full bg-yellow-500/10">
//                     YouTube SEO
//                   </span>
//                   <span className="px-4 py-2 rounded-full bg-yellow-500/10">
//                     Website Trust
//                   </span>
//                   <span className="px-4 py-2 rounded-full bg-yellow-500/10">
//                     Top-of-Funnel Ads
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* ITEM 3 */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//               <div className="md:col-span-1 flex md:justify-center">
//                 <span className="text-yellow-500 font-bold text-lg">
//                   03
//                 </span>
//               </div>

//               <div className="md:col-span-11">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4">
//                   Storytelling Video
//                 </h3>

//                 <p className="text-black/70 max-w-2xl mb-6">
//                   Emotion-driven brand stories crafted to create trust,
//                   credibility, and long-term connection.
//                 </p>

//                 <div className="flex flex-wrap gap-4 text-sm text-black/70">
//                   <span className="px-4 py-2 rounded-full bg-yellow-500/10">
//                     Retargeting
//                   </span>
//                   <span className="px-4 py-2 rounded-full bg-yellow-500/10">
//                     Brand Credibility
//                   </span>
//                   <span className="px-4 py-2 rounded-full bg-yellow-500/10">
//                     Relationship Building
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FOOTER STRIP */}
//         <div className="mt-32 pt-14 border-t border-black/10">
//           <h4 className="text-lg font-semibold text-black mb-8">
//             All Video Packs Include
//           </h4>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-black/70">
//             <div>→ US & UK Voiceovers</div>
//             <div>→ Logo & Business Detail Insertion</div>
//             <div>→ Ready for Ads, Website & YouTube</div>
//             <div>→ No Customization Required</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default VideoPacks;
"use client";

import React from "react";
import CardSwap, { Card } from "./CardSwap";

function VideoPacks() {
  return (
    <section className="w-full bg-black py-32">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div data-aos="fade-up">
          <p className="text-yellow-600 uppercase tracking-widest text-xs font-semibold mb-4">
            Video Package Store
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Explainer Video Packs
          </h2>

          <p className="mt-6 text-lg text-neutral-400 max-w-xl">
            A powerful add-on included in our consulting ecosystem. Three
            ready-to-use video formats for 20+ local business niches.
          </p>

          <div className="mt-10 space-y-2 text-sm text-neutral-300">
            <div>→ US & UK voiceovers</div>
            <div>→ Logo + business detail insertion</div>
            <div>→ Ready for ads, website, social & YouTube</div>
            <div>→ No customization required</div>
          </div>
        </div>

        {/* RIGHT ANIMATION */}
        <div className="relative h-[420px]">
          <CardSwap>
            {/* CARD 1 */}
            <Card className="p-8 space-y-4 bg-neutral-900 border-white/10">
              <span className="text-yellow-500 font-bold">01</span>

              <h3 className="text-xl font-semibold mt-4 text-white">
                Commercial Video
              </h3>

              {/* EXISTING CONTENT (UNCHANGED) */}
              <p className="text-neutral-300 text-sm leading-relaxed">
                High-impact animations designed to trigger immediate action.
              </p>

              <p className="text-neutral-500 text-sm">
                Meta Ads, YouTube Ads, Landing Page Hero Sections
              </p>

              {/* ADDED PROFESSIONAL CONTEXT */}
              <p className="text-neutral-400 text-sm leading-relaxed">
                Built to capture attention within the first few seconds, these
                videos focus on clarity, speed, and visual hooks that stop the
                scroll and communicate value instantly.
              </p>

              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>• Optimized for paid traffic performance</li>
                <li>• Strong hooks, bold messaging, fast pacing</li>
                <li>• Designed to drive clicks, leads, and conversions</li>
              </ul>
            </Card>

            {/* CARD 2 */}
            <Card className="p-8 space-y-4 bg-neutral-900 border-white/10">
              <span className="text-yellow-500 font-bold">02</span>

              <h3 className="text-xl font-semibold mt-4 text-white">
                Explainer Video
              </h3>

              {/* EXISTING CONTENT (UNCHANGED) */}
              <p className="text-neutral-300 text-sm leading-relaxed">
                Question-based, educational videos ideal for awareness.
              </p>

              <p className="text-neutral-500 text-sm">
                YouTube SEO, Website trust-building, Top-of-funnel ads
              </p>

              {/* ADDED PROFESSIONAL CONTENT */}
              <p className="text-neutral-400 text-sm leading-relaxed">
                Designed to answer common buyer questions and simplify complex
                services, these videos position your brand as a trusted
                authority before the sales conversation begins.
              </p>

              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>• Educates cold audiences without selling</li>
                <li>• Increases watch time and engagement</li>
                <li>• Builds familiarity and brand confidence</li>
              </ul>
            </Card>

            {/* CARD 3 */}
            <Card className="p-8 space-y-4 bg-neutral-900 border-white/10">
              <span className="text-yellow-500 font-bold">03</span>

              <h3 className="text-xl font-semibold text-white">
                Storytelling Video
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed">
                Emotion-driven brand story videos crafted to build trust,
                authority, and long-term emotional connection with your
                audience.
              </p>

              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>• Ideal for retargeting & warm audiences</li>
                <li>• Builds credibility & brand recall</li>
                <li>• Converts attention into trust</li>
              </ul>

              <p className="text-neutral-500 text-sm">
                Best used across retargeting ads, website about sections, and
                credibility-focused funnels.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-600/10 text-yellow-500">
                  Retargeting
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-600/10 text-yellow-500">
                  Brand Trust
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-600/10 text-yellow-500">
                  Storytelling
                </span>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

export default VideoPacks;
