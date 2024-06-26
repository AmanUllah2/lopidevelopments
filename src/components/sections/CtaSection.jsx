import React from "react";
import Container from "../ui/Container";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section>
      <Container>
        <div className="relative lg:h-[25rem] rounded-[1.25rem] bg-[url(/assets/images/bg-cta-small.png)] md:bg-[url(/assets/images/bg-cta.png)] bg-no-repeat bg-cover lg:bg-contain w-full px-11 pt-8 md:pt-[4.37rem] pb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <h2 className="max-w-[42.75rem] mr-auto font-clash-display font-medium leading-[2.4rem] md:leading-[3.3rem] lg:leading-[4.2rem] text-dark text-[2rem] md:text-[2.8rem] lg:text-[3.5rem]">
              Aurora Insights-Where Radical Means we are just getting started.
            </h2>
            <button
              type="button"
              className="mt-20 sm:mt-0 lg:mt-10 text-sm sm:text-base font-semibold border-2 transition-colors duration-500 text-white border-primary bg-dark hover:text-dark hover:bg-primary hover:border-black py-4 px-6 rounded-full"
            >
              We’d love to discuss your project
            </button>
          </div>
        </div>
        <div className="mt-5 md:-mt-5 lg:-mt-6 md:ml-9">
          <Link
            href="/blogs"
            className="block md:inline-block text-center btn-primary sticky-cursor-btn"
          >
            <span>Features</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
