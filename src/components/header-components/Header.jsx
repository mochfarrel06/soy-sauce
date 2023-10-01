import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import HeaderItemTitle from './HeaderItemTitle';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

function Header() {
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

  // Button popup
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="bg-white shadow-md shadow-gray fixed top-0 left-0 w-full">
      <div className="lg:container">
        <div className="px-6 py-4 z-50 overflow-hidden lg:py-5">
          <div className="flex justify-between items-center">
            {/* Primary menu and logo */}
            <div className="flex justify-between md:w-full">
              {/* Logo */}
              <HeaderItemTitle title="KecapSawi" />
              {/* Menu */}
              <ul className="hidden md:flex md:items-center md:gap-8">
                {/* {navigation.map((nav) => (
                  <li key={nav.text}>
                    <a href={nav.link} className="md:font-medium md:text-sm md:text-secondary md:hover:text-slate-600 lg:text-lg">
                      {nav.text}
                    </a>
                  </li>
                ))} */}
                <li>
                  <Link to="/" className="md:font-medium md:text-sm md:text-secondary md:hover:text-slate-600 lg:text-lg">
                    {navigation.text1}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="md:font-medium md:text-sm md:text-secondary md:hover:text-slate-600 lg:text-lg">
                    {navigation.text2}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="md:font-medium md:text-sm md:text-secondary md:hover:text-slate-600 lg:text-lg">
                    {navigation.text3}
                  </Link>
                </li>
              </ul>
              <div className="hidden md:flex justify-center">
                <button
                  className="bg-secondary inline-block px-2 py-1 items-center font-medium text-sm rounded-sm text-white border border-secondary hover:bg-white hover:text-secondary transition duration-200 cursor-pointer lg:text-lg"
                  onClick={() => setShowModal(true)}>
                  Sign Up
                </button>
                {showModal ? (
                  <>
                    <div className="flex justify-between items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative my-6 mx-auto w-[30rem]">
                        {/* Content */}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-14 w-full bg-white outline-none focus:outline-none px-5 py-6">
                          {/* Header */}
                          <div className="flex items-center justify-between border-b border-solid border-slate-200 rounded-t">
                            <h3 className="font-semibold text-lg text-secondary tracking-wide">Create your account </h3>
                            <button onClick={() => setShowModal(false)}>
                              <AiOutlineClose />
                            </button>
                          </div>
                          {/* Body */}
                          <div className="relative flex flex-col flex-auto gap-5">
                            <input
                              type="text"
                              placeholder="Your Name"
                              className="block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            />
                            <input
                              type="email"
                              placeholder="Your Email"
                              className="block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            />
                            <input
                              type="password"
                              placeholder="Your Password"
                              className="block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            />
                          </div>
                          {/*footer*/}
                          <div className="flex flex-col gap-4 items-center">
                            <button className="bg-secondary w-full text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                              Sign Up
                            </button>
                            <p>I have an account ? Sign In</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-40 fixed inset-0 z-40 bg-secondary"></div>
                  </>
                ) : null}
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
                {/* {navigation.map((nav) => (
                  <li key={nav.text}>
                    <a href={nav.link} onClick={handleToogle} onBlur={hide} className="font-medium text-lg text-white tracking-wide">
                      {nav.text}
                    </a>
                  </li>
                ))} */}
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
                {showModal ? (
                  <>
                    <div className="flex justify-between items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none px-5">
                      <div className="relative my-6 mx-auto w-full">
                        {/* Content */}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-14 w-full bg-white outline-none focus:outline-none px-5 py-6">
                          {/* Header */}
                          <div className="flex items-center justify-between border-b border-solid border-slate-200 rounded-t">
                            <h3 className="font-semibold text-lg text-secondary tracking-wide">Create your account </h3>
                            <button onClick={() => setShowModal(false)}>
                              <AiOutlineClose />
                            </button>
                          </div>
                          {/* Body */}
                          <div className="relative flex flex-col flex-auto gap-5">
                            <input
                              type="text"
                              placeholder="Your Name"
                              className="block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            />
                            <input
                              type="email"
                              placeholder="Your Email"
                              className="mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            />
                            <input
                              type="password"
                              placeholder="Your Password"
                              className="mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            />
                          </div>
                          {/*footer*/}
                          <div className="flex flex-col gap-4 items-center">
                            <button className="bg-secondary w-full text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                              Sign Up
                            </button>
                            <p>I have an account ? Sign In</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-40 fixed inset-0 z-40 bg-secondary"></div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
