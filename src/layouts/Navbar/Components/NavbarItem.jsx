import React from "react";
import NavbarItemList from "./NavbarItemList";
import NavbarButton from "./NavbarButton";

function NavbarItem({navigation, title}) {
  return (
    <div className="flex flex-col items-center gap-10 w-full md:flex-row md:justify-between">
      <NavbarItemList navigation={navigation} />
      <NavbarButton title={title} />
    </div>
  );
}

export default NavbarItem;
