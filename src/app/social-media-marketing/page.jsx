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
    src: "/assets/images/run-ads-image-1.png",
    title: "Social Media Strategy",
    description: (
      <>
        <span className="block mb-4">
          How do you make sure you aren’t screaming into a void?
        </span>
        <span className="block">
          Being present on social media isn’t enough. You need to have a
          presence. Our team of experts help build a detailed strategy from
          scratch, locate growth opportunities and keep your online community
          engaged.
        </span>
      </>
    ),
    alt: "Social Media Applications",
  },
  {
    src: "/assets/images/run-ads-image-2.jpg",
    title: "Content Creation",
    description:
      "Think beyond boring posts. Dive into our bag of tricks – graphics, videos, and words that make your brand pop!",
    alt: "Creative Design",
  },
  {
    src: "/assets/images/run-ads-image-3.jpg",
    title: "Community Engagement",
    description:
      "We build online hangouts where your brand becomes the life of the party. Loyalty? We've got that covered.",
    alt: "Social Media User Engagement",
  },
  {
    src: "/assets/images/run-ads-image-4.jpg",
    title: "Paid Advertising",
    description:
      "Blind trials and errors and hoping for the best doesn’t cut it anymore. Your business deserves better. At Aurora Insights, we’ve managed hundreds of ad campaigns, which means we know what works — and what won’t.",
    alt: "Boost your social media",
  },
];

const steps = [
  {
    id: 1,
    iconSrc: "/assets/images/graphic-design-icon-1.svg",
    title: "Strategize",
    description:
      "We take our time to get to know you, your business and what you seem to have trouble with. Once that’s on the table, we come up with a blueprint to boost your engagement and ROI.",
  },
  {
    id: 2,
    iconSrc: "/assets/images/graphic-design-icon-2.svg",
    title: "Create",
    description:
      "We have some of the top talents put their heads together to come up with unique content that drives user engagement.",
  },
  {
    id: 3,
    iconSrc: "/assets/images/graphic-design-icon-3.svg",
    title: "Advertise",
    description:
      "This is when we optimize and run your ads to maximize their reach on every platform. We reel in organic traffic across multiple channels.",
  },
  {
    id: 4,
    iconSrc: "/assets/images/graphic-design-icon-4.svg",
    title: "Measure",
    description:
      "If you thought we’d face the other way once your ads are run, you thought wrong. We’re constantly evaluating, reviewing and fine-tuning your campaigns — so you stay well ahead of the curve.",
  },
];

const data = [
  {
    title: "How will you get to know me and my business?",
    description:
      "Before we even get to building your social media strategy, we like to get to know you. This makes it easier for us to really understand you and your business and how to best represent your brand online.",
  },
  {
    title: "How do you create a social media strategy?",
    description:
      "We create your social media strategy based on what you wish to achieve from it. Whether it's an increase in sales, inquiries, or website traffic, we tailor the strategy around your specific goals.",
  },
  {
    title: "What does a social media strategy include?",
    description:
      "Your social media strategy includes a breakdown of each post tailored to each platform. This breakdown will detail each individual post, its content, and the scheduled publication time.",
  },
  {
    title: "Will you create social media profiles if I don't have any?",
    description:
      "Absolutely. We are more than happy to set up your social media profiles if you don’t have the time to do it yourself. During the consultation stage, we will discuss which platforms you should be on.",
  },
  {
    title: "How do you measure the success of my social media campaign?",
    description:
      "This depends on the goals you set for your business. For example, if your goal is to gain more website traffic through social media, we will use social media analytics to track how many people click through to your website month-on-month.",
  },
  {
    title: "What are the different types of social media marketing?",
    description:
      "We utilize several types of social media marketing strategies, including content marketing, and influencer marketing, where popular personalities promote products. We also use social media advertising, placing paid ads on platforms such as Facebook and Instagram. Community management focuses on building and nurturing online communities, while social media analytics tracks and analyzes performance metrics to refine our strategies. Each approach helps us effectively engage with audiences and achieve business goals.",
  },
];

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RunAdsPage = () => {
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
        keywords="Social Media Marketing Services"
        title="Social Media Marketing Services | Aurora Insights - Boost Your Online Presence"
        description="Transform your social media presence with Aurora Insights. From organic posts to targeted ads, we manage all your social profiles to maximize engagement and ROI. Get in touch today!"
      />
      <ScreenLoader />
      <main>
        <BannerSection
          imageUrl="/assets/images/hero-image-4.jpg"
          subTitle="SERVICE"
          title="Social Media Marketing"
          description="From organic posts to targeted ads, stay connected at every step of the customer journey."
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
                    We get you seen when and where you matter most
                  </h2>
                  <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                    <p className="translate-y-14 opacity-0">
                      Your social media marketing strategy should never be an
                      afterthought. It should be an extension of it. Which is
                      why, to reach the right people on social media, you need
                      the right tools. Instagram, Facebook, YouTube, TikTok,
                      LinkedIn, Twitter — the list of social media platforms
                      that you need to be on, are endless. And if that wasn’t
                      enough work already, algorithm changes roll out almost
                      every week. And before you know it, your business is
                      falling behind.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      We’re a social media marketing agency that handles all
                      your social media profiles, from strategy to scheduling,
                      we do it all.
                    </p>
                  </div>
                  <div className="hero-button translate-y-14 opacity-0 mt-7">
                    <Link
                      href="/contact#contact-form"
                      className="btn-primary-1 inline-block uppercase text-sm sm:text-base"
                    >
                      <span className="relative z-10">See how we do it</span>
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
                    src="/assets/images/run-ads-1.png"
                    alt="Social Media Campaign Perfectly targeted"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
              </div>
            </div>
          </Container>
        </section>
        <CardsSection
          title="Being social is a full-time job, here’s how we free up your hands"
          para="Our graphic design services go beyond aesthetics; they bring a unique and professional touch to businesses, making them stand out in a crowded market."
          items={cardData}
        />
        <FeaturesSection
          title="Our social media marketing services actually make a difference. Here’s how we do it"
          para="Our process is simple, straightforward and effective. We don’t believe in gimmicks or cookie-cutter approaches that try to fit everyone in a template."
          items={steps}
        />
        {/* <TestimonialsSection /> */}
        <FaqSection title="Frequently Asked Questions" data={data} />
        <FooterBanner title="Hundreds of users trust us with their social media marketing. You can too." />
      </main>
    </>
  );
};

export default RunAdsPage;
