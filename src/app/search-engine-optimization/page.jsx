"use client";
import FooterBanner from "@/components/footer/FooterBanner";
import ScreenLoader from "@/components/loaders/ScreenLoader";
import BannerSection from "@/components/sections/BannerSection";
import FaqSection from "@/components/sections/FaqSection";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import SeoPackageSection from "@/components/sections/SeoPackageSection";
import MetaData from "@/components/seo/MetaData";

const data = [
  {
    title: "How long does it take to see results from SEO?",
    description:
      "SEO results vary but typically start showing within 4-6 months. The timeline can depend on factors like the competitiveness of your industry, the current state of your website, and the strategies implemented.",
  },
  {
    title:
      "How do you measure the success of a search engine optimization campaign?",
    description:
      "Success is measured using several metrics, including organic traffic, search engine rankings, conversion rate, and time spent on site. We also track specific keyword performance and the growth in the number of backlinks.",
  },
  {
    title:
      "How often do search engine optimization strategies need to be updated?",
    description:
      "SEO strategies should be evaluated and potentially updated every 3-6 months. The frequency of updates depends on the performance of the current strategy and changes in search engine algorithms, market trends, and competitive dynamics. Fortunately for you, we stay ahead of the curve.",
  },
  {
    title: "How do you keep up with search engine algorithm changes?",
    description:
      "We stay updated with algorithm changes by following industry leaders and using advanced search engine optimization tools to monitor algorithm updates and adjust strategies accordingly.",
  },
  {
    title: "Can you guarantee high ranking on search engines?",
    description:
      "No ethical SEO professional can guarantee a specific ranking, as search engine algorithms are complex and constantly changing. However, we implement proven SEO practices that significantly improve the chances of ranking highly in search results.",
  },
];

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SeoPackagesPage = () => {
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
        keywords="SEO Services"
        title="Expert SEO Services to Boost Your Online Visibility | Aurora Insights"
        description="Discover Aurora Insights' top-tier SEO services designed to enhance your search engine rankings, drive organic traffic, and increase conversions. Let us help you stand out in the digital landscape with customized, ethical SEO strategies. Book a call today!"
      />
      <ScreenLoader />
      <main className="seo-page">
        <BannerSection
          imageUrl="/assets/images/seo-hero-image.jpg"
          subTitle="SERVICE"
          title="Search Engine Optomization"
          description="Rank higher on search engines. Generate organic traffic. Secure more qualified leads, fostering higher conversion rates and driving business growth."
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
                    Make waves or make do.
                  </h2>
                  <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                    <p className="translate-y-14 opacity-0">
                      Thousands of websites are created EVERY. SINGLE. DAY. What
                      are you doing to make sure you’re NOT drowning in the
                      noise?
                    </p>
                    <p className="translate-y-14 opacity-0">
                      If you don’t have an answer yet, let us take the reigns
                      from here.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      Aurora Insights helps you get SEO right and puts you back
                      on the map where you belong. With us, there’s no guessing,
                      assuming or hoping for the best. Just good SEO practices
                      backed with years worth of research. Safe to say, we know
                      what we’re doing and we’re great at it.
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
                <span className="hero-image translate-x-28 block absolute top-16 md:-top-7 left-[4%] md:left-[-10%] h-full w-full aspect-square">
                  <Image
                    className="object-contain"
                    fill
                    src="/assets/images/p-1.svg"
                    alt="Rank Improvement on Search Engine"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
                <span className="hero-image translate-x-28 block relative h-full w-full aspect-square">
                  <Image
                    className="object-contain"
                    fill
                    src="/assets/images/seo-graphic.png"
                    alt="..."
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
                    What does our SEO strategy look like?
                  </h2>
                  <p className=" text-[#0C0B1B]/80">
                    SEO is not stagnant and neither are our plans. Every single
                    plan is customized, so you’re not being forced to fit a box
                    that was never meant for you. So, how do we get you found?
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <div className="col">
                    <div className="space-y-6 lg:space-y-8">
                      <div className="bg-white pb-0 p-6 lg:pb-0 lg:p-12 rounded-[1.25rem]">
                        <h3 className="mb-4 md:mb-6 font-clash-display font-medium capitalize text-[#0C0B1B] text-xl sm:leading-[2.4rem] sm:text-[2rem]">
                          White Hat Strategies, Always
                        </h3>
                        <p className="text-[#0C0B1B]/70">
                          The race to the top can get competitive and it can be
                          tempting to break a few rules to get there. With us,
                          there’s no stuffing, cloaking or black-hat SEO. We
                          play by the rules and get the results. How’s that for
                          a search engine optimization strategy?
                        </p>
                        <div className="relative h-full w-full min-h-64 mt-2">
                          <Image
                            fill
                            src="/assets/images/seo-image-1.png"
                            className="object-contain"
                            alt="..."
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>
                      <div className="bg-white p-6 lg:p-12 rounded-[1.25rem]">
                        <h3 className="mb-4 md:mb-6 font-clash-display font-medium capitalize text-[#0C0B1B] text-xl sm:leading-[2.4rem] sm:text-[2rem]">
                          Increase Traffic
                        </h3>
                        <p className="text-[#0C0B1B]/70">
                          Increased traffic is a direct effect of good SEO. But
                          what use is traffic if they’re not converting?
                          Fortunately for you, we’re not just blindly reeling in
                          leads. We’re making sure they’re relevant for better
                          conversion rates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="flex flex-col h-full bg-white pb-0 p-6 lg:pb-0 lg:p-12 rounded-[1.25rem]">
                      <h3 className="mb-4 md:mb-6 font-clash-display font-medium capitalize text-[#0C0B1B] text-xl sm:leading-[2.4rem] sm:text-[2rem]">
                        Improve Ranking
                      </h3>
                      <p className="text-[#0C0B1B]/70">
                        How often have you pressed page 2 on a search engine?
                        Chances are, you rarely have. If you’re not making it to
                        the first page, you’re losing out on a TON of growth.
                        SEO puts you in front of customers already searching for
                        something you offer.
                      </p>
                      <div className="relative flex-1 aspect-video mt-5 md:mt-0">
                        <Image
                          fill
                          src="/assets/images/seo-image-2.png"
                          className="object-contain"
                          alt="..."
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
        <section className="bg-white text-black py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 xl:gap-32">
              <div className="col">
                <div className="max-w-[32.125rem] sticky top-28">
                  <h2 className="mb-4 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
                    Our SEO Services
                  </h2>
                  {/* <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-12">
                  <li>
                    <div className="rounded-2xl border border-black/10 p-5 h-full">
                      <span className="block relative h-14 w-14 mb-4 md:mb-6">
                        <Image
                          fill
                          src="/assets/images/seo-icon-1.svg"
                          alt="..."
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </span>
                      <h4 className="mb-3 md:mb-4 font-clash-display font-medium text-black text-xl sm:text-2xl">
                        Keyword Research
                      </h4>
                      <p className="font-roboto">
                        Keyword research is arguably the most important step of
                        search engine optimization. Use the wrong ones and
                        you’ll either not show up at all or come up in
                        irrelevant searches. We only use relevant, high-volume,
                        low difficulty keywords to get you seen.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-2xl border border-black/10 p-5 h-full">
                      <span className="block relative h-14 w-14 mb-4 md:mb-6">
                        <Image
                          fill
                          src="/assets/images/seo-icon-2.svg"
                          alt="..."
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </span>
                      <h4 className="mb-3 md:mb-4 font-clash-display font-medium text-black text-xl sm:text-2xl">
                        On page SEO
                      </h4>
                      <p className="font-roboto">
                        When it comes to SEO, it’s all about getting the details
                        right. From optimizing the content on your website so
                        search engines can crawl it easily, to internal links
                        and meta tags, we dial in on everything.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-2xl border border-black/10 p-5 h-full">
                      <span className="block relative h-14 w-14 mb-4 md:mb-6">
                        <Image
                          fill
                          src="/assets/images/seo-icon-3.svg"
                          alt="..."
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </span>
                      <h4 className="mb-3 md:mb-4 font-clash-display font-medium text-black text-xl sm:text-2xl">
                        On and Off-page optimization's
                      </h4>
                      <p className="font-roboto">
                        Getting recognized by search engines requires a lot more
                        than just good content. You need to be seen as an
                        authoritative figure within your industry. We help you
                        achieve this by non-spammy link building, social media
                        engagement and guest blogging.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-2xl border border-black/10 p-5 h-full">
                      <span className="block relative h-14 w-14 mb-4 md:mb-6">
                        <Image
                          fill
                          src="/assets/images/seo-icon-4.svg"
                          alt="..."
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </span>
                      <h4 className="mb-3 md:mb-4 font-clash-display font-medium text-black text-xl sm:text-2xl">
                        Local SEO
                      </h4>
                      <p className="font-roboto">
                        If your business seems to be the best kept secret in
                        town, it’s time to switch things around. We work on your
                        business profile to get you spotted by those who matter
                        most — your community . Whether you’re in or around
                        Edmonton, Calgary, Montreal, Toronto, Vancouver or
                        anywhere across the globe, we’ll help you get seen.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <SeoPackageSection />
        <FaqSection title="Your Questions Answered" data={data} />
        <FooterBanner
          title="We are ready. Are you ?"
          buttonText="Book a call with us today"
        />
      </main>
    </>
  );
};

export default SeoPackagesPage;
