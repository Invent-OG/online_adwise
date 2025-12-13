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
    <section className="w-full bg-white py-32">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold mb-4">
            Video Package Store
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Explainer Video Packs
          </h2>

          <p className="mt-6 text-lg text-black/65 max-w-xl">
            A powerful add-on included in our consulting ecosystem. Three
            ready-to-use video formats for 20+ local business niches.
          </p>

          <div className="mt-10 space-y-2 text-sm text-black/70">
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
            <Card className="p-8">
              <span className="text-yellow-400 font-bold">01</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Commercial Video
              </h3>
              <p className="text-black/80 text-sm">
                High-impact animations designed to trigger immediate action.
              </p>
              <p className="text-black/60 text-sm mt-4">
                Meta Ads, YouTube Ads, Landing Page Hero Sections
              </p>
            </Card>

            {/* CARD 2 */}
            <Card className="p-8">
              <span className="text-yellow-400 font-bold">02</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Explainer Video
              </h3>
              <p className="text-black/80 text-sm">
                Question-based, educational videos ideal for awareness.
              </p>
              <p className="text-black/60 text-sm mt-4">
                YouTube SEO, Website trust-building, Top-of-funnel ads
              </p>
            </Card>

            {/* CARD 3 */}
            <Card className="p-8">
              <span className="text-yellow-400 font-bold">03</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Storytelling Video
              </h3>
              <p className="text-black/80 text-sm">
                Emotion-driven brand story videos for deep connection.
              </p>
              <p className="text-black/60 text-sm mt-4">
                Retargeting & credibility building
              </p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

export default VideoPacks;
