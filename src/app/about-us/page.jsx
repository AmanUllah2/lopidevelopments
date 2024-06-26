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
import AboutFeatureSection from "@/components/sections/AboutFeatureSection";
import AboutTestimonialsSection from "@/components/sections/AboutTestimonialsSection";
import MetaData from "@/components/seo/MetaData";

const featuresData = [
  {
    src: "/assets/images/about-icon-1.svg",
    title: "Working together",
    description:
      "With us, there are no awkward surprises. You become part of the team, not just along for the ride but giving us your valuable input along the way. We like to call it our collective truth.",
  },
  {
    src: "/assets/images/about-icon-2.svg",
    title: "Strategize. Craft. Create.",
    description:
      "Aurora Insights builds for growth. And we’ll give it to you straight, break-out brands don’t happen overnight. It takes only the top talent in town to sit together and come up with fresh ideas and implement robust consumer insights to come up with something truly spectacular.",
  },
  {
    src: "/assets/images/about-icon-3.svg",
    title: "Aurora Insights for all",
    description:
      "Good marketing, hosting, graphic designing or even SEO doesn’t have to come with a hefty price tag. We’re built on transparency, honesty and accessibility. Which means finding your story and telling it is now within reach whether you’re a one-man show or a global brand.",
  },
];

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
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

    // GSAP animations for hero-section-2
    gsap.to("#hero-section-2 h2", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#hero-section-2 h2",
        start: "top 70%",
      },
    });

    gsap.to("#hero-section-2 p", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#hero-section-2 p",
        start: "top 100%",
      },
    });

    gsap.to("#hero-section-2 .hero-image-2", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#hero-section-2 .hero-image-2",
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
        title="About Us - Aurora Insights: Pioneering Creative Solutions for Game-Changing Brands"
        description="Discover Aurora Insights, a dynamic team of creatives dedicated to challenging the status quo. With over 10 years of experience, we partner with startups to global brands, delivering innovative strategies and exceptional results. Join us in pushing boundaries and achieving greatness."
        keywords="Aurora Insights"
      />
      <ScreenLoader />
      <main>
        <BannerSection
          imageUrl="/assets/images/about-banner.jpg"
          subTitle="SERVICE"
          title="About Us"
          description="For those who dare"
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
                    We’re for the restless, the game-changers and the
                    challenge-takers
                  </h2>
                  <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                    <p className="translate-y-14 opacity-0">
                      We’re a small, remote team of creatives that believes in
                      challenging the status quo. We started Aurora Insights
                      with that idea in mind and look to work with like-minded
                      brands that are willing to push boundaries and set their
                      standards high.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      We work with people from all sectors, from startups to
                      major global brands – and we’re always keen to meet new
                      ones who share our core values.
                    </p>
                  </div>
                  <div className="hero-button translate-y-14 opacity-0 mt-7">
                    <Link
                      href="/contact#contact-form"
                      className="btn-primary-1 inline-block uppercase text-sm sm:text-base"
                    >
                      <span className="relative z-10">Drop Us a Line</span>
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
                    src="/assets/images/about-image-1.png"
                    alt="Graphic Designer using Adobe Illustrator"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
              </div>
            </div>
          </Container>
        </section>
        <section
          id="hero-section-2"
          className="bg-white text-black pb-16 md:pb-20 overflow-hidden"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
              <div className="col">
                <span className="hero-image-2 opacity-0 -translate-x-full block relative h-full w-full aspect-square">
                  <Image
                    className="object-cover rounded-2xl"
                    fill
                    src="/assets/images/about-image-2.png"
                    alt="Team briefing"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
              </div>
              <div className="col">
                <div className="max-w-[39.125rem]">
                  <h2 className="translate-y-14 opacity-0 mb-6 lg:mb-8 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
                    We’ve helped over 50 brands come alive
                  </h2>
                  <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                    <p className="translate-y-14 opacity-0">
                      The world is busier than ever. And people just don’t have
                      the time to stop. So you best believe that we come up with
                      something crazy good to have these stats. We put our heads
                      together to build brands and experiences that can’t be
                      ignored.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="col">
                      <h2 className="translate-y-14 opacity-0 mb-2 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3.6rem] md:text-[3rem]">
                        100+
                      </h2>
                      <p className="translate-y-14 opacity-0  capitalize text-[#000]/70">
                        Satisfied Customers
                      </p>
                    </div>
                    <div className="col">
                      <h2 className="translate-y-14 opacity-0 mb-2 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3.6rem] md:text-[3rem]">
                        50+
                      </h2>
                      <p className="translate-y-14 opacity-0  capitalize text-[#000]/70">
                        Projects Completed
                      </p>
                    </div>
                    <div className="col">
                      <h2 className="translate-y-14 opacity-0 mb-2 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3.6rem] md:text-[3rem]">
                        20+
                      </h2>
                      <p className="translate-y-14 opacity-0  capitalize text-[#000]/70">
                        Creative Minds
                      </p>
                    </div>
                    <div className="col">
                      <h2 className="translate-y-14 opacity-0 mb-2 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3.6rem] md:text-[3rem]">
                        10+
                      </h2>
                      <p className="translate-y-14 opacity-0  capitalize text-[#000]/70">
                        years of experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <AboutFeatureSection
          title="We’re believe in thinking big and then giving it boundaries"
          para="We’re about as creatively daring as we are organized, and that’s why so many people like you trust us with their brands."
          items={featuresData}
        />
        {/* <AboutTestimonialsSection /> */}
        <FooterBanner
          title="This could be the start of something amazing"
          buttonText="Let’s begin"
        />
      </main>
    </>
  );
};

export default AboutPage;
