import React from "react";

function NavbarItemList({children}) {
  return (
    <ul className="flex flex-col items-center gap-6 md:flex-row">{children}</ul>
  );
}

export default NavbarItemList;
