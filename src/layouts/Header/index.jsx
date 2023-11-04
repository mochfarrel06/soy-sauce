import React, {useState} from "react";
import {FaTimes} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import HeaderItemMenu from "./Components/HeaderItemMenu";
import HeaderItemTitle from "./Components/HeaderItemTitle";
import ButtonMedium from "../../components/Button/ButtonMedium";
import Navbar from "../Navbar";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToogle = () => {
    setToggleMenu(!toggleMenu);
  };
  const hide = () => setToggleMenu(false);

  const navigation = [
    {id: 1, text: "Home"},
    {id: 2, text: "Kind of product"},
    {id: 3, text: "Use product"},
  ];

  return (
    <div className="bg-white shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="lg:container">
        {/* Header section*/}
        <div className="px-6 py-4 overflow-hidden lg:py-5">
          <div className="flex justify-between items-center">
            {/* Primary menu and logo */}
            <div className="flex justify-between md:items-center md:gap-32 md:w-full relative">
              {/* Logo */}
              <HeaderItemTitle title={"KecapSawi"} />
              <Navbar
                toggleMenu={toggleMenu}
                title={"Sign Up"}
                navigation={navigation}
              />
            </div>
            {/* Secondary */}
            <div className="flex justify-center md:hidden">
              <button onClick={handleToogle}>
                {toggleMenu ? <FaTimes /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
