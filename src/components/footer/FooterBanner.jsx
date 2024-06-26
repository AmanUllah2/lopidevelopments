import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import ShineIcon from "../icons/ShineIcon";
import Image from "next/image";

const FooterBanner = ({ title, buttonText }) => {
  return (
    <section className="bg-white">
      <Container>
        <div className="translate-y-12 bg-linear-gradient-2 text-white rounded-lg p-8 relative overflow-hidden">
          <span className="absolute bottom-0 -right-[15%] h-full w-full aspect-square">
            <Image fill src="/assets/images/footer-banner-p-1.svg" alt="...." />
          </span>
          <div className="flex flex-wrap items-center gap-8 relative">
            <div className="mr-auto max-w-[58.125rem]">
              <h5 className="mb-2 font-clash-display font-medium text-3xl lg:leading-[3rem] lg:text-[2.5rem]">
                {title}
              </h5>
            </div>
            <div>
              <Link
                href="/contact#contact-form"
                className="btn-primary-1 inline-block uppercase text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{buttonText ? buttonText : "Get in Touch"}</span>
                  <ShineIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterBanner;
