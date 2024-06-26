"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import TextSplit from "../splits/TextSplit";
import Container from "../ui/Container";

gsap.registerPlugin(scrollTrigger);

const listItems = [
  {
    title: "Satisfied Customers",
    number: "100+",
    position: "col choose-us-box-1 opacity-0 -translate-x-1/2 -rotate-45",
    boxClassName: "hover:bg-[#dd3500e6]",
  },
  {
    title: "Projects Completed",
    number: "50+",
    position:
      "col choose-us-box-2 opacity-0 translate-x-1/2 rotate-45 lg:mt-48",
    boxClassName: "hover:bg-[#dce5e5e6] hover:text-black",
  },
  {
    title: "Creative Minds",
    number: "20+",
    position:
      "col choose-us-box-3 opacity-0 -translate-x-1/2 -rotate-45 lg:-mt-48",
    boxClassName: "hover:bg-[#b0ddcae6] hover:text-black",
  },
  {
    title: "Years of Experience",
    number: "10+",
    position: "col choose-us-box-4 opacity-0 translate-x-1/2 rotate-45",
    boxClassName: "hover:bg-[#f4e342e6] hover:text-black",
  },
];

const WhyChooseUsSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "bottom 80%",
        end: "bottom 100%",
        scrub: 2,
      },
    });

    tl.fromTo(
      ".text-anim-3",
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

    // GSAP timeline for box-left and box-right animations
    const boxAnimation = gsap.timeline({ paused: true });
    boxAnimation
      .to(".choose-us-box-1", {
        opacity: 1,
        duration: 1,
        transform: "translate(0%, 0%) rotate(0deg)",
      })
      .to(
        ".choose-us-box-2",
        {
          opacity: 1,
          duration: 1,
          transform: "translate(0%, 0%) rotate(0deg)",
        },
        "-=0.5" // Delay the start of the animation by 0.5 seconds
      )
      .to(
        ".choose-us-box-3",
        {
          opacity: 1,
          duration: 1,
          transform: "translate(0%, 0%) rotate(0deg)",
        },
        "-=0.5" // Delay the start of the animation by 0.5 seconds
      )
      .to(
        ".choose-us-box-4",
        {
          opacity: 1,
          duration: 1,
          transform: "translate(0%, 0%) rotate(0deg)",
        },
        "-=0.5" // Delay the start of the animation by 0.5 seconds
      );

    // Add the timeline to the ScrollTrigger
    scrollTrigger.create({
      trigger:
        ".choose-us-box-1, .choose-us-box-2,.choose-us-box-3,.choose-us-box-4", // Unique trigger for the ScrollTrigger
      start: "top 20%",
      end: "bottom 70%",
      scrub: 5,
      animation: boxAnimation,
      toggleActions: "play none none reset",
    });

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  return (
    <section className="pb-16 md:pb-24 lg:pb-40 overflow-hidden" id="choose-us">
      <Container>
        <h2 className="mb-10 md:mb-14 font-clash-display font-medium text-[2rem] md:text-[4rem]">
          <TextSplit className="text-anim-3" text="Why Choose Us" />
        </h2>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {listItems.map((item, index) => (
            <li className={`relative z-10 ${item.position}`} key={index}>
              <div
                className={`why-choose-box transition-colors duration-500 flex flex-col px-9 pt-6 pb-9 min-h-[16rem] md:min-h-[25.5rem] bg-[#17171B] text-white rounded-[1.25rem] ${item.boxClassName}`}
              >
                <h1 className="font-clash-display font-medium text-[4rem] md:text-[7.5rem] relative overflow-hidden">
                  <span className="first">{item.number}</span>
                  <span className="sec">{item.number}</span>
                </h1>
                <h3 className="font-clash-display font-medium text-2xl md:text-[2.5rem] leading-[1.8rem] md:leading-[3rem] mt-auto ml-auto text-right max-w-[10.5rem] md:max-w-[16.75rem] capitalize">
                  {item.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
