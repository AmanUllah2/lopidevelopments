import React from "react";
import Container from "../ui/Container";
import Image from "next/image";

const FeaturesSection = ({ title, para, items }) => {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 xl:gap-20">
          <div className="col">
            <div className="max-w-[32.125rem] sticky top-28">
              <h2 className="mb-4 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
                {title}
              </h2>
              <div className="space-y-2 xl:space-y-6  text-[#000]/70">
                <p>{para}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <ul className="space-y-4 max-w-[35.75rem]">
              {items.map((step, index) => {
                const isLastItem = index === items.length - 1;
                return (
                  <li key={step.id}>
                    <div className="flex gap-10">
                      <div
                        className={`flex flex-col items-center gap-2 ${
                          !isLastItem ? "min-h-[10.75rem]" : ""
                        }`}
                      >
                        <span className="block relative h-14 w-14">
                          <Image
                            fill
                            src={step.iconSrc}
                            alt="..."
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </span>
                        {!isLastItem && (
                          <hr className="border-0 flex-1 bg-black/20 w-0.5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 md:mb-4 font-clash-display font-medium text-black text-xl sm:text-2xl line-clamp-1">
                          {step.title}
                        </h4>
                        <p className="font-roboto">{step.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
