import Link from "next/link";
import React from "react";

function NavDesktop() {
  return (
    <header className="hidden px-8 lg:flex items-center justify-between w-full">
      <nav className="flex gap-8 items-center">
        <Link href={"/"} className="text-lg font-semibold text-gray-900">
          Unified
        </Link>
        <div className="flex items-center gap-5">
          <Link className="text-gray-500 font-semibold" href={"#"}>
            Products
          </Link>
          <Link className="text-gray-500 font-semibold" href={"#"}>
            Services
          </Link>
          <Link className="text-gray-500 font-semibold" href={"#"}>
            Pricing
          </Link>
          <Link className="text-gray-500 font-semibold" href={"#"}>
            Resources
          </Link>
          <Link className="text-gray-500 font-semibold" href={"#"}>
            About
          </Link>
        </div>
      </nav>
      <div className="w-full flex flex-col gap-3 px-4 lg:px-0 md:w-fit md:flex-row-reverse">
        <button className="rounded-lg flex items-center  justify-center bg-violet-500 py-2.5 px-4 shadow-xs gap-1.5 font-semibold text-white border border-transparent md:w-fit text-nowrap">
          Sign up
        </button>
        <button className="rounded-lg flex items-center  justify-center bg-white border border-gray-300 py-2.5 px-4 shadow-xs gap-1.5 font-semibold text-gray-700 md:w-fit text-nowrap">
          Log in
        </button>
      </div>
    </header>
  );
}

export default NavDesktop;
