"use client";
import React from "react";
import { useParams } from "next/navigation";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import FaqSection from "@/components/sections/FaqSection";
import FooterBanner from "@/components/footer/FooterBanner";
import ScreenLoader from "@/components/loaders/ScreenLoader";
import Link from "next/link";
import MetaData from "@/components/seo/MetaData";

// Sample package data
const packageData = [
  {
    imageSrc: "/assets/images/package-item-1.png",
    title: "$15K Website Pro Package",
    slug: "15k-website-pro-package",
    description:
      "Our pro package is for the pros out there, and is designed for premium website performance and accessibility. We’re talking lightning-fast website speeds, lead forms, integration, your very own dedicated content writer and more!",
    details: [
      "Your business needs a website that not only looks good, but also reels in your target audience and equips you with all the necessary tools to track. And our Pro Package offers that and more!",
      "With the Aurora Insights Pro Package, you’ll get everything our Standard Website Package offers, with the added benefits of lightning-fast website speed, conversion tracking to keep you ahead of the curve at all times, lead forms to convert leads to lifelong customers and a custom app interface. And if that wasn’t enough, you get a dedicated writer — perfect for all those times when you know what to say but need help with how you say it.",
    ],
    features: [
      "Custom website design in Figma",
      "Design revisions",
      "A professional content writer (Maximum 10 pages)",
      "Conversion tracking",
      "Lead forms",
      "Custom app integrations",
      "3 months of pro support",
    ],
    pricing: "Starting at $15,000",
    callToAction:
      "Are you ready to make a difference? Get in touch with us for more information on how we can help bring your prototype to life.",
  },
  {
    imageSrc: "/assets/images/package-item-2.png",
    title: "$1,500 WordPress Standard Package",
    slug: "1500-wordpress-standard-package",
    description:
      "You’ve seen a website you really like and are wondering if we can do something similar but better, then this package is for you. We can clone website designs onto WordPress and rebuild the CSS.",
    details: [
      "Do you already have a current website you’re unhappy with? Or have you fallen in love with a competitor’s website that you just can't seem to forget? Whatever the case, our WordPress Standard Package is the perfect fix.",
      "To get started, you’ll have to show our team of developers your website that we can use as a starting point. Rest easy knowing we’ll add our own twist to it! ",
    ],
    features: [
      "WordPress Clone website using Elementor Pro",
      "Completed in as little as three days!",
    ],
    pricing: "Starting at $1,500",
    callToAction:
      "With Aurora Insights you can reinvent your brand or business effortlessly. We generate cohesive designs every time, that function just as good as they look.",
  },
  {
    imageSrc: "/assets/images/package-item-3.png",
    title: "Standard Website Package",
    slug: "standard-website-package",
    description:
      "You want a killer website that does its job and stands out in the crowd. Our standard website package has got you covered. This package includes 8 content pages and we’ve thrown in a professional writer in the mix to really get things going.",
    details: [
      "Consumer expectations have reached new heights — they’re not just looking for great products but also seamless experiences. Our Standard Website Package is the perfect fix for when you’re looking for a website that represents your brand and resonates with your target audience.",
      "Our Standard Website Package comes with everything in our Lite Package, with the added benefit of a dedicated content and copywriter. Our custom designs are made in Figma and we provide unlimited revisions until you’re satisfied with the end result.",
    ],
    features: [
      "Custom website design in Figma",
      "Unlimited design revisions",
      "A professional writer (Maximum 10 pages)",
    ],
    pricing: "Starting at $4,500",
    callToAction:
      "A brilliant website design is now just a click away. Get in touch with us today to learn how we can help bring your vision to inception.",
  },
  {
    imageSrc: "/assets/images/package-item-4.png",
    title: "Lite Package",
    slug: "lite-package",
    description:
      "You’re starting out a new business venture and you’ve maxed out all your cards but still want a functional website without all the fancy additions. Sound familiar? Our lite package gets your website up and running, quickly and without breaking the bank.",
    details: [
      "If you’re on the hunt for a professional website that is functional and gets the job done, our Lite Package is the way to go. We’ll work closely with you to build a professional-looking, SEO-optimized and mobile-friendly website design in Figma. This package is ideal for small business or startup owners who aren’t looking for something too fancy.",
    ],
    features: ["Custom website design in Figma", "Design revisions"],
    pricing: "Starting at $3000",
    callToAction:
      "Testing waters and aren’t sure if you want to commit to a full-fledged website with all the bells and whistles? No sweat! Hit us up today to get more information on how our Lite Package can change the game for you – quickly and affordably.",
  },
];

const data = [
  {
    title: "How long does it take to build a website?",
    description:
      "The time to build a website can vary greatly depending on its complexity. A basic website might take 4-6 weeks, while a more complex site could require several months. The timeline includes phases such as design, development, testing, and launch.",
  },
  {
    title: "How much does building a website cost?",
    description:
      "Please have a look at our plans or give us a call for a more detailed response.",
  },
  {
    title: "Can you redesign an existing website?",
    description:
      "Yes, we can redesign your existing website to update its appearance, improve usability, and enhance functionality. We'll evaluate your current site and discuss your goals to ensure the redesign meets your business needs.",
  },
  {
    title: "Can I update the website you’ve designed on my own?",
    description:
      "Absolutely! We design websites with user-friendly content management systems (CMS) like WordPress, allowing you to make updates and manage content easily. We also provide training and support to help you get comfortable with the system.",
  },
  {
    title: "What will you need from me to get started?",
    description:
      "To begin, we'll need a clear project brief, which includes your goals, target audience, desired features, and any specific design preferences.",
  },
  {
    title: "Can you integrate third-party services into my eCommerce site?",
    description:
      "Yes, we can integrate various third-party services, such as payment gateways, shipping providers, customer relationship management (CRM) systems, and marketing tools to streamline operations and enhance functionality.",
  },
  {
    title: "What is custom website development?",
    description:
      "Custom website development involves creating a website tailored specifically to your business needs and goals. Unlike template-based designs, custom development provides unique features, designs, and functionalities that align perfectly with your brand and requirements.",
  },
];

const PackageDetailClient = ({ slug }) => {
  const pkg = packageData.find((p) => p.slug === slug);

  if (!pkg) {
    return <p>Package not found</p>;
  }

  return (
    <>
      <MetaData
        title="Package | Aurora Insights"
        description="Dominate The Digital Wilderness Powering Success with Innovative Design, Dynamic Branding, and Advanced Tech Solutions."
      />
      <ScreenLoader />
      <main>
        <section className="pt-10 pb-10 lg:pb-28 bg-[#F1F5F9]">
          <Container>
            <div className="flex flex-col md:flex-row gap-8 xl:gap-16 max-w-[69.875rem] mx-auto md:items-center">
              <div className="image-c">
                <div className="relative h-[20rem] w-[25rem]">
                  <Image
                    src={pkg.imageSrc}
                    alt={pkg.title}
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="mb-4 font-clash-display text-3xl lg:leading-[3rem] lg:text-[2.5rem] font-medium">
                  {pkg.title}
                </h2>
                <p className="text-black/80 text-xl">{pkg.description}</p>
                <Link
                  href="/contact#contact-form"
                  className="inline-block mt-8 btn-primary-1"
                >
                  <span className="relative z-10 uppercase">
                    Choose Package
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-white text-black py-16 md:py-20">
          <Container>
            <div className="max-w-[50.125rem] mx-auto">
              <figure>
                <h4 className="mb-4 text-black font-clash-display font-medium text-3xl">
                  Details
                </h4>
                <div className="space-y-5 text-black/80 text-lg">
                  {pkg.details.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </figure>
              <figure className="mt-16">
                <h2 className="mb-4 text-black font-clash-display font-medium text-2xl">
                  Package Features
                </h2>
                <ul className="space-y-4 font-roboto text-black">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-x-4">
                      <CheckIcon
                        className={`h-6 w-6 flex-none text-[#138867]`}
                      />
                      <span
                        className={feature.notAvailable ? "opacity-50" : ""}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </figure>
              <figure className="mt-16">
                <h2 className="mb-4 text-black font-clash-display font-medium text-2xl">
                  Pricing
                </h2>
                <h4 className="mb-4 text-black font-roboto text-xl">
                  {pkg.pricing}
                </h4>
                <p className="text-black/80 text-lg">{pkg.callToAction}</p>
              </figure>
            </div>
          </Container>
        </section>
        <FaqSection title="Got Questions? We’ve Got Answers." data={data} />
        <FooterBanner title="We’ve helped countless companies rebrand themselves. Yours could be next." />
      </main>
    </>
  );
};

export default PackageDetailClient;
