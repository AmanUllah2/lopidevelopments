import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import ShineIcon from "../icons/ShineIcon";

const packageData = [
  {
    imageSrc: "/assets/images/package-item-1.png",
    title: "$15K Website Pro Package",
    slug: "15k-website-pro-package",
    description:
      "Our pro package is for the pros out there, and is designed for premium website performance and accessibility. We’re talking lightning-fast website speeds, lead forms, integration, your very own dedicated content writer and more!",
  },
  {
    imageSrc: "/assets/images/package-item-2.png",
    title: "$1,500 WordPress Standard Package",
    slug: "1500-wordpress-standard-package",
    description:
      "You’ve seen a website you really like and are wondering if we can do something similar but better, then this package is for you. We can clone website designs onto WordPress and rebuild the CSS.",
  },
  {
    imageSrc: "/assets/images/package-item-3.png",
    title: "Standard Website Package",
    slug: "standard-website-package",
    description:
      "You want a killer website that does its job and stands out in the crowd. Our standard website package has got you covered. This package includes 8 content pages and we’ve thrown in a professional writer in the mix to really get things going.",
  },
  {
    imageSrc: "/assets/images/package-item-4.png",
    title: "Lite Package",
    slug: "lite-package",
    description:
      "You’re starting out a new business venture and you’ve maxed out all your cards but still want a functional website without all the fancy additions. Sound familiar? Our lite package gets your website up and running, quickly and without breaking the bank.",
  },
];

const PackagesSection = () => {
  return (
    <section className="bg-[#F1F5F9] text-black py-16 md:py-20 lg:py-28">
      <Container>
        <div className="max-w-[48rem] mb-14 lg:mb-20">
          <h2 className="mb-4 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
            Packages
          </h2>
          <p className=" text-[#0C0B1B]/80">
            Discover our packages tailored around your requirements and budget
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packageData.map((pkg) => (
            <Link href={`/packages/${pkg.slug}`} className="col" key={pkg.slug}>
              <figure className="h-full flex flex-col card bg-white rounded-lg border border-black/10 px-4 py-6 group">
                <span className="block relative h-44 w-52 mx-auto mb-6 group-hover:scale-95 transition-transform duration-500">
                  <Image
                    fill
                    className="object-contain"
                    src={pkg.imageSrc}
                    alt={pkg.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
                <h4 className="mb-3 md:mb-4 font-clash-display font-medium text-black text-xl sm:text-2xl">
                  {pkg.title}
                </h4>
                <p className="text-black/80">{pkg.description}</p>
                <div className="pt-6 mt-auto">
                  <button type="button" className="btn-primary-2">
                    <span className="block relative z-10 uppercase">
                      Choose Package
                    </span>
                  </button>
                </div>
              </figure>
            </Link>
          ))}
        </div>
        <div className="mt-7 md:mt-10 bg-white rounded-lg p-6 flex flex-wrap items-center gap-8">
          <div className="mr-auto max-w-[40.875rem]">
            <h5 className="mb-2 text-black font-clash-display font-medium text-xl">
              Can't find a package that suits your needs?
            </h5>
            <p className="text-black">
              Reach out to us for a custom quote! We also offer convenient
              monthly payment plans. Contact us today to learn more!
            </p>
          </div>
          <div>
            <Link
              href="/contact#contact-form"
              className="btn-primary-1 inline-block uppercase text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Get in Touch</span>
                <ShineIcon />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PackagesSection;
