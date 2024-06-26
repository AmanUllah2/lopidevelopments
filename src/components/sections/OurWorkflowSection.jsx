"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import Container from "../ui/Container";
import TextSplit from "../splits/TextSplit";
import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(scrollTrigger);

const OurWorkflowSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "bottom 90%",
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

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  return (
    <section className="pb-24 overflow-hidden" id="workflow">
      <Container>
        <div className="max-w-2xl mx-auto mb-10 md:mb-24 text-center">
          <h2 className="font-clash-display font-medium text-[2rem] md:text-[4rem]">
            <TextSplit className="text-anim-3" text="Our Workflow" />
          </h2>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 relative">
            <div className="w-full sm:w-1/2 xl:w-3/12 mb-14 xl:mb-0 relative">
              <div className="text-center max-w-xs md:px-6 mx-auto">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                  <MagnifyingGlassIcon className="h-8 w-8 text-dark" />
                </div>
                <h3 className="mt-5 mb-4 text-xl md:text-3xl font-heading text-white">
                  Discover
                </h3>
                <p className="text-gray-400 leading-8">
                  We listen, research, and understand your needs
                </p>
              </div>
              <img
                className="hidden xl:block w-40 absolute right-0 top-0 mt-8 -mr-20"
                src="/assets/images/how-it-works-6-line.png"
                alt="..."
              />
            </div>
            <div className="w-full sm:w-1/2 xl:w-3/12 mb-14 xl:mb-0 relative">
              <div className="text-center max-w-xs md:px-6 mx-auto">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                  <PencilIcon className="h-8 w-8 text-dark" />
                </div>
                <h3 className="mt-5 mb-4 text-xl md:text-3xl font-heading text-white">
                  Design
                </h3>
                <p className="text-gray-400 leading-8">
                  Our experts craft innovative solutions tailored to your goals
                </p>
              </div>
              <img
                className="hidden xl:block w-40 absolute right-0 top-0 mt-8 -mr-20"
                src="/assets/images/how-it-works-6-line.png"
                alt="..."
              />
            </div>
            <div className="w-full sm:w-1/2 xl:w-3/12 mb-14 xl:mb-0 relative">
              <div className="text-center max-w-xs md:px-6 mx-auto">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                  <CodeBracketIcon className="h-8 w-8 text-dark" />
                </div>
                <h3 className="mt-5 mb-4 text-xl md:text-3xl font-heading text-white">
                  Develop
                </h3>
                <p className="text-gray-400 leading-8">
                  We bring designs to life with cutting-edge technology
                </p>
              </div>
              <img
                className="hidden xl:block w-40 absolute right-0 top-0 mt-8 -mr-20"
                src="/assets/images/how-it-works-6-line.png"
                alt="..."
              />
            </div>
            <div className="w-full sm:w-1/2 xl:w-3/12 mb-14 xl:mb-0">
              <div className="text-center max-w-xs md:px-6 mx-auto">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                  <RocketLaunchIcon className="h-8 w-8 text-dark" />
                </div>
                <h3 className="mt-5 mb-4 text-xl md:text-3xl font-heading text-white">
                  Deploy
                </h3>
                <p className="text-gray-400 leading-8">
                  Your solution goes live, with ongoing support and maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurWorkflowSection;
