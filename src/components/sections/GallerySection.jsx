import React from "react";
import Container from "../ui/Container";
import Image from "next/image";

const images = [
  "/assets/images/gallery-1.jpg",
  "/assets/images/gallery-2.jpg",
  "/assets/images/gallery-3.jpg",
  "/assets/images/gallery-4.jpg",
  "/assets/images/gallery-5.jpg",
  "/assets/images/gallery-6.jpg",
  "/assets/images/gallery-7.jpg",
  "/assets/images/gallery-8.jpg",
];

export const GallerySection = () => {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <Container>
        <div className="max-w-[38rem] mx-auto text-center mb-14 lg:mb-20">
          <h2 className="mb-6 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
            Here’s some of the work our clients love us for
          </h2>
          <p className="max-w-[39rem]  text-[#0C0B1B]/80">
            You’ve got to see it to believe it, right?
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 space-y-4">
          {images.map((src, index) => (
            <Image
              key={index}
              className="rounded-lg object-cover bg-gray-100"
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              layout="responsive"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
