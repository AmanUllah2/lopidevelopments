"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function ScreenLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({ delay: 0.5 });
    loaderTimeline
      .to(".loader", {
        y: "-100%",
        // filter: "blur(0)",
        duration: 1,
        onComplete: () => setShowLoader(false),
      })
      .from(".logo-1", {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power4.out",
      });
  }, []);

  return (
    <>
      {showLoader && (
        <div className="loader fixed z-50 top-0 left-0 h-full w-full translate-y-0 bg-[#14122d] flex items-center justify-center">
          <span className="relative h-52 w-52 logo-1 scale-100 transition-all duration-500">
            <Image
              priority
              fill
              src="/assets/images/logo.png"
              alt="logo-1"
              className="object-contain filter grayscale"
            />
          </span>
        </div>
      )}
    </>
  );
}
