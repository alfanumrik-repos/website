import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  DifferentiatorSection,
  CapabilitiesSection,
  CaseStudiesSection,
  TrustSection,
  CTASection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <DifferentiatorSection />
        <CapabilitiesSection />
        <CaseStudiesSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

