import React from "react";
import { Icons } from "./icons";
import Link from "next/link";

function FooterSection() {
  return (
    <footer className="py-12 grid gap-12 md:pt-16 md:gap-16 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="pb-8 md:pb-16 grid md:justify-center gap-8 border-b border-gray-800 md:gap-12">
          <div className="grid gap-2 text-center">
            <h3 className="text-2xl/8 font-semibold">
              No long-term contracts. No catches. Simple.
            </h3>
            <p className="text-gray-500">
              Start your 30-day free trial. Cancel anytime.
            </p>
          </div>
          <div className="w-full md:justify-center flex flex-col gap-3 md:flex-row">
            {/* button */}
            <button className="rounded-lg flex items-center  justify-center bg-violet-500 py-3 px-4.5 shadow-xs gap-1.5 font-semibold text-white border border-transparent text-nowrap">
              Get started
            </button>
            <button className="rounded-lg flex items-center  justify-center bg-white border border-gray-300 py-3 px-4.5 shadow-xs gap-1.5 font-semibold text-gray-700 text-nowrap">
              <Icons.PlayCircle className="size-5" /> View demo
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="pb-8 md:pb-0 grid gap-8 border-b border-gray-800 md:border-0 md:gap-12">
            <div className="grid gap-8">
              <p className="text-xl font-semibold">Unified</p>
              <p className="text-gray-400 max-w-xs">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:flex">
              <Link href={"#"} className="font-semibold text-gray-400">
                Overview
              </Link>
              <Link href={"#"} className="font-semibold text-gray-400">
                Features
              </Link>
              <Link href={"#"} className="font-semibold text-gray-400">
                Pricing
              </Link>
              <Link href={"#"} className="font-semibold text-gray-400">
                Careers
              </Link>
              <Link href={"#"} className="font-semibold text-gray-400">
                Help
              </Link>
              <Link href={"#"} className="font-semibold text-gray-400">
                Privacy
              </Link>
            </div>
          </div>
          <div className="md:place-items-end">
            <div className="flex flex-col gap-8">
              <p className="font-medium">Get the app</p>
              <div className="flex gap-4">
                <Icons.AppleLogo />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="pt-8 grid gap-6 md:gap-12 border-t border-gray-800 md:flex md:justify-between md:flex-row-reverse">
          <div className="flex items-center gap-6">
            <Icons.X className="aspect-square w-6 fill-gray-500" />
            <Icons.Facebook className="aspect-square w-6 fill-gray-500" />
            <Icons.GitHub className="aspect-square w-6 fill-gray-500" />
            <Icons.Dribbble className="aspect-square w-6 fill-gray-500" />
          </div>
          <p className="text-gray-500">
            &copy; 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
