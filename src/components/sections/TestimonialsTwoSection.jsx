"use client";
import React from "react";
import Container from "../ui/Container";
import { StarIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    name: "Judith Black",
    position: "CEO of Workcation",
    image: "/assets/images/test-image-1.png",
  },
];

const TestimonialsTwoSection = () => {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={false}
          autoplay={{
            delay: 30000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 gap-10 items-center">
                <figure className="col md:w-1/2 mx-auto">
                  <span className="relative block aspect-[16/12]">
                    <Image
                      fill
                      src={testimonial.image}
                      className="object-cover rounded-md"
                      alt="..."
                    />
                  </span>
                </figure>
                {/* <figure className="col">
                  <span className="relative block aspect-[16/12]">
                    <Image
                      fill
                      src={testimonial.image}
                      className="object-cover"
                      alt="..."
                    />
                  </span>
                </figure> */}
                {/* <figure className="col">
                  <p className="sr-only">5 out of 5 stars</p>
                  <div className="flex gap-x-1 text-black">
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
                  <blockquote className="mt-7 text-xl font-clash-display leading-8 tracking-tight sm:text-2xl sm:leading-9">
                    <i>"{testimonial.quote}"</i>
                  </blockquote>
                  <figcaption className="mt-7 flex gap-x-6">
                    <div className="text-sm leading-6">
                      <div className="font-semibold font-roboto">
                        {testimonial.name}
                      </div>
                      <div className="mt-0.5 font-roboto">
                        {testimonial.position}
                      </div>
                    </div>
                  </figcaption>
                </figure> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsTwoSection;
