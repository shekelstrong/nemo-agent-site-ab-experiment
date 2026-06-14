import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { SkillsLibrary } from "@/components/sections/SkillsLibrary";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { StickyCta } from "@/components/StickyCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillsLibrary />
        <HowItWorks />
        <Pricing />
        <PricingCalculator />
        <ComparisonTable />
        <FAQ />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
