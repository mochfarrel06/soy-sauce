import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToogle = () => {
    setToggleMenu(!toggleMenu);
  };
  const hide = () => setToggleMenu(false);

  const textTitle = {
    title: 'KecapSawi',
    txt: 'Sign Up',
  };

  const navigation = [
    { link: '#', text: 'Home' },
    { link: '#', text: 'Kind of product' },
    { link: '#', text: 'Use product' },
  ];

  return (
    <div className="bg-white shadow-md shadow-gray fixed top-0 left-0 w-full">
      <div className="lg:container">
        <div className="px-6 py-4 z-50 overflow-hidden lg:py-5">
          <div className="flex justify-between items-center">
            {/* Primary menu and logo */}
            <div className="flex justify-between md:w-full">
              {/* Logo */}
              <div>
                <a href="" className="font-bold text-lg tracking-wide text-primary md:text-xl lg:text-2xl">
                  {textTitle.title}
                </a>
              </div>
              {/* Menu */}
              <ul className="hidden md:flex md:items-center md:gap-8">
                {navigation.map((nav) => (
                  <li key={nav.text}>
                    <a href={nav.link} className="md:font-medium md:text-sm md:text-secondary md:hover:text-slate-600 lg:text-lg">
                      {nav.text}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="hidden md:flex justify-center">
                <button className="bg-secondary inline-block px-2 py-1 items-center font-medium text-sm rounded-sm text-white border border-secondary hover:bg-white hover:text-secondary transition duration-200 cursor-pointer lg:text-lg lg:px-4">
                  Sign Up
                </button>
              </div>
            </div>
            {/* Secondary */}
            <div className="flex justify-center md:hidden">
              <button onClick={handleToogle}>{toggleMenu ? <FaTimes /> : <FiMenu />}</button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed z-40 w-full bg-secondary overflow-hidden flex flex-col items-center md:hidden gap-12 origin-top duration-700 ${!toggleMenu ? 'h-0' : 'h-full py-10'}`}>
          <div className="px-8 w-full">
            <div className="flex flex-col items-center gap-10">
              <ul className="flex flex-col items-center gap-8">
                {navigation.map((nav) => (
                  <li key={nav.text}>
                    <a href={nav.link} onClick={handleToogle} onBlur={hide} className="font-medium text-lg text-white tracking-wide">
                      {nav.text}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button className="bg-white inline-block px-10 py-1 items-center font-medium text-lg rounded-sm text-secondary border border-white hover:bg-secondary hover:text-white transition duration-200 cursor-pointer ">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
