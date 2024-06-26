"use client";
import React from "react";
import Container from "../ui/Container";
import { StarIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    quote:
      "Lopi Tech Agency delivered a top-notch solution that exceeded our expectations. Their team is professional, responsive, and innovative.",
    name: "John Doe",
    position: "ABC Corporation",
    image: "/assets/images/face-1.jpg",
  },
  {
    quote:
      "We were impressed by Lopi's expertise in AI and machine learning. They helped us build a game-changing product that transformed our business.",
    name: "Jane Smith",
    position: "XYZ Startups",
    image: "/assets/images/face-3.jpg",
  },
  {
    quote:
      "Lopi's team is highly skilled and dedicated. They worked closely with us to understand our needs and delivered a high-quality solution on time.",
    name: "Bob Johnson",
    position: "DEF Agency",
    image: "/assets/images/face-2.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#090927] text-white">
      <div className="max-w-[90rem] mx-auto relative py-16 md:py-20">
        <span className="absolute bottom-0 left-0">
          <img
            className="h-full w-full"
            src="/assets/images/world-map.svg"
            alt="..."
          />
        </span>
        <span className="absolute bottom-0 left-0 md:left-52">
          <img
            className="h-full w-full"
            src="/assets/images/p-g-light-1.svg"
            alt="..."
          />
        </span>
        <Container>
          <div className="relative z-10">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <figure className="item-1 mx-auto max-w-4xl">
                    <p className="sr-only">5 out of 5 stars</p>
                    <div className="flex justify-center gap-x-1 text-[#E7942C]">
                      <StarIcon
                        className="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                    </div>
                    <blockquote className="mt-7 text-xl font-clash-display text-center leading-8 tracking-tight text-white sm:text-2xl sm:leading-9">
                      <i>"{testimonial.quote}"</i>
                    </blockquote>
                    <figcaption className="mt-7 flex justify-center items-center gap-x-6">
                      <img
                        className="h-12 w-12 rounded-full bg-gray-50"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div className="text-sm leading-6">
                        <div className="font-semibold font-roboto text-white">
                          {testimonial.name}
                        </div>
                        <div className="mt-0.5 font-roboto text-white">
                          {testimonial.position}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default TestimonialsSection;
