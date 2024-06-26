"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Container from "../ui/Container";
import Image from "next/image";

const BannerSection = ({ imageUrl, subTitle, title, description }) => {
  useEffect(() => {
    const timeline = gsap.timeline();

    // Image animation
    timeline.to(".banner-image", { opacity: 1, duration: 1.3 });

    // Subtitle, title, and description fade in sequentially
    timeline
      .to(".banner-subtitle", { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .to(".banner-title", { x: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .to(".banner-description", { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");
  }, []);

  return (
    <section className="relative bg-black">
      <Image
        priority
        fill
        src={imageUrl}
        alt={title}
        className="banner-image opacity-0 object-cover"
      />
      <div className="relative overflow-hidden bg-color-2">
        <Container>
          <div className="min-h-[22rem] md:min-h-[25rem] lg:min-h-[31rem] max-w-[32.652rem] flex flex-col justify-center py-10">
            <small className="mb-4 block uppercase text-primary text-sm font-medium -translate-y-full opacity-0 banner-subtitle">
              {subTitle}
            </small>
            <h2 className="mb-6 text-white font-clash-display font-medium leading-[2.7rem] md:leading-[3.6rem] text-4xl md:text-5xl -translate-x-full opacity-0 banner-title">
              {title}
            </h2>
            <p className="text-white/80 text-base sm:text-lg translate-y-full opacity-0 banner-description">
              {description}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default BannerSection;
