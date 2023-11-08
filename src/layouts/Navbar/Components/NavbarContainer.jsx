import React from "react";

function NavbarContainer({children, toggleMenu}) {
  return (
    <nav
      className={`bg-secondary w-full fixed top-[3.5rem] left-0 z-30 py-10 px-8 h-full max-[305px]:top-[3.2rem] md:py-0 md:bg-red-300 md:px-0 md:flex md:static md:bg-white md:items-center md:w-full min-[887px]:w-[68%] lg:w-[65%] xl:w-[63%] ${
        toggleMenu ? "flex" : "hidden"
      }`}
    >
      <div className="w-full">
        <div className="flex flex-col items-center gap-10 w-full md:flex-row md:justify-between">
          {children}
        </div>
      </div>
    </nav>
  );
}

export default NavbarContainer;
