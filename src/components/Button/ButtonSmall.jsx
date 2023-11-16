import React from "react";

function ButtonSmall({title, bgcolor, hvcolor, brcolor}) {
  return (
    <button
      className={`bg-${bgcolor} inline-block px-3 py-2 items-center font-semibold text-xs rounded-sm text-slate-50 border-2 border-${brcolor} hover:bg-${hvcolor} hover:text-secondary transition duration-200 cursor-pointer max-[305px]:px-2 max-[305px]:text-xs sm:px-5 lg:text-lg lg:px-4`}
    >
      {title}
    </button>
  );
}

export default ButtonSmall;

//  className={`bg-yellow inline-block px-3 py-2 items-center font-semibold text-xs rounded-sm text-secondary border-2 border-yellow hover:bg-slate-50 hover:text-secondary transition duration-200 cursor-pointer max-[305px]:px-2 max-[305px]:text-xs sm:px-5 lg:text-lg lg:px-4`}
