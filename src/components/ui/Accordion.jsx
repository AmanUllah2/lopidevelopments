"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";

const Accordion = ({ i, expanded, setExpanded, title, description }) => {
  const isOpen = i === expanded;

  return (
    <div className="bg-white text-black border border-black/20 py-5 px-6 rounded-2xl">
      <motion.div
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex justify-between cursor-pointer">
          <span className="text-black font-medium text-lg md:text-xl">
            {title}
          </span>
          <span>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            // Add animations for the accordion content
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: "1rem" },
              collapsed: { opacity: 0, height: 0, marginTop: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p className=" text-black/70 md:text-lg">{description}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
