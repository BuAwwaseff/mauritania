import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import BenefitsSection from "@/components/partnership/BenefitsSection";
import FinalCTASection from "@/components/partnership/FinalCTASection";
import HeroSection from "@/components/partnership/HeroSection";
import HowItWorksSection from "@/components/partnership/HowItWorksSection";
import PathsSection from "@/components/partnership/PathsSection";
import { marketMetadata } from "@/lib/market";

export const metadata = marketMetadata;

export default function PartnershipPage() {
  return (
    <>
      <main className="pb-4">
        <HeroSection />
        <SectionDivider />
        <BenefitsSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <PathsSection />
        <SectionDivider />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
