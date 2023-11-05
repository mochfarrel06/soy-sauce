import React from "react";

function HeaderMenu({children}) {
  return (
    <div className="flex justify-between md:items-center md:gap-32 md:w-full relative">
      {children}
    </div>
  );
}

export default HeaderMenu;
