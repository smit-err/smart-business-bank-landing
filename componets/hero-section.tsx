import React from "react";
import CreditCard from "./credit-card";
import HeroContent from "./hero-content";
import { Icons } from "./icons";

function HeroSection() {
  return (
    <div className="flex flex-col gap-18 py-16 lg:grid lg:grid-cols-2 lg:px-8 max-w-7xl mx-auto md:gap-22 lg:gap-6 xl:gap-16 lg:items-center">
      <div className="flex flex-col gap-8">
        <HeroContent />
        <div className="w-full flex flex-col gap-3 px-4 lg:px-0 md:w-fit md:flex-row-reverse">
          <button className="rounded-lg flex items-center  justify-center bg-violet-500 py-3 px-4.5 shadow-xs gap-1.5 font-semibold text-white border border-transparent md:w-fit text-nowrap">
            Sign up
          </button>
          <button className="rounded-lg flex items-center  justify-center bg-white border border-gray-300 py-3 px-4.5 shadow-xs gap-1.5 font-semibold text-gray-700 md:w-fit text-nowrap">
            <Icons.PlayCircle className="size-5 text-gray-700" />
            Demo
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-fit pb-4 w-full bg-violet-50 lg:rounded-xl lg:py-12 xl:w-fit xl:px-16">
        <div className="relative -top-4 lg:top-0 isolate -space-y-36 md:-space-y-46 rounded-2xl">
          <CreditCard />
          <CreditCard
            zIndex="z-10"
            className="bg-linear-45"
            gradientFrom="from-card-brand-gradient-900"
            gradientTo="to-card-brand-gradient-700"
            cardType="mastercardColor"
          />
          <CreditCard zIndex="z-8" />
          <CreditCard
            zIndex="z-6"
            className="bg-linear-45 shadow-2xl"
            gradientFrom="from-card-dark-gradient-900"
            gradientTo="to-card-dark-gradient-700"
            cardType="mastercardColor"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
