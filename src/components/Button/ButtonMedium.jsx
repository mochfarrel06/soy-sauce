import React from "react";

function ButtonMedium({name}) {
  return (
    <button className="bg-white inline-block px-10 py-2 items-center font-semibold text-sm rounded-md text-secondary border border-white hover:bg-secondary hover:text-white transition duration-200 cursor-pointer sm:px-12 sm:text-base md:px-3 md:py-1 md:text-sm md:bg-secondary md:border-secondary md:hover:bg-white md:hover:text-secondary md:text-white md:font-normal lg:px-5 lg:py-2 lg:text-base xl:text-lg">
      {name}
    </button>
  );
}

export default ButtonMedium;
