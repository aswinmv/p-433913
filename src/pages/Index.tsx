
import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import AvailabilityBanner from "@/components/portfolio/AvailabilityBanner";
import Process from "@/components/portfolio/Process";
import CaseStudy from "@/components/portfolio/CaseStudy";
import Services from "@/components/portfolio/Services";
import TechStack from "@/components/portfolio/TechStack";
import ContactForm from "@/components/portfolio/ContactForm";
import FAQ from "@/components/portfolio/FAQ";
import About from "@/components/portfolio/About";
import Footer from "@/components/portfolio/Footer";

// Placeholder images - in a real app, these would be imported or loaded from a CDN
const PROFILE_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/f88528e12d1e9b283150b5143c1840024b28a77b";
const CASE_STUDY_IMAGES = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/9f9c2b2b7bbd999e238b8ff4a410d2c14723b89b",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/e33bdec394a27645dc31709ae1fcd2a5de1e51eb",
];

const Index: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1440px] px-6 max-md:px-4 max-sm:px-3">
          <header>
            <Navbar />
          </header>

          <main className="space-y-4 max-sm:space-y-2 pt-20">
            <Hero profileImage={PROFILE_IMAGE} />
            <AvailabilityBanner />
            <Process />
            <CaseStudy caseStudyImages={CASE_STUDY_IMAGES} />
            <Services />
            <TechStack />
            <ContactForm />
            <FAQ />
            <About />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
