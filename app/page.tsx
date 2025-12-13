import Hero from "@/components/Hero";
import { StatsSection } from "@/components/stats-section";
import { WhoWeAre } from "@/components/who-we-are";
import { ServiceMarquee } from "@/components/service-marquee";
import StickyCard from "@/components/StickyCard";
import { AdService } from "@/components/ad-service";
import BeyondAds from "@/components/BeyondAds";
import VideoPacks from "@/components/VideoPacks";
import Niches from "@/components/Niches";
import Pricing from "@/components/Pricing";
import NichesSpecialize from "@/components/NichesSpecialize";
import GrowthInfrastructure from "@/components/GrowthInfrastructure";
import ToolWeUse from "@/components/ToolWeUse";
import PricingTwo from "@/components/PricingTwo";
import CaseStudy from "@/components/CaseStudy";
import WhyOnlineAdwise from "@/components/WhyOnlineAdwise";

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
      <Niches/>
      <Pricing/>
      <NichesSpecialize/>
      <GrowthInfrastructure/>
      <ToolWeUse/>
      <PricingTwo/>
      <CaseStudy/>
      <WhyOnlineAdwise/>
    </main>
  );
}