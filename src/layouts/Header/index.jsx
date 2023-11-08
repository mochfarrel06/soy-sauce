import React, {useState} from "react";
import {FaTimes} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import HeaderItemTitle from "./Components/HeaderItemTitle";
import HeaderContainer from "./Components/HeaderContainer";
import HeaderMenu from "./Components/HeaderMenu";
import HeaderToggle from "./Components/HeaderToggle";
import NavbarContainer from "../Navbar/Components/NavbarContainer";
import NavbarItemList from "../Navbar/Components/NavbarItemList";
import NavbarItemMenu from "../Navbar/Components/NavbarItemMenu";
import NavbarButton from "../Navbar/Components/NavbarButton";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToogle = () => {
    setToggleMenu(!toggleMenu);
  };
  const hide = () => setToggleMenu(false);

  const navigation = [
    {id: 1, text: "Home"},
    {id: 2, text: "Product"},
    {id: 3, text: "Use Product"},
  ];

  return (
    <HeaderContainer>
      <HeaderMenu>
        <HeaderItemTitle title={"KecapSawi"} />
        <NavbarContainer toggleMenu={toggleMenu}>
          <NavbarItemList>
            {navigation.map((nav) => (
              <NavbarItemMenu
                key={nav.id}
                id={nav.id}
                onClick={handleToogle}
                onBlur={hide}
                {...nav}
              />
            ))}
          </NavbarItemList>
          <NavbarButton title={"Sign Up"} hide={hide} />
        </NavbarContainer>
      </HeaderMenu>
      <HeaderToggle handleToogle={handleToogle}>
        {toggleMenu ? <FaTimes /> : <FiMenu />}
      </HeaderToggle>
    </HeaderContainer>
  );
}

export default Header;
