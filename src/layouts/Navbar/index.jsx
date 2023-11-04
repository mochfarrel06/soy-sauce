import React from "react";
import NavbarContainer from "./Components/NavbarContainer";
import NavbarItem from "./Components/NavbarItem";

function Navbar({toggleMenu, title, navigation}) {
  return (
    <NavbarContainer toggleMenu={toggleMenu}>
      <NavbarItem navigation={navigation} title={title} />
    </NavbarContainer>
  );
}

export default Navbar;
