import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import HeaderItemTitle from './HeaderItemTitle';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

function HeaderItem() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToogle = () => {
    setToggleMenu(!toggleMenu);
  };
  const hide = () => setToggleMenu(false);

  const navigation = {
    text1: 'Home',
    text2: 'Kind of product',
    text3: 'Use product',
  };

  return (
    <div className="bg-white shadow-md shadow-gray z-50 fixed top-0 left-0 w-full">
      <div className="lg:container">
        {/* Menu */}
        <div className="px-6 py-4 z-50 overflow-hidden lg:py-5">
          <div className="flex justify-between items-center">
            {/* Primary menu and logo */}
            <div className="flex justify-between md:w-full">
              {/* Logo */}
              <HeaderItemTitle title="KecapSawi" />
              {/* Menu */}
              <nav className={`fixed top-[3.6rem] z-50 left-0 w-full bg-secondary overflow-hidden flex flex-col items-center md:hidden gap-12 duration-700 ${!toggleMenu ? 'h-0' : 'h-full py-10'}`}>
                <div className="px-8 w-full">
                  <div className="flex flex-col items-center gap-10 w-full">
                    <ul className="flex flex-col items-center gap-8">
                      <li>
                        <a href="#" onClick={handleToogle} onBlur={hide} className="font-medium text-lg text-white tracking-wide">
                          {navigation.text1}
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={handleToogle} onBlur={hide} className="font-medium text-lg text-white tracking-wide">
                          {navigation.text2}
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={handleToogle} onBlur={hide} className="font-medium text-lg text-white tracking-wide">
                          {navigation.text3}
                        </a>
                      </li>
                    </ul>
                    <div className="flex justify-center">
                      <button
                        className="bg-white inline-block px-10 py-1 items-center font-medium text-lg rounded-sm text-secondary border border-white hover:bg-secondary hover:text-white transition duration-200 cursor-pointer"
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
