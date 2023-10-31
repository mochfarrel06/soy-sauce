import React from "react";

function ButtonSmall({title}) {
  return (
    <button className="bg-yellow inline-block px-3 py-2 items-center font-semibold text-sm rounded-sm text-secondary border-2 border-yellow hover:bg-white hover:text-secondary transition duration-200 cursor-pointer max-[305px]:px-2 max-[305px]:text-xs sm:px-5 lg:text-lg lg:px-4">
      {title}
    </button>
    //  <button className="bg-white inline-block px-3 py-2 items-center font-semibold text-sm rounded-sm text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition duration-200 cursor-pointer max-[305px]:px-2 max-[305px]:text-xs sm:px-5 lg:text-lg lg:px-4">
    //             Halo
    //           </button>
  );
}

export default ButtonSmall;
