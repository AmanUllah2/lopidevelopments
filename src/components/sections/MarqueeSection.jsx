"use client";
import { Fragment } from "react";

const MarqueeSection = () => {
  const repeatedTextOne = Array.from({ length: 6 }, (_, index) => (
    <Fragment key={index}>
      <h3>wild ideas!</h3>
      <h3 className="px-5">—</h3>
      <h3>LET’S DIVE IN !</h3>
      <h3 className="px-5">—</h3>
    </Fragment>
  ));

  const repeatedTextTwo = Array.from({ length: 6 }, (_, index) => (
    <Fragment key={index}>
      <h3>LET’S DIVE IN !</h3>
      <h3 className="px-5">—</h3>
      <h3>wild ideas!</h3>
      <h3 className="px-5">—</h3>
    </Fragment>
  ));

  return (
    <section
      id="marquee-section"
      className="pb-16 md:pb-24 lg:pb-32 overflow-hidden"
    >
      <div className="move-left marquee-left">
        <div className="flex leading-[3rem] text-[2.5rem] lg:leading-[7.2rem] lg:text-[6rem] font-clash-display font-normal uppercase">
          <div className="flex whitespace-nowrap">{repeatedTextOne}</div>
        </div>
      </div>
      <div className="move-right marquee-right">
        <div className="flex leading-[3rem] text-[2.5rem] lg:leading-[7.2rem] lg:text-[6rem] font-clash-display font-normal uppercase">
          <div className="flex whitespace-nowrap">{repeatedTextTwo}</div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
