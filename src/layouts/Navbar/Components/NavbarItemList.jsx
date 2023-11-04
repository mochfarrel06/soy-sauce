import React from "react";
import NavbarItemMenu from "./NavbarItemMenu";

function NavbarItemList({navigation}) {
  return (
    <ul className="flex flex-col items-center gap-8 md:flex-row">
      {navigation.map((nav) => (
        <NavbarItemMenu
          key={nav.id}
          id={nav.id}
          onClick={nav.handleToggle}
          onBlur={nav.hide}
          {...nav}
        />
      ))}
    </ul>
  );
}

export default NavbarItemList;
