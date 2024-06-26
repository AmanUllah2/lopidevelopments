"use client";
import BlurryCursor from "@/components/mouse-effects/BlurryCursor";
import ScreenLoader from "@/components/loaders/ScreenLoader";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TalkNowButton from "@/components/buttons/TalkNowButton";
import MetaData from "@/components/seo/MetaData";
import OurWorkflowSection from "@/components/sections/OurWorkflowSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <MetaData
        keywords="Top Web And Digital Marketing Agency"
        title="Lopi Developments: Empowering Innovation One Solution at a Time"
        description="We design, develop, and deliver cutting-edge tech solutions."
      />
      <ScreenLoader />
      <BlurryCursor />
      <TalkNowButton />
      <main className="bg-dark text-[#e0eeee]">
        <HeroSection />
        <ServicesSection />
        <OurWorkflowSection />
        <TestimonialsSection />
        <ContactSection />
        {/* <WhyChooseUsSection /> */}
        {/* <MarqueeSection /> */}
        {/* <CtaSection /> */}
      </main>
    </>
  );
}
