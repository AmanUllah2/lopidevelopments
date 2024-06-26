"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import Accordion from "../ui/Accordion";

const FaqSection = ({ title, text, data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white text-black py-16 md:py-20">
      <Container>
        <div className="max-w-[44rem] mx-auto text-center mb-14 lg:mb-20">
          <h2 className="mb-6 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
            {title}
          </h2>
          {text && (
            <p className="max-w-[39rem] mx-auto text-center  text-[#0C0B1B]/80">
              {text}
            </p>
          )}
        </div>
        <div className="space-y-4 mx-auto max-w-[64.5rem]">
          {data.map((item, i) => (
            <Accordion
              key={i}
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
