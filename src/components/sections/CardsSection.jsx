import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const CardsSection = ({ title, para, items }) => {
  return (
    <section className="bg-[#F1F5F9] text-black py-16 md:py-20 lg:py-28">
      <Container>
        <div className="relative">
          <div className="max-w-[48rem] mx-auto text-center mb-14 lg:mb-20">
            <h2 className="mb-6 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
              {title}
            </h2>
            <p className=" text-[#0C0B1B]/80">{para}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {items.map((card, index) => (
              <div key={index} className="col">
                <div className="h-full card bg-white rounded-lg p-4">
                  <div className="relative w-full h-60 mb-6">
                    <Image
                      fill
                      src={card.src}
                      className="object-cover rounded"
                      alt={card.alt}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h4 className="mb-4 text-black text-xl md:text-2xl font-clash-display font-medium capitalize">
                    {card.title}
                  </h4>
                  <p className="text-black/80">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 lg:mt-16">
            <Link
              href="/contact#contact-form"
              className="btn-primary-1 inline-block uppercase text-sm sm:text-base"
            >
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CardsSection;
