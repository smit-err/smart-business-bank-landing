import { cn } from "@/lib/utils";
import React from "react";

type cardType = "mastercard" | "mastercardColor";

interface CardPropTypes {
  title?: string;
  name?: string;
  expiry?: string;
  number?: string;
  cardType?: cardType;
  bgClass?: string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
  zIndex?: string;
}

function CreditCard({
  title = "Untitled",
  name = "olivia rhye",
  expiry = "06/26",
  number = "1234 1234 1234 1234",
  cardType = "mastercard", // 'mastercard' or 'visa'
  bgClass = "transparent-card-bg",
  gradientFrom = "",
  gradientTo = "",
  className,
  zIndex = "z-12",
}: CardPropTypes) {
  const masterCardBW = (
    <svg
      className="aspect-auto w-7 fill-white"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031-.058.049-.12.098-.181.146 1.177.783 2.588 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.094-3.32-7.416-7.416-7.416zM12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.987-4.236-2.551-5.595-.09-.08-.184-.156-.28-.231z" />
    </svg>
  );

  const masterCardColor = (
    <svg
      className="aspect-auto h-6.5"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 152.4 108"
    >
      <g>
        <rect y="0" className="fill-none" width="152.4" height="108" />
        <g>
          <rect
            x="60.4"
            y="25.7"
            className="fill-[#FF5F00]"
            width="31.5"
            height="56.6"
          />
          <path
            className="fill-[#EB001B]"
            d="M62.4,54c0-11,5.1-21.5,13.7-28.3c-15.6-12.3-38.3-9.6-50.6,6.1C13.3,47.4,16,70,31.7,82.3    c13.1,10.3,31.4,10.3,44.5,0C67.5,75.5,62.4,65,62.4,54z"
          />
          <path
            className="fill-[#F79E1B]"
            d="M134.4,54c0,19.9-16.1,36-36,36c-8.1,0-15.9-2.7-22.2-7.7c15.6-12.3,18.3-34.9,6-50.6c-1.8-2.2-3.8-4.3-6-6    c15.6-12.3,38.3-9.6,50.5,6.1C131.7,38.1,134.4,45.9,134.4,54z"
          />
        </g>
      </g>
    </svg>
  );
  return (
    <div
      className={cn(
        "pattern relative flex w-[284px] h-[184px] md:h-[226px] md:w-[375px] flex-col justify-between overflow-hidden rounded-xl border border-gray-300/10 text-white backdrop-blur-sm transition-all duration-400 select-none transform-3d hover:shadow-xl",
        bgClass,
        gradientFrom,
        gradientTo,
        zIndex,
        className
      )}
    >
      <div className="px-5 py-5">
        <h1 className="text-sm md:text-lg font-semibold">{title}</h1>
      </div>
      <div className="flex items-end justify-between px-4 pb-4">
        <div className="flex flex-col gap-2 tracking-wider uppercase">
          <div className="flex items-center justify-between text-[9px] md:text-xs font-semibold">
            <p>{name}</p>
            <p>{expiry}</p>
          </div>
          <p className="font-ibm-mono tracking-wider text-xs md:text-base">
            {number}
          </p>
        </div>
        <div
          className={cn(
            "flex aspect-auto h-auto w-fit justify-center rounded-sm bg-white/20 px-3.5 py-1",
            cardType === "mastercard" ? "px-3.5 py-1" : "px-2 py-1"
          )}
        >
          {cardType.toLowerCase() === "mastercard"
            ? masterCardBW
            : masterCardColor}
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
