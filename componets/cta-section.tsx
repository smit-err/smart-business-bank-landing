import React from "react";
import { Icons } from "./icons";
import Image from "next/image";

function CTASection() {
  return (
    <section className="pb-16 grid overflow-x-hidden">
      <div className="grid xl:grid-cols-2 gap-16 max-w-7xl xl:mx-auto">
        <div className="px-4 flex flex-col gap-8 md:px-6 xl:pt-26 flex-1 w-full">
          <h2 className="text-gray-900 font-semibold text-3xl/9.5 lg:text-5xl/15">
            Get started in 5 minutes
          </h2>
          <div className="flex flex-col gap-4 pl-2 lg:text-lg/7">
            <div className="flex items-center gap-3">
              <Icons.CheckCircle className="text-violet-600 size-6 lg:size-7" />
              <p className="text-gray-500">30-day free trial</p>
            </div>
            <div className="flex items-center gap-3">
              <Icons.CheckCircle className="text-violet-600 size-6 lg:size-7" />
              <p className="text-gray-500">Peronalized onboarding</p>
            </div>
            <div className="flex items-center gap-3">
              <Icons.CheckCircle className="text-violet-600 size-6 lg:size-7" />
              <p className="text-gray-500">Access to all features</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 md:flex-row ">
            {/* button */}
            <button className="rounded-lg flex items-center  justify-center bg-violet-500 py-3 px-4.5 shadow-xs gap-1.5 font-semibold text-white border border-transparent text-nowrap">
              Get started
            </button>
            <button className="rounded-lg flex items-center  justify-center bg-white border border-gray-300 py-3 px-4.5 shadow-xs gap-1.5 font-semibold text-gray-700 text-nowrap">
              Learn more
            </button>
          </div>
        </div>
        <div className="px-4 xl:p-0">
          <div className="size-full xl:w-5xl h-auto rounded-xl border-4 xl:border-8 border-gray-100 overflow-clip">
            <Image
              src={"/Desktop.png"}
              width={1440}
              height={960}
              alt="image"
              className="w-full aspect-auto shadow-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
