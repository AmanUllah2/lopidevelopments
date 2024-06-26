"use client";
import React from "react";
import Container from "../ui/Container";
import { StarIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    name: "Judith Black",
    position: "CEO of Workcation",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    name: "Judith Black",
    position: "CEO of Workcation",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
  },
];

const AboutTestimonialsSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="relative">
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
                  <div className="flex justify-center gap-x-1 text-black">
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
                  <blockquote className="mt-7 text-xl font-clash-display text-center leading-8 tracking-tight text-black sm:text-2xl sm:leading-9">
                    <i>"{testimonial.quote}"</i>
                  </blockquote>
                  <figcaption className="mt-7 flex justify-center items-center gap-x-6">
                    <img
                      className="h-12 w-12 rounded-full bg-gray-50"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="text-sm leading-6">
                      <div className="font-semibold font-roboto text-black">
                        {testimonial.name}
                      </div>
                      <div className="mt-0.5 font-roboto text-black">
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
    </section>
  );
};

export default AboutTestimonialsSection;
