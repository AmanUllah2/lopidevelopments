"use client";
import React, { useEffect } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import TextSplit from "../splits/TextSplit";

gsap.registerPlugin(scrollTrigger);

const services = [
  {
    subTitle: "MVP Development",
    title: "Crafting Minimum Viable Products",
    description:
      "Transform your vision into a functional MVP, ensuring rapid market entry with essential features and reliable performance.",
    image: "/1x/MVP.png",
    alt: "MVP Development",
  },
  {
    subTitle: "Scale Up",
    title: "Scaling Your Business",
    description:
      "Accelerate growth and expand your operations seamlessly with our tailored scaling solutions, designed for sustainability and efficiency.",
    image: "/1x/Scaleup.png",
    alt: "Scale Up",
  },
  // {
  //   subTitle: "User Testing",
  //   title: "Comprehensive User Testing",
  //   description:
  //     "Enhance user experience through rigorous testing, gathering valuable feedback to refine and perfect your product.",
  //   image: "/assets/images/s-icon-3.svg",
  //   alt: "User Testing",
  // },
  // {
  //   subTitle: "UX Design",
  //   title: "Innovative UX Design",
  //   description:
  //     "Create engaging and intuitive user experiences with our expert UX design services, focused on usability and satisfaction.",
  //   image: "/assets/images/s-icon-4.svg",
  //   alt: "UX Design",
  // },
  {
    subTitle: "Web App Development",
    title: "Cutting-Edge Web App Development",
    description:
      "Develop visually stunning and highly interactive user interfaces with our state-of-the-art web development services.",
    image: "/1x/FE.png",
    alt: "Frontend Development",
  },
  {
    subTitle: "Blockchain and Cryptocurrency",
    title: "Blockchain and Cryptocurrency Solutions",
    description:
      "Embrace the future with our blockchain and cryptocurrency services, ensuring secure, transparent, and efficient transactions.",
    image: "/1x/Cryptocurrency.png",
    alt: "Blockchain and Cryptocurrency",
  },
  {
    subTitle: "Mobile App development",
    title: "Mobile App Solutions",
    description:
      "Unlock seamless and secure blockchain transactions with our cutting-edge mobile app wallets. Ecommerce apps and many more.",
    image: "/1x/Support.png",
    alt: "Blockchain and Cryptocurrency",
  },
  // {
  //   subTitle: "Backend Development",
  //   title: "Robust Backend Development",
  //   description:
  //     "Ensure your application’s backbone is strong and reliable with our comprehensive backend development solutions.",
  //   image: "/assets/images/s-icon-6.svg",
  //   alt: "Backend Development",
  // },
  {
    subTitle: "AI and Machine Learning",
    title: "Advanced AI and Machine Learning",
    description:
      "Leverage the power of AI and machine learning to innovate and optimize your business processes, making data-driven decisions.",
    image: "/1x/AI.png",
    alt: "AI and Machine Learning",
  },

  {
    subTitle: "SEO Services",
    title: "Expert SEO Services",
    description:
      "Boost your online presence and drive organic traffic with our tailored SEO strategies, designed to enhance visibility and engagement.",
    list: [
      "Search Engine Optimization (SEO)",
      "Keyword Research and Analysis",
      "On-page and Off-page Optimization",
      "Technical SEO Audits",
      "Content Marketing",
    ],
    image: "/1x/SEO.png",
    alt: "SEO Services",
  },
];

const ServicesSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#move-video",
        start: "bottom 55%",
        end: "bottom 60%",
        scrub: 2,
      },
    });

    tl.fromTo(
      ".text-anim-2",
      {
        opacity: 0.2,
        color: "#424242",
        x: 20,
        textShadow: "0 0 0.125rem #fff",
        stagger: 1,
      },
      {
        opacity: 1,
        color: "#fff",
        textShadow: "0 0 0 #fff",
        x: 0,
        stagger: 1,
      }
    );

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".service-item").forEach((service) => {
      gsap.to(service.querySelector(".image-left"), {
        scrollTrigger: {
          trigger: service,
          start: "top 20%",
          end: "top 5%",
          scrub: 3,
          toggleActions: "play none none reset",
        },
        opacity: 1,
        transform: "translate(0%, 0%) rotate(0deg)",
        duration: 3,
        ease: "power3.out",
      });

      gsap.to(service.querySelector(".image-right"), {
        scrollTrigger: {
          trigger: service,
          start: "top 20%",
          end: "top 5%",
          scrub: 3,
          toggleActions: "play none none reset",
        },
        opacity: 1,
        transform: "translate(0%, 0%) rotate(0deg)",
        duration: 3,
        ease: "power3.out",
      });

      gsap.to(service.querySelector(".content-right, .content-left"), {
        scrollTrigger: {
          trigger: service,
          start: "top 20%",
          end: "top 5%",
          scrub: 3,
          toggleActions: "play none none reset",
        },
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section className="pb-16 md:pb-24 lg:pb-40 overflow-hidden">
      <Container>
        <h2 className="mb-10 md:mb-16 font-clash-display font-medium text-[2rem] md:text-[4rem]">
          <TextSplit className="text-anim-2" text="Services" />
        </h2>
        <div id="services" className="space-y-16 lg:space-y-24 xl:space-y-36">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center service-item relative z-20"
            >
              <div
                className={`col ${index % 2 !== 0
                  ? "image-right opacity-0 translate-x-1/2 rotate-12 order-first lg:order-last"
                  : "image-left  opacity-0 -translate-x-1/2 -rotate-12"
                  }`}
              >
                <div className="relative">
                  <Image
                    priority
                    width={450}
                    height={450}
                    src={service.image}
                    alt={service.alt}
                    className="object-contain mx-auto"
                  />
                </div>
              </div>
              <div
                className={`col ${index % 2 !== 0 ? "content-right" : "content-left"
                  } opacity-0 translate-y-28`}
              >
                <div>
                  <h6 className="mb-4 font-bold uppercase text-primary text-sm md:text-base">
                    {service.subTitle}
                  </h6>
                  <h3 className="mb-5 font-normal font-clash-display leading-[2.4rem] md:leading-[3.6rem] text-[2rem] md:text-5xl">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-lg md:text-xl text-balance">
                    {service.description}
                  </p>
                  <ul className="mt-4 pl-4 list-disc space-y-1 text-sm text-white/70">
                    {service.list?.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                  {/* <div className="mt-6">
                    <Link
                      href={service.href}
                      className="inline-block btn-primary sticky-cursor-btn"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
