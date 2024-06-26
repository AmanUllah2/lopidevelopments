"use client";
import FooterBanner from "@/components/footer/FooterBanner";
import ScreenLoader from "@/components/loaders/ScreenLoader";
import BannerSection from "@/components/sections/BannerSection";
import FaqSection from "@/components/sections/FaqSection";
import PackagesSection from "@/components/sections/PackagesSection";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import FeaturesSection from "@/components/sections/FeaturesSection";
import MetaData from "@/components/seo/MetaData";

const steps = [
  {
    id: 1,
    iconSrc: "/assets/images/web-d-icon-1.svg",
    title: "1. Consultation and Roadmap",
    description:
      "Let’s chat! We’re excited to be a part of your next big idea. Walk us through your vision and we’ll design a complete roadmap.",
  },
  {
    id: 2,
    iconSrc: "/assets/images/web-d-icon-2.svg",
    title: "2. Design and Development",
    description:
      "Our mix pool of talents bring your vision to a smooth, fully functional website.",
  },
  {
    id: 3,
    iconSrc: "/assets/images/web-d-icon-3.svg",
    title: "3. Testing",
    description:
      "We thoroughly examine your website from every possible perspective.",
  },
  {
    id: 4,
    iconSrc: "/assets/images/web-d-icon-4.svg",
    title: "4. Liftoff and Support",
    description:
      "While we’ll be rooting for you from here, we’re also always a call away for any support you may need.",
  },
];

const data = [
  {
    title: "How long does it take to build a website?",
    description:
      "The time to build a website can vary greatly depending on its complexity. A basic website might take 4-6 weeks, while a more complex site could require several months. The timeline includes phases such as design, development, testing, and launch.",
  },
  {
    title: "How much does building a website cost?",
    description:
      "Please have a look at our plans or give us a call for a more detailed response.",
  },
  {
    title: "Can you redesign an existing website?",
    description:
      "Yes, we can redesign your existing website to update its appearance, improve usability, and enhance functionality. We'll evaluate your current site and discuss your goals to ensure the redesign meets your business needs.",
  },
  {
    title: "Can I update the website you’ve designed on my own?",
    description:
      "Absolutely! We design websites with user-friendly content management systems (CMS) like WordPress, allowing you to make updates and manage content easily. We also provide training and support to help you get comfortable with the system.",
  },
  {
    title: "What will you need from me to get started?",
    description:
      "To begin, we'll need a clear project brief, which includes your goals, target audience, desired features, and any specific design preferences.",
  },
];

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WebDevelopmentPage = () => {
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
        keywords="Custom Web Development"
        title="Custom Web Development Services | Aurora Insights"
        description="Transform your online presence with Aurora Insights' custom web design and development services. We create stunning, high-performance websites that drive results and engage users. Contact us today to elevate your digital experience!"
      />
      <ScreenLoader />
      <main>
        <BannerSection
          imageUrl="/assets/images/website-development.jpg"
          subTitle="SERVICE"
          title="Custom Web Design & Development"
          description="Aurora Insights — where we create a website experience that’s
                made just for you"
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
                    A Website that Looks Good and Performs Great? We’ve Mastered
                    Both.
                  </h2>
                  <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                    <p className="translate-y-14 opacity-0">
                      The truth is, you’ll never get a second chance at making a
                      good first impression. Which is why, we don’t believe in
                      them.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      What if we told you your website isn’t living up to its
                      potential? Picture this: a potential lead stumbles on to
                      your website, only to be met by a painfully slow and
                      unresponsive interface and turns to your competitor
                      instead. That’s a missed connection you simply cannot
                      afford.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      And fortunately, it’s entirely avoidable.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      Your website is the face of your brand, a story waiting to
                      be told. Let us tell it for you.
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
                <span className="block absolute top-20 md:-top-16 left-0 h-full w-full aspect-square">
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
                    src="/assets/images/web-image-1.png"
                    alt="Web Development Portfolio"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-[#F1F5F9] text-black py-16 md:py-20 lg:py-28">
          <Container>
            <div className="relative">
              <span className="absolute h-full w-full top-0 left-0">
                <img
                  className="h-full w-full"
                  src="/assets/images/b-wava-2.svg"
                  alt="..."
                />
              </span>
              <div className="relative">
                <div className="max-w-[48rem] mx-auto text-center mb-14 lg:mb-20">
                  <h2 className="mb-6 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
                    Digital Dilemmas? We’ve Cracked that Code.
                  </h2>
                  <p className=" text-[#0C0B1B]/80">
                    Venturing out into the digital world can be daunting.
                    Especially if you’re not sure what you’re doing. We offer
                    website development solutions that are designed to
                    understand your users, give them wider accessibility,
                    eliminate compatibility issues and scale your business
                    faster.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="col">
                    <div className="space-y-6 lg:space-y-8">
                      <div className="bg-white p-6 lg:p-12 rounded-[1.25rem]">
                        <h3 className="mb-4 md:mb-6 font-clash-display font-medium capitalize text-[#0C0B1B] text-xl sm:leading-[2.4rem] sm:text-[2rem]">
                          Universal Cross-Device Compatibility
                        </h3>
                        <p className="text-[#0C0B1B]/70">
                          Whether it’s an app or a website, on a phone, tablet
                          or laptop — we do it all and we do it better. We’re
                          all about providing smooth experiences that just feel
                          right.
                        </p>
                      </div>
                      <div className="bg-white pb-0 p-6 lg:pb-0 lg:p-12 rounded-[1.25rem]">
                        <h3 className="mb-4 md:mb-6 font-clash-display font-medium capitalize text-[#0C0B1B] text-xl sm:leading-[2.4rem] sm:text-[2rem]">
                          Interactive Designs that Convert
                        </h3>
                        <p className="text-[#0C0B1B]/70">
                          If you’re wondering why we’re a cut above the rest,
                          it’s simple. We keep your users in mind at every stage
                          of development. From brainstorming to liftoff, it’s
                          all about prioritizing a hassle-free, smooth user
                          experience.
                        </p>
                        <div className="relative h-full w-full min-h-40 mt-2">
                          <Image
                            fill
                            src="/assets/images/web-image-2.png"
                            className="object-contain"
                            alt="Interactive Designs that Convert"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="flex flex-col h-full bg-white pb-0 p-6 lg:pb-0 lg:p-12 rounded-[1.25rem]">
                      <h3 className="mb-4 md:mb-6 font-clash-display font-medium capitalize text-[#0C0B1B] text-xl sm:leading-[2.4rem] sm:text-[2rem]">
                        Get Discovered with SEO-Friendly Designs
                      </h3>
                      <p className="text-[#0C0B1B]/70">
                        A greatly designed website means little if it’s drowning
                        in a sea of competitors. By incorporating key SEO
                        practices right from there start, such as building
                        backlinks and keyword integration, we make sure you’re
                        found. By the right people. At the right time.
                      </p>
                      <div className="relative flex-1 aspect-video mt-5 md:mt-0">
                        <Image
                          fill
                          src="/assets/images/web-image-3.png"
                          className="object-contain"
                          alt="Ecommerce Website Development"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <FeaturesSection
          title="Our Secret Behind High-Performing Websites"
          para="It’s simple. We’re a team of go-getters, master designers and passionate developers. That’s all it takes for us to design impeccable websites."
          items={steps}
        />
        {/* <TestimonialsSection /> */}
        <PackagesSection />
        <FaqSection title="Got Questions? We’ve Got Answers." data={data} />
        <FooterBanner title="We’ve helped countless companies rebrand themselves. Yours could be next." />
      </main>
    </>
  );
};

export default WebDevelopmentPage;
