import React from "react";

function HeroContent() {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="w-fit bg-white border border-gray-300 shadow-xs py-1 pr-2.5 pl-1 gap-2 flex items-center rounded-[10px]">
        <div className="border border-gray-300 bg-white shadow-xs py-0.5 gap-1 rounded-[6px] px-1.5 flex items-center flex-nowrap">
          {/* <div className="bg-emerald-500 flex-1 rounded-full size-1.5 aspect-square" /> */}
          <p className="font-medium text-xs/4.5 text-gray-700">New!</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="font-medium text-xs/4.5 text-gray-700">
            Download the new iOS app
          </p>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 text-gray-500"
          >
            <path
              d="M4 12H20M20 12L14 6M20 12L14 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="md:text-6xl text-gray-950 text-balance font-semibold text-4xl tracking-tight">
          Smart business credit cards
        </h1>
        <p className="text-lg text-gray-500 max-w-[480px]">
          No money, no problems. Untitled is a next-generation financial
          technology company in the process of reinventing banking. 30-day free
          trial.
        </p>
      </div>
    </div>
  );
}

export default HeroContent;
