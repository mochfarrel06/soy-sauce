import React from "react";

function NavbarContainer({children, toggleMenu}) {
  return (
    <div
      className={`bg-secondary w-full fixed top-[3.6rem] left-0 z-30 py-10 px-8 h-full md:py-0 md:px-0 md:flex md:static md:bg-white md:items-center md:w-full min-[887px]:w-[68%] lg:w-[65%] xl:w-[63%] ${
        toggleMenu ? "flex" : "hidden"
      }`}
    >
      <div className="w-full">{children}</div>
    </div>
  );
}

export default NavbarContainer;
