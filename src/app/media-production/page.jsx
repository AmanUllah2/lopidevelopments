"use client";
import FooterBanner from "@/components/footer/FooterBanner";
import ScreenLoader from "@/components/loaders/ScreenLoader";
import BannerSection from "@/components/sections/BannerSection";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import CardsSection from "@/components/sections/CardsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import TestimonialsTwoSection from "@/components/sections/TestimonialsTwoSection";
import MetaData from "@/components/seo/MetaData";

const cardData = [
  {
    src: "/assets/images/media-production-image-2.png",
    title: "Aerial Footage",
    description:
      "We’re living proof that the sky is no longer the limit. If pictures are worth a thousand words, imagine what drone visuals could tell your audience. And that’s what’s so great about them, they can go where people can’t.",
    alt: "Photographer adjusting camera",
  },
  {
    src: "/assets/images/media-production-image-3.png",
    title: "Photography",
    description:
      "With photos, you get one chance. And we don’t rely on luck. Before the shutter clicks, we make sure everything is perfect so the final product speaks volumes.",
    alt: "Capturing Photograph",
  },
  {
    src: "/assets/images/media-production-image-4.png",
    title: "Videography",
    description:
      "If we had to break down what we actually do, it’s telling stories. We get the intricacy of raw human emotions and relationships. Add killer media production into the mix and you get video content that gets people to stop, watch and come back for more.",
    alt: "Aerial View of a Lake",
  },
  {
    src: "/assets/images/media-production-image-5.png",
    title: "Marketing Campaigns",
    description:
      "You can have an amazing brand, but it’s no good if you’re not getting it out there the right way. We don’t shy away from challenging the status quo to deliver forward-thinking campaigns that are authentic to you.",
    alt: "Podcast",
  },
];

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MediaProductionPage = () => {
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
        keywords="Media Production Services"
        title="Innovative Media Production Services | Aurora Insights"
        description="Aurora Insights delivers captivating media production, aerial footage, photography, videography, and marketing campaigns. Elevate your brand with our creative expertise and unique vision. Let's create something extraordinary together."
      />
      <ScreenLoader />
      <main>
        <BannerSection
          imageUrl="/assets/images/hero-image-6.jpeg"
          subTitle="SERVICE"
          title="Media Production"
          description="What if your media content could spark conversation and change the narrative?"
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
                    We find the spark and put the camera on it
                  </h2>
                  <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                    <p className="translate-y-14 opacity-0">
                      Media production requires a lot more than just pointing a
                      camera. It requires seeing things from different angles
                      and arriving at the strongest, singular vision that
                      resonates with your audience. We deliver the collective
                      truth — with our own twist, of course.
                    </p>
                  </div>
                  <div className="hero-button translate-y-14 opacity-0 mt-7">
                    <Link
                      href="/contact#contact-form"
                      className="btn-primary-1 inline-block uppercase text-sm sm:text-base"
                    >
                      <span className="relative z-10">Let’s do this</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col order-first md:order-last relative">
                <span className="hero-image -translate-x-20 block absolute top-16 md:-top-7 left-[4%] md:left-[-10%] h-full w-full aspect-square">
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
                    src="/assets/images/media-production-image-1.png"
                    alt="Product Photography"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
              </div>
            </div>
          </Container>
        </section>
        <CardsSection
          title="Our specialities"
          para="Here’s some of what we do best. We’re defined by everything we do differently."
          items={cardData}
        />
        <GallerySection />
        <TestimonialsTwoSection />
        <FooterBanner
          title="Let’s build something amazing together"
          buttonText="Start a Project"
        />
      </main>
    </>
  );
};

export default MediaProductionPage;
