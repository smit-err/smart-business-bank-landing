import CTASection from "@/componets/cta-section";
import FeatureSection from "@/componets/feature-section";
import HeroSection from "@/componets/hero-section";
import PricingSection from "@/componets/pricing-section";
import SocialProofSection from "@/componets/social-proof-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <SocialProofSection />
      <CTASection />
    </>
  );
}
