import React from "react";
import Container from "../ui/Container";
import Image from "next/image";

const AboutFeatureSection = ({ title, para, items }) => {
  return (
    <section className="bg-[#F1F5F9] text-black py-16 md:pt-20 lg:pb-20 lg:pt-28">
      <Container>
        <div className="relative">
          <div className="max-w-[48rem] mb-14 lg:mb-20">
            <h2 className="mb-6 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
              {title}
            </h2>
            <p className=" text-[#0C0B1B]/80">{para}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {items.map((card, index) => (
              <div key={index} className="col">
                <div className="h-full card bg-white rounded-lg p-4">
                  <div className="relative w-12 h-12 mb-4">
                    <Image
                      fill
                      src={card.src}
                      className="object-contain"
                      alt="..."
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
        </div>
      </Container>
    </section>
  );
};

export default AboutFeatureSection;
