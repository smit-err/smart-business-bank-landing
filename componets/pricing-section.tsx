import React from "react";
import SectionHeader from "./section-header";
import Pricing, { PricingDataProps } from "./pricing";

const PricingData: PricingDataProps[] = [
  {
    plan_name: "Basic plan",
    is_popular: true,
    price: "10",
    description: "Basic features for up to 10 users.",
    highlited_text: "Starter",
    features_list: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20 GB individual data each user",
      "Basic chat and email support",
    ],
  },
  {
    plan_name: "Business plan",
    is_popular: false,
    price: "20",
    description: "Advanced features and reporting.",
    highlited_text: "Basic",
    features_list: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20 GB individual data each user",
      "Basic chat and email support",
    ],
  },
  {
    plan_name: "Enterprise plan",
    is_popular: true,
    price: "40",
    description: "Unlimited features.",
    highlited_text: "Business",
    features_list: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20 GB individual data each user",
      "Basic chat and email support",
    ],
  },
];

function PricingSection() {
  return (
    <section className="py-16 md:py-24 flex flex-col gap-12 md:gap-16 items-center">
      <SectionHeader
        title="Pricing"
        heading="Plans that fit your scale"
        description="Simple, transparent pricing that grows with you. Try any plan free for 30 days."
      />
      <div className="w-full px-4 grid sm:grid-cols-2 gap-6 sm:place-content-center lg:gap-8 xl:grid-cols-3 max-w-7xl">
        {PricingData.map((pricing, index) => (
          <Pricing
            key={index}
            plan_name={pricing.plan_name}
            is_popular={pricing.is_popular}
            price={pricing.price}
            description={pricing.description}
            highlited_text={pricing.highlited_text}
            features_list={pricing.features_list}
          />
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
