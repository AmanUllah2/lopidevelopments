"use client";
import React, { useRef, useEffect, useState } from "react";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import Magnetic from "../ui/Magnetic";
import NavLink from "../buttons/NavLink";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Nav from "./nav/Nav";

const navItems = [
  { name: "Home", link: "/#move-video" },
  { name: "Services", link: "/#services" },
  { name: "Our Workflow", link: "/#workflow" },
  { name: "Contact US", link: "/#contact-form" },
];

const Header = () => {
  const timeline = gsap.timeline();

  const [isActive, setIsActive] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const pathname = usePathname();
  const stickyElement = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    // Animate logo
    timeline.to(".logo", {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 2,
    });

    // Animate nav items
    timeline.to(".nav-link", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.to(".nav-button", {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 3,
    });

    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolledToBottom(true);
      } else if (window.scrollY < 50) {
        setIsScrolledToBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-30 py-3 border-b-2 transition-colors duration-300 ${
          isScrolledToBottom ? "bg-dark border-primary" : " border-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between gap-8 xl:gap-12">
            <Link href="/">
              <Magnetic ref={stickyElement}>
                <span className="logo h-16 w-32 relative block">
                  <Image
                    priority
                    fill
                    src="/assets/images/logo.png"
                    alt="..."
                  />
                </span>
              </Magnetic>
            </Link>
            <ul className="hidden lg:flex items-center gap-3 xl:gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className={`nav-link sticky-cursor-btn opacity-0`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Magnetic ref={stickyElement}>
              <Link
                href="/#contact-form"
                className="nav-button sticky-cursor-btn hidden lg:block py-3 px-[1.375rem] uppercase font-semibold text-sm text-dark bg-primary  rounded-full"
              >
                <span>Get in Touch</span>
              </Link>
            </Magnetic>
            <button
              type="button"
              className="flex items-center justify-center lg:hidden transition-transform duration-500 h-12 w-12 rounded-xl bg-[#131316] active:scale-110"
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              <span className="h-10 w-10 relative block">
                <Image
                  priority
                  fill
                  src="/assets/images/menu-bar.svg"
                  alt="..."
                />
              </span>
            </button>
          </nav>
        </Container>
      </header>

      <AnimatePresence mode="wait">
        {isActive && <Nav onClose={() => setIsActive(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
