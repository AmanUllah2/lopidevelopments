import PackageDetailClient from "../PackageDetailClient";

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

export async function generateStaticParams() {
  return packageData.map((pkg) => ({
    slug: pkg.slug,
  }));
}

const PackageDetailPage = ({ params }) => {
  const { slug } = params;

  return <PackageDetailClient slug={slug} />;
};

export default PackageDetailPage;
