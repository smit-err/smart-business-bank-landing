"use client";

import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

function NavMobile() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="relative bg-white lg:hidden flex items-center justify-between px-4 w-full z-10">
      <Link
        href={"/"}
        className="text-xl inline-block font-semibold text-gray-900"
      >
        Unified
      </Link>
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <Icons.Close className="size-5" />
        ) : (
          <Icons.HamburgerMenu className="size-5" />
        )}
      </button>

      {open && (
        <nav className="bg-white inset-x-0 top-full absolute py-5 border-b border-gray-200 grid gap-1">
          <Link href={"#"} className="py-3 px-4 text-gray-900 font-semibold">
            Products
          </Link>
          <Link href={"#"} className="py-3 px-4 text-gray-900 font-semibold">
            Services
          </Link>
          <Link href={"#"} className="py-3 px-4 text-gray-900 font-semibold">
            Pricing
          </Link>
          <Link href={"#"} className="py-3 px-4 text-gray-900 font-semibold">
            Resources
          </Link>
          <Link href={"#"} className="py-3 px-4 text-gray-900 font-semibold">
            About
          </Link>
        </nav>
      )}
    </header>
  );
}

export default NavMobile;
