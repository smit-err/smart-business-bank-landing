import React from "react";
import FeatureCard, { FeatureCardProps } from "./feature-card";
import { Icons } from "./icons";
import SectionHeader from "./section-header";

const FeatureData: FeatureCardProps[] = [
  {
    icon: <Icons.MessageChatCircle className="size-5 text-violet-500" />,
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: <Icons.Zap className="size-5 text-violet-500" />,
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: <Icons.ChartBreakOut className="size-5 text-violet-500" />,
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: <Icons.MessageSmileCircle className="size-5 text-violet-500" />,
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: <Icons.Command className="size-5 text-violet-500" />,
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: <Icons.MessageHeartCircle className="size-5 text-violet-500" />,
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

function FeatureSection() {
  return (
    <section className="py-16 md:py-24 flex flex-col gap-12 md:gap-16 items-center">
      <SectionHeader
        title="Features"
        heading="All you need to run your finances effectively"
        description="Open a full-featured account in with virtual cards in less than 5 minutes."
      />

      <div className="grid gap-10 px-4 max-w-7xl mx-auto sm:grid-cols-2 xl:grid-cols-3 lg:px-8 lg:gap-x-8 lg:gap-y-16">
        {FeatureData.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
