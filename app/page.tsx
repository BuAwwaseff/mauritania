import Footer from "@/components/Footer";
import CasinoSection from "@/components/home/CasinoSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import PromosSection from "@/components/home/PromosSection";
import SportsSection from "@/components/home/SportsSection";
import SectionDivider from "@/components/SectionDivider";
import { homeMetadata } from "@/lib/market";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <main className="pb-4">
        <HomeHeroSection />
        <SectionDivider />
        <SportsSection />
        <SectionDivider />
        <CasinoSection />
        <SectionDivider />
        <PromosSection />
      </main>
      <Footer />
    </>
  );
}
