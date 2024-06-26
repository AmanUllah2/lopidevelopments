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
import FeaturesThreeSection from "@/components/sections/FeaturesThreeSection";
import MetaData from "@/components/seo/MetaData";

// const featuresData = [
//   {
//     src: "/assets/images/web-hosting-icon-1.png",
//     title: "Cloud Hosting",
//     description:
//       "Enjoy lightning-fast cloud web hosting with SSD storage and a dedicated IP address – absolutely no technical expertise required!",
//   },
//   {
//     src: "/assets/images/web-hosting-icon-2.png",
//     title: "Reseller Hosting",
//     description:
//       "Looking for a side hustle? Reseller hosting allows you to set up your very own web hosting company without worrying about the nitty-gritties. It’s simple: your business, our products.",
//   },
//   {
//     src: "/assets/images/web-hosting-icon-3.png",
//     title: "Shared Hosting",
//     description:
//       "Ample storage, unmetered bandwidth and unbeatable shared hosting. We do it right the first time around.",
//   },
//   {
//     src: "/assets/images/web-hosting-icon-4.png",
//     title: "WordPress Hosting",
//     description:
//       "We make setting up WordPress quicker and easier than trying to do it all on your own. You can set up auto-backups, access 1-click restores and more without missing a beat.",
//   },
//   {
//     src: "/assets/images/web-hosting-icon-5.png",
//     title: "VPS Hosting",
//     description:
//       "If your current web host isn’t keeping up with your growing traffic, it’s time to switch things around. Our VPS hosting is built for people who appreciate the good things in life: more control and less service limitations",
//   },
//   {
//     src: "/assets/images/web-hosting-icon-6.png",
//     title: "Dedicated Hosting",
//     description:
//       "Having a dedicated server to call your own is great. But add maximum flexibility, customization, configuration, installation and our pro team to the mix and you’re golden.",
//   },
// ];

const featuresData = [
  {
    src: "/assets/images/web-hosting-icon-1.png",
    title: "Security Monitoring",
    description:
      "Even the best hosting and website-building practices aren’t always enough to keep a site 100% secure. We monitor any suspicious activity on your site, and if something goes wrong, I’ll restore it for you from the most recent backup.",
  },
  {
    src: "/assets/images/web-hosting-icon-2.png",
    title: "SSL Certificate",
    description:
      "This is what puts the lock symbol at the left of your url in the browser, and the ‘s’ in https in your url. An SSL certificate is required by Google. Without it, your website will rank lower in search results, and come with an ‘insecure’ warning.",
  },
  {
    src: "/assets/images/web-hosting-icon-3.png",
    title: "Fast Loading speed",
    description:
      "This is the equivalent to having your car already running when you’re ready to go somewhere, rather than having to start it up every time you get in.",
  },
  {
    src: "/assets/images/web-hosting-icon-2.png",
    title: "Unlimited Disk Space",
    description:
      "Have a lot of images on your website? No problem. Have an e-commerce site with lots of products? Go nuts. Disk space is the amount of storage room you get on your host’s server. Most hosting companies only allow a certain amount. Our services doesn’t.",
  },
  {
    src: "/assets/images/web-hosting-icon-5.png",
    title: "Priority Support",
    description:
      "If you’re on our maintenance plan and have a technical issue or need minor changes or updates, you will get expedited service.",
  },
  {
    src: "/assets/images/web-hosting-icon-6.png",
    title: "Dedicated Hosting",
    description:
      "Having a dedicated server to call your own is great. But add maximum flexibility, customization, configuration, installation and our pro team to the mix and you’re golden.  ",
  },
];

const data = [
  {
    title: "How do I choose the right hosting plan for my website's needs?",
    description:
      "There are a couple factors to consider when choosing a hosting plan for your website, such as the size of your website, the traffic, the features you need, and your budget. Please get in touch with us to get more information on our plans. ",
  },
  {
    title: "How can I scale my hosting resources as my website grows?",
    description:
      "Aurora Insights provides scalable hosting solutions, allowing you to adjust your resources as your website expands. You can easily upgrade or downgrade your hosting plan without downtime or data loss.",
  },
  {
    title:
      "What is the importance of uptime in web hosting and how is it guaranteed?",
    description:
      "Uptime is important for your website’s performance, reliability, and reputation. A low uptime leads to frequent unavailability, causing loss of visitors, customers, revenue, and trust. We assure a 99.7% uptime, translating to minimal downtime annually.",
  },
  {
    title:
      "How does the location of the hosting server affect my website's performance?",
    description:
      "The location of the hosting server affects your website’s performance in terms of loading speed, SEO ranking, and user experience. The longer the distance, the slower the loading speed.",
  },
  {
    title: "Why should I sign up for a website care plan?",
    description: (
      <>
        <h6 className="mb-4 font-medium">
          Regular maintenance is imperative for the security of your website.
        </h6>

        <p className="font-medium text-sm">
          Without a website care plan, your site is more likely to experience:
        </p>
        <ul className="mt-1 space-y-1 text-sm">
          <li>• Slower loading speeds and reduced performance</li>
          <li>
            • Security holes created by outdated themes and plugins, making it
            incredibly vulnerable to malware and hackers
          </li>
          <li>
            • Plus, if your hosting company doesn’t provide regular backups, you
            won’t have a restore point. In the event your site gets hacked, you
            could lose your content, access to your site, and your Google
            ranking.
          </li>
        </ul>

        <p className="mt-3">
          If you’re someone who isn’t overly tech-savvy, having a geek squad
          like ours in your corner is invaluable. Being your trust webmaster is
          a role We take very seriously.
        </p>
      </>
    ),
  },
];

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WebHostingPage = () => {
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

    gsap.to("#hero-section-2 .hero-button", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#hero-section-2 .hero-button",
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
        keywords="Web Hosting and Management Services"
        title="Web Hosting and Management by Aurora Insights | Reliable & Secure Website Hosting"
        description="Discover fast and secure web hosting with Aurora Insights. From cloud and shared hosting to dedicated servers, our reliable plans accelerate your website's performance and support your growth. Get started today!"
      />
      <ScreenLoader />
      <main>
        <BannerSection
          imageUrl="/assets/images/hero-image-5.jpg"
          subTitle="SERVICE"
          title="Hosting & Maintenance"
          description="Get the fastest version of your website with our reliable and secure hosting"
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
                    Hosting your website just a got a whole lot easier
                  </h2>
                  <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                    <p className="translate-y-14 opacity-0">
                      Without a server, your website is invisible. With our
                      website hosting, your website becomes practically
                      unstoppable. Gone are the days you’d let a slow website
                      get in the way of your business. Our hosting plans
                      accelerate your website loading speeds, effectively
                      driving traffic and increasing its efficiency to handle
                      more traffic.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      Whether you’re a pro or a newbie, you’re looking for
                      something that’s easy and that works. Lucky for you, our
                      web hosting is designed to get the job done right and
                      equip you with all the must-haves your website needs to
                      make waves
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
                    src="/assets/images/web-hosting-image-1.png"
                    alt="Fast Hosting"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-14 xl:gap-20 items-center">
              <div className="col">
                <span className="hero-image-2 opacity-0 -translate-x-full block relative h-full w-full aspect-square">
                  <Image
                    className="object-contain"
                    fill
                    src="/assets/images/web-hosting-image-2.png"
                    alt="Hosting Customer Support"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
              </div>
              <div className="col">
                <div className="max-w-[39.125rem]">
                  <h2 className="translate-y-14 opacity-0 mb-6 lg:mb-8 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
                    Hosting and Website Care like no other
                  </h2>
                  <div className="space-y-2 xl:space-y-3 text-base text-[#000]/70">
                    <p className="translate-y-14 opacity-0">
                      Even the best technology is as good as the people behind
                      it. And with Aurora Insights, you get the crème de la
                      crème.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      Your website is launched, and it’s doing its job. But,
                      like your employees, if it’s not treated well, it will
                      start to slack off.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      Your website needs ongoing tender loving care to keep it
                      functioning at its best, and most importantly, to keep it
                      safe from malware and hackers.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      But most business owners are too busy to give their site
                      the TLC it needs. Fortunately, We offer a website care
                      plan that does just that, so you can focus on running your
                      business, and trust that your website is in good hands.
                    </p>
                    <p className="translate-y-14 opacity-0">
                      With a dedicated team by your side to work when you do,
                      you can rest easy knowing you’re in good hands 365 days a
                      year. When you’re ready to get online, we’ve got the
                      industry’s best prepped, trained and ready to guide you to
                      success.
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
            </div>
          </Container>
        </section>
        <FeaturesThreeSection
          title="We help you think outside of the box"
          para={
            <>
              <span className="block">
                You bring the ideas. We get them online.
              </span>
              <br />
              <span className="block">
                Whether you need it for personal use or need to scale your
                business up, we have something for everyone. We grow with you,
                so you never outgrow us.
              </span>
            </>
          }
          items={featuresData}
        />

        <FaqSection title="Got questions? We’ve got answers." data={data} />
        <FooterBanner
          title="Bring your website to life"
          buttonText="Launch now"
        />
      </main>
    </>
  );
};

export default WebHostingPage;
