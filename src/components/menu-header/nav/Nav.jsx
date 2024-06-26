import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navItems = [
  { title: "Home", href: "/#move-video" },
  { title: "Services", href: "/#services" },
  { title: "Our Workflow", href: "/#workflow" },
  { title: "Contact US", href: "/#contact-form" },
];

export default function Nav({ onClose }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="body">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="nav"
        >
          <span className="absolute top-0 left-0 mx-16 my-8">
            <span className="h-20 w-44 relative block">
              <Image
                priority
                fill
                src="/assets/images/logo.png"
                alt="..."
                className="object-contain"
              />
            </span>
          </span>

          <button
            type="button"
            className="absolute top-0 right-0 m-8 rounded-md text-white hover:text-gray-100 focus:outline-none"
            onClick={onClose}
          >
            <XMarkIcon className="h-14 w-14" aria-hidden="true" />
          </button>

          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                onClick={onClose}
              ></Link>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
