import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import HeaderItemTitle from './HeaderItemTitle';

function HeaderItem() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToogle = () => {
    setToggleMenu(!toggleMenu);
  };
  const hide = () => setToggleMenu(false);

  const navigation = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Kind of product' },
    { id: 3, text: 'Use product' },
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
              <HeaderItemTitle title="KecapSawi" />
              {/* Menu */}
              <nav
                className={`bg-secondary w-full fixed top-[3.6rem] left-0 z-30 py-10 px-8 h-full md:py-0 md:px-0 md:flex md:static md:bg-white md:items-center md:w-full min-[887px]:w-[68%] lg:w-[65%] xl:w-[63%] ${
                  toggleMenu ? 'flex' : 'hidden'
                }`}>
                <div className="w-full">
                  <div className="flex flex-col items-center gap-10 w-full md:flex-row md:justify-between">
                    <ul className="flex flex-col items-center gap-8 md:flex-row">
                      {navigation.map((nav) => (
                        <li key={nav.id}>
                          <a href="#" onClick={handleToogle} onBlur={hide} className="font-medium text-sm text-white tracking-wide hover:text-slate-400 transition ease-in-out duration-200 sm:text-base md:text-secondary xl:text-lg">
                            {nav.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center">
                      <button
                        className="bg-white inline-block px-10 py-2 items-center font-semibold text-sm rounded-md text-secondary border border-white hover:bg-secondary hover:text-white transition duration-200 cursor-pointer sm:px-12 sm:text-base md:px-3 md:py-1 md:text-sm md:bg-secondary md:border-secondary md:hover:bg-white md:hover:text-secondary md:text-white md:font-normal lg:px-5 lg:py-2 lg:text-base xl:text-lg text-"
                        onClick={() => setShowModal(true)}>
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            {/* Secondary */}
            <div className="flex justify-center md:hidden">
              <button onClick={handleToogle}>{toggleMenu ? <FaTimes /> : <FiMenu />}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderItem;
