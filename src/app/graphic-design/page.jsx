"use client";
import FooterBanner from "@/components/footer/FooterBanner";
import ScreenLoader from "@/components/loaders/ScreenLoader";
import BannerSection from "@/components/sections/BannerSection";
import FaqSection from "@/components/sections/FaqSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CardsSection from "@/components/sections/CardsSection";
import MetaData from "@/components/seo/MetaData";

const cardData = [
  {
    src: "/assets/images/graphic-d-image-1.png",
    title: "Graphic Design",
    description:
      "If you’re not confident in your brand; your customers aren’t either. We go the extra mile to come up with designs to build a brand you love.",
    alt: "Innovative Design",
  },
  {
    src: "/assets/images/graphic-d-image-2.png",
    title: "Branding",
    description:
      "Pictures speak a thousand words, and your logo will do the talking for you when words fall short. With a logo that’s too good to forget, you can be virtually anywhere. We make sure of it.",
    alt: "Brainstorming Ideas on Paper",
  },
  {
    src: "/assets/images/graphic-d-image-3.png",
    title: "Social Media Design",
    description:
      "In the age of reels and shorts, the need for grasping attention with mere seconds is more important than ever before. We get you noticed. Fast.",
    alt: "Mobile Apps",
  },
  {
    src: "/assets/images/graphic-d-image-4.png",
    title: "Print Design",
    description:
      "Attention-grabbing magazine covers, eye-catching newspaper ads, quality flyers — you name it, we do it all. We do it best and we make it easy.",
    alt: "Graphic Designer Designing Magazine ",
  },
];

const steps = [
  {
    id: 1,
    iconSrc: "/assets/images/graphic-design-icon-1.svg",
    title: "Get on board with us",
    description:
      "Get on a call with us to discuss your business, goals and problems. We listen intently and ask all the right questions.",
  },
  {
    id: 2,
    iconSrc: "/assets/images/graphic-design-icon-2.svg",
    title: "Brainstorming for ideas",
    description:
      "Once we’ve got everything we need to know about your brand, we get to work. Only the top graphic designers put their heads together to come up with something unique.",
  },
  {
    id: 3,
    iconSrc: "/assets/images/graphic-design-icon-3.svg",
    title: "Design approval",
    description:
      "The best part about this is you’re an active part of the process. We only move forward once you’re satisfied.",
  },
  {
    id: 4,
    iconSrc: "/assets/images/graphic-design-icon-4.svg",
    title: "Launch and Attract!",
    description:
      "This is when the conversions start reeling in and you come back to us for more.",
  },
];

const data = [
  {
    title: "How long does it take for a task to be completed?",
    description:
      "Completion times vary depending on the project's complexity and scope. Larger or more complex designs may require additional time. Please get in touch with us for a more detailed response based on your requirements.",
  },
  {
    title: "What does my designer need from me?",
    description:
      "To start, our graphic designers need a detailed brief including your objectives, target audience, and desired look and feel. Please provide any specific design elements, brand guidelines and content you want to be included.",
  },
  {
    title: "How many times can I get revisions done on my designs?",
    description:
      "You are entitled to three rounds of revisions to refine and perfect your design. Additional revisions beyond these may be subject to further charges, depending on the extent of changes required.",
  },
  {
    title: "Do I own the rights to all my designs?",
    description:
      "Yes, you own the rights to all your designs once the project is fully paid for. You'll receive full ownership, allowing you to use the designs freely across all platforms.",
  },
  {
    title: "How will I receive the finished design?",
    description:
      "The final design will be delivered to you via email or a direct download link from a secure cloud storage platform. You will receive files in multiple formats suitable for print and digital use, including JPG, PNG, and PDF.",
  },
  {
    title: "Can you update our existing marketing materials?",
    description:
      "Yes, we can update your existing marketing materials. This includes revising designs to better align with your current brand standards and marketing goals, ensuring a consistent and updated look across all materials.",
  },
];

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GraphicDesignPage = () => {
  useEffect(() => {
    // GSAP animations with ScrollTrigger
    gsap.to("#hero-section-1 h2", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#hero-section-1 h2",
        start: "top 70%",
      },
    });

    gsap.to("#hero-section-1 p", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#hero-section-1 p",
        start: "top 100%",
      },
    });

    gsap.to("#hero-section-1 .hero-button", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#hero-section-1 .hero-button",
        start: "top 100%",
      },
    });

    // Parallax effect for the hero image
    gsap.to(".hero-image", {
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-image",
        start: "top bottom", // Start when the top of the image is at the bottom of the viewport
        end: "bottom center", // End when the bottom of the image is at the top of the viewport
        scrub: true, // Smooth scrubbing
      },
    });
  }, []);

  return (
    <>
      <MetaData
        keywords="Graphic Design Services"
        title="High-Quality Graphic Design Services | Aurora Insights"
        description="Boost conversions and elevate your brand with Aurora Insights' top-tier graphic design services. From logos to print and social media designs, we make your brand unforgettable. Get in touch today!"
      />
      <ScreenLoader />
      <main>
        <BannerSection
          imageUrl="/assets/images/hero-image-3.jpeg"
          subTitle="SERVICE"
          title="Graphic Design"
          description="Persuade your audience to browse, click, and buy with our high-quality graphic designs. Your path to higher conversions starts here."
        />
        <section
          id="hero-section-1"
          className="bg-white text-black py-16 md:py-16 overflow-hidden"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-14 xl:gap-20 items-center">
              <div className="col">
                <div className="max-w-[39.125rem]">
                  <h2 className="translate-y-14 opacity-0 mb-6 lg:mb-8 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
                    You have a vision. We have a dedicated team of impeccable
                    graphic designers to get you there.
                  </h2>
                  <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                    <p className="translate-y-14 opacity-0">
                      Your brand identity plays a lead role in connecting with
                      your target audience. How you choose to present it is what
                      makes or breaks you.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      With thousands of businesses around, you get one shot to
                      stop the scroll and stand out. Aurora Insights ensures you
                      make it count. From print designs to motion videos, we
                      make you unforgettable. 
                    </p>
                  </div>
                  <div className="hero-button translate-y-14 opacity-0 mt-7">
                    <Link
                      href="/contact#contact-form"
                      className="btn-primary-1 inline-block uppercase text-sm sm:text-base"
                    >
                      <span className="relative z-10">Get in Touch</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col order-first md:order-last relative">
                <span className="md:-translate-x-48 translate-y-24 block absolute -top-16 md:-top-36 left-[4%] md:left-[-10%] h-full w-full aspect-square">
                  <Image
                    className="object-contain"
                    fill
                    src="/assets/images/p-1.svg"
                    alt="..."
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
                <span className="hero-image translate-x-28 block relative h-full w-full aspect-square">
                  <Image
                    className="object-contain"
                    fill
                    src="/assets/images/graphic-design-image-1.png"
                    alt="Social Media Graphic Designing"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
              </div>
            </div>
          </Container>
        </section>
        <CardsSection
          title="Graphic Design Services"
          para="Whether you’re looking for a much-needed rebrand or need irresistible promotional marketing material, we’ve got everything you need. All in one place."
          items={cardData}
        />
        <FeaturesSection
          title="We’ve reinvented the way graphic designing is done. And it couldn’t be easier."
          para="We’re trusted by hundreds of fast-growing companies and enterprises that turn to us for designs that get heads turning. Here’s how we do it:"
          items={steps}
        />
        {/* <TestimonialsSection /> */}
        <FaqSection data={data} title="Have questions? Check out our FAQs" />
        <FooterBanner
          title="Like the sound of what we do? Get in touch with us about your next project."
          buttonText="Get started"
        />
      </main>
    </>
  );
};

export default GraphicDesignPage;
