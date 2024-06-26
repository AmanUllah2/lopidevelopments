import { useState } from "react";
import { Switch } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Container from "../ui/Container";
import ShineIcon from "../icons/ShineIcon";
import Image from "next/image";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Organic",
    id: "organic",
    price: { monthly: "CA$1,000", annually: "CA$5,000" },
    description: "Features and services for startups and small businesses",
    features: [
      { item: "Basic SEO Audit" },
      { item: "Competitor Analysis", notAvailable: true },
      { item: "10 pages On-Page Optimization" },
      { item: "Bad Links Removal (Disavow)", notAvailable: true },
      { item: "Basic Technical SEO Checks" },
      { item: "Basic Off-Page Strategy" },
      { item: "3 Guest Posting per month" },
      { item: "Up to 50 Keywords Researched" },
      { item: "3 Listing Management" },
    ],
    mostPopular: false,
  },
  {
    name: "Focused",
    id: "focused",
    price: { monthly: "CA$2,000", annually: "CA$8,000" },
    description:
      "Comprehensive SEO package for businesses serious about online visibility.",
    features: [
      { item: "In-depth Ongoing Competitor Analysis (3 competitors)" },
      { item: "20 pages On-Page Optimization" },
      { item: "Up to 200 Bad Links Removal (Disavow)" },
      { item: "Bad Links Removal (Disavow)", notAvailable: true },
      { item: "Advanced Technical SEO Fix Instructions" },
      { item: "Enhanced Off-Page Strategy" },
      { item: "3 Off-Site Guest Posts per month" },
      { item: "2 On-Site Posts per month" },
      { item: "Up to 200 Keywords Researched" },
      { item: "10 Listing Management" },
    ],
    mostPopular: true,
  },
  {
    name: "Premium Tier",
    id: "premium-tier",
    price: { monthly: "CA$4,000", annually: "CA$10,000" },
    description:
      "Comprehensive SEO package for large enterprises seeking maximum online visibility",
    features: [
      { item: "Full Site & Multi-Location On-Page Optimization" },
      { item: "In-depth Ongoing Competitor Analysis (10 competitors)" },
      { item: "Unlimited Bad Links Removal" },
      { item: "Full Technical SEO Optimization" },
      { item: "Full Website Technical SEO Implementation†" },
      { item: "Comprehensive Off-Page Strategy" },
      { item: "5 Off-Site Guest Posts per month" },
      { item: "4 On-Site Guest Posts per month" },
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HostingPackageSection = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  const toggleFrequency = () => {
    setFrequency((prevFrequency) =>
      prevFrequency.value === "monthly" ? frequencies[1] : frequencies[0]
    );
  };

  return (
    <section className="bg-white text-black py-16 md:py-20 relative">
      <span className="absolute block top-0 left-0 h-full w-full aspect-square">
        <Image
          className="object-cover"
          fill
          src="/assets/images/bg-seo.svg"
          alt="..."
        />
      </span>
      <div className="relative">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-clash-display font-medium leading-[2.4rem] text-[2rem] md:leading-[3rem] md:text-[2.5rem]">
              Introduce pricing plans
            </h2>
            <p className=" text-black/80">
              Choose an affordable plan that’s packed with the best features for
              engaging your audience, creating customer loyalty, and driving
              sales.
            </p>
          </div>
          <div className="mt-6 flex justify-center items-center gap-4">
            <span className="text-black/70">Monthly</span>
            <Switch
              checked={frequency.value === "monthly"}
              onChange={toggleFrequency}
              className={classNames(
                frequency.value === "monthly" ? "bg-gray-200" : "bg-[#19646A]",
                "relative inline-flex h-[1.875rem] w-[3.75rem] items-center flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#19646A] focus:ring-offset-2"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  frequency.value === "monthly"
                    ? "translate-x-1"
                    : "translate-x-8",
                  "pointer-events-none inline-block w-5 h-5 transform rounded-full bg-white box-shadow-1 ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
            <span className="text-black/70">Yearly</span>
            <div className="flex items-center gap-1 py-1 px-3 rounded-full border border-[#138867] bg-[#EEFBF5]">
              <span className="text-black/70">Annual</span>
              <span className="text-[#138867]">(save 20%)</span>
            </div>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.id} className="col">
                <div
                  className={classNames(
                    tier.mostPopular
                      ? "bg-mostPopular ring-1 ring-black/10 text-white"
                      : "bg-white ring-1 ring-black/10 text-black",
                    "rounded-2xl p-5"
                  )}
                >
                  <h6 id={tier.id} className="text-base font-semibold">
                    {tier.name}
                  </h6>
                  <h2 className="mt-6 font-clash-display flex items-baseline text-3xl font-semibold">
                    <span className="uppercase">
                      {tier.price[frequency.value]}
                    </span>
                    <span>{frequency.priceSuffix}</span>
                  </h2>
                  <p
                    className={`mt-4 text-sm leading-6 pr-5 ${
                      tier.mostPopular && "opacity-80"
                    } `}
                  >
                    {tier.description}
                  </p>

                  <button
                    type="button"
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular ? "btn-primary-1" : "btn-primary-2",
                      "mt-6 block w-full text-center"
                    )}
                  >
                    <div className="relative z-10 flex justify-center items-center gap-2">
                      <span className="uppercase">Choose Plan</span>
                      {tier.mostPopular ? <ShineIcon /> : null}
                    </div>
                  </button>
                  <div className="mt-8">
                    <h6 className="mb-6 font-semibold">What’s included :</h6>
                    <ul role="list" className="space-y-3 text-sm leading-6">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className={`h-6 w-5 flex-none ${
                              feature.notAvailable
                                ? "opacity-50"
                                : "text-[#138867]"
                            }`}
                            aria-hidden="true"
                          />
                          <span
                            className={feature.notAvailable ? "opacity-50" : ""}
                          >
                            {feature.item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HostingPackageSection;
