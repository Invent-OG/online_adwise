import Hero from "@/components/Hero";
import { StatsSection } from "@/components/stats-section";
import { WhoWeAre } from "@/components/who-we-are";
import { ServiceMarquee } from "@/components/service-marquee";
import StickyCard from "@/components/StickyCard";
import { AdService } from "@/components/ad-service";
import BeyondAds from "@/components/BeyondAds";
import VideoPacks from "@/components/VideoPacks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <StatsSection />
      <WhoWeAre />
      <ServiceMarquee />
      <StickyCard />
      <AdService />
      <BeyondAds />
      <VideoPacks />
    </main>
  );
}