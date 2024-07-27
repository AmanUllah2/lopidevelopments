import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Link from "next/link";
import FaceookIcon from "../icons/FaceookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import NavLink from "../buttons/NavLink";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61556964779698",
    icon: <FaceookIcon />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/aurorainsights/",
    icon: <InstagramIcon />,
    label: "Instagram",
  },
  // {
  //   href: "https://www.linkedin.com/company/100560359/",
  //   icon: <TwitterIcon />,
  //   label: "Twitter",
  // },
  {
    href: "https://www.linkedin.com/company/100560359/",
    icon: <LinkedinIcon />,
    label: "LinkedIn",
  },
];

const quickLinks = [
  { title: "Home", href: "/#move-video" },
  { title: "Services", href: "/#services" },
  { title: "Our Workflow", href: "/#workflow" },
  { title: "Contact US", href: "/#contact-form" },
];

const servicesLinks = [
  "MVP Development",
  "Scale Up",
  "User Testing",
  "UX Design",
  "Frontend Development",
  "Backend Development",
  "AI and Machine Learning",
  "Blockchain and Cryptocurrency",
  "SEO Services",
];

const Footer = () => {
  return (
    <footer className="bg-dark text-[#e0eeee] border-t-2 border-gray-800 pb-5 pt-16 lg:pb-10 lg:pt-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="col col-span-2 md:col-span-1 lg:col-span-2">
            <div>
              <Link href="/" className="h-20 w-44 relative block mb-7">
                <Image
                  priority
                  fill
                  src="/assets/images/logo.png"
                  alt="..."
                  className="object-contain"
                />
              </Link>
              <ul className="space-y-6 relative z-10">
                {/* <li>
                  <h6 className="mb-1 font-clash-display font-semibold">
                    Address:
                  </h6>
                  <h6 className="text-white/80">Alberta, Canada</h6>
                </li> */}
                <li>
                  <h6 className="mb-1 font-clash-display font-semibold">
                    Contact:
                  </h6>
                  <a
                    className="block text-white/80 hover:text-primary transition-colors duration-300"
                    href="tel:+923485421252"
                  >
                    +92-348-542-1252
                  </a>
                  <a
                    className="block text-white/80 hover:text-primary transition-colors duration-300"
                    href="mailto:contact@lopidevelopments.com"
                  >
                    contact@lopidevelopments.com
                  </a>
                </li>
                {/* <li>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors duration-300"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col">
            <ul className="space-y-4 relative z-10">
              <li>
                <h5 className="text-white font-medium font-clash-display text-base sm:text-lg capitalize">
                  Quick Links
                </h5>
              </li>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="footer-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <ul className="space-y-4 relative z-10">
              <li>
                <h5 className="text-white font-medium font-clash-display text-base sm:text-lg capitalize">
                  Services
                </h5>
              </li>
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <div className="footer-link">{link}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative mt-16 bg-[#0c0c1d] px-4 py-5 rounded-md md:rounded-2xl">
          <div className="flex flex-wrap justify-center text-center gap-4">
            <p className="md:mr-auto">
              © 2024 Lopi Tech Agency. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              {/* <Link className="font-roboto footer-sub-link" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="font-roboto footer-sub-link" href="/terms">
                Terms of Service
              </Link>
              <Link className="font-roboto footer-sub-link" href="/cookies">
                Cookies Settings
              </Link> */}
              <Link className="font-roboto footer-sub-link" href="#">
                Privacy Policy
              </Link>
              <Link className="font-roboto footer-sub-link" href="#">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
