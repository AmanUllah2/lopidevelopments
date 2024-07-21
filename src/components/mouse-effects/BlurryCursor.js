"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Flash from "./Flash";

export default function BlurryCursor() {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const circle = useRef();
  const size = "1.25rem";
  const rafId = useRef(null);

  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.15),
      y: lerp(y, mouse.current.y, 0.15),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x, y) => {
    gsap.set(circle.current, {
      x,
      y,
      xPercent: -20,
      yPercent: -20,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    animate(); // Start animation loop

    const handleMouseEnter = () => {
      document.querySelector(".mouse-cursor").classList.add("bnz-large");
    };

    const handleMouseLeave = () => {
      document.querySelector(".mouse-cursor").classList.remove("bnz-large");
    };

    const cursorblur = document.querySelectorAll("a, button");

    cursorblur.forEach((blur) => {
      blur.addEventListener("mouseenter", handleMouseEnter);
      blur.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      // Stop animation loop on component unmount
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }

      cursorblur.forEach((blur) => {
        blur.removeEventListener("mouseenter", handleMouseEnter);
        blur.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <Flash />
      <div
        ref={circle}
        style={{
          backgroundColor: "#E0EEEE",
          width: size,
          height: size,
        }}
        className="hidden md:block top-0 left-0 fixed z-10 rounded-full mouse-cursor mix-blend-difference"
      />
    </>
  );
}
