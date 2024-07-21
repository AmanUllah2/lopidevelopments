"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import Magnetic from "../ui/Magnetic";
import Container from "../ui/Container";
import Link from "next/link";

gsap.registerPlugin(scrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.to(".text-anim-1", {
      opacity: 1,
      filter: "blur(0)",
      y: 0,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.3,
    });

    timeline.to(".btn-effect", {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: 0.2,
      stagger: 0.2,
    });

    timeline.to("video", {
      opacity: 1,
      duration: 0.3,
      ease: "power1.in",
    });

    // Use ScrollTrigger to trigger animation on the video element
    gsap.to("#video video", {
      // Changed from gsap.fo to gsap.to
      scrollTrigger: {
        trigger: "#move-video",
        scroller: "body",
        start: "top 20vh", // Animation starts when the top of the video comes into view
        end: "bottom 100%", // Animation ends when the bottom of the video leaves the view
        scrub: 2.3, // Smooth animation while scrolling
      },
      scale: 1,
      y: 0,
      borderRadius: "2rem",
      marginTop: "8rem",
      duration: 0.5,
    });
  }, []);

  const stickyElement = useRef(null);

  return (
    <section className="py-16 2xl:py-20" id="move-video">
      <Container>
        <div className="text-center max-w-[54.125rem] mx-auto">
          <h1 className="mb-6 text-4xl lg:text-[4.5rem] lg:leading-[5.4rem] heading-1">
            <span className="block text-anim-1">Empowering Innovation</span>
            <span className="block text-anim-1">One Solution at a Time</span>
          </h1>
          <p className="text-anim-1 text-2xl md:text-3xl lg:text-3xl text-white/80 mx-auto max-w-[33.75rem]">
            We design, develop, and deliver cutting-edge tech solutions.
          </p>
        </div>
        <div className="flex justify-between gap-6 mt-[6.25rem] relative z-10">
          <Magnetic className="w-1/2 sm:w-auto sm:min-w-[12rem]">
            <a
              href="#services"
              ref={stickyElement}
              className="inline-flex items-center justify-center text-center h-full w-full btn-effect btn-primary opacity-0 translate-y-14 sticky-cursor-btn"
            >
              <span>Explore services</span>
            </a>
          </Magnetic>

          <Magnetic className="w-1/2 sm:w-auto sm:min-w-[12rem]">
            <Link
              href="/#contact-form"
              ref={stickyElement}
              className="inline-flex items-center justify-center text-center h-full w-full btn-effect btn-primary opacity-0 translate-y-14 sticky-cursor-btn"
            >
              <span>Let's Build Your Future</span>
            </Link>
          </Magnetic>
        </div>

        <div id="video" className="w-full h-full mt-0 relative z-20">
          <video
            poster="/assets/images/video-poster.jpg"
            className="h-full w-full hidden md:block opacity-0 video-1"
            style={{
              borderRadius: "30rem",
            }}
            loop
            playsInline
            autoPlay
            muted
            controls
          >
            <source src="/assets/videos/intro-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="md:hidden mt-10">
          <video
            poster="/assets/images/video-poster.jpg"
            className="h-full w-full aspect-video opacity-0"
            style={{
              borderRadius: "2rem",
            }}
            loop
            playsInline
            autoPlay
            muted
            controls
          >
            <source src="/assets/videos/intro-video.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
