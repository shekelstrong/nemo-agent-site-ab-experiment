import { Header } from "@/components/sections/Header";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";

export const metadata = { title: "Тарифы — Nemo Agent" };

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
