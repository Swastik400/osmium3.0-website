import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { PlatformIntro } from "@/components/sections/PlatformIntro";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { APIIntro } from "@/components/sections/APIIntro";
import { APIShowcase } from "@/components/sections/APIShowcase";
import { APIShowcase2 } from "@/components/sections/APIShowcase2";
import { AllDevices } from "@/components/sections/AllDevices";
import { InstituteFeatures } from "@/components/sections/InstituteFeatures";
import { ResearchIntro } from "@/components/sections/ResearchIntro";
import { Comparison } from "@/components/sections/Comparison";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      {/* ━━━ ACT 1: HOOK ━━━ */}
      {/* Hero: Who we are + interactive product demo */}
      <Hero />

      {/* Social proof: logos */}
      <TrustedBy />

      {/* ━━━ ACT 2: PRODUCT ━━━ */}
      {/* Platform intro heading + description */}
      <PlatformIntro />

      {/* Deep dive: 2 large feature cards + 4 small icon cards */}
      <BentoGrid />

      {/* All features with mockups */}
      <FeatureShowcase />

      {/* Partner testimonials with auto-rotate */}
      <Testimonials />

      {/* ━━━ ACT 3: FOR INSTITUTES (API/INTEGRATION) ━━━ */}
      {/* Institute integration heading */}
      <APIIntro />

      {/* API showcase: code snippet */}
      <APIShowcase />

      {/* API showcase: analytics dashboard */}
      <APIShowcase2 />

      {/* Available on all devices */}
      <AllDevices />

      {/* Osmium AI for Institutes */}
      <InstituteFeatures />

      {/* ━━━ ACT 5: RESEARCH & JOURNEY ━━━ */}
      {/* Research heading */}
      <ResearchIntro />

      {/* Osmium vs Traditional Learning */}
      <Comparison />

      {/* ━━━ ACT 7: LATEST + ABOUT ━━━ */}


      {/* Team section */}
      <Team />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
