import React from "react";
import { Icons } from "./icons";

function SocialProofSection() {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gray-50 py-12 px-6 md:p-16 flex flex-col items-center text-center gap-8 md:rounded-2xl">
          <p className="text-gray-500 font-medium lg:text-xl/7.5">
            Trusted by 4,000+ companies
          </p>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <Icons.SocialLogoOne className="aspect-auto w-36 md:w-46" />
            <Icons.SocialLogoTwo className="aspect-auto w-36 md:w-46" />
            <Icons.SocialLogoThree className="aspect-auto w-36 md:w-46" />
            <Icons.SocialLogoFour className="aspect-auto w-36 md:w-46" />
            <Icons.SocialLogoFive className="aspect-auto w-36 md:w-46" />
            <Icons.SocialLogoSix className="aspect-auto w-36 md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection;
