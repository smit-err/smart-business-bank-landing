import React from "react";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

function SiteHeader() {
  return (
    <div className="bg-white max-w-7xl mx-auto h-18 lg:h-20 flex items-center">
      <NavDesktop />
      <NavMobile />
    </div>
  );
}

export default SiteHeader;
