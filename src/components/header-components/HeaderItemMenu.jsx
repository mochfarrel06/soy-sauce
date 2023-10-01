import React from 'react';

function HeaderItemMenu() {
  return (
    <div className="flex justify-between md:items-center md:gap-32 md:w-full relative">
      {/* Logo */}
      <HeaderItemTitle title="KecapSawi" />
      {/* Menu */}
      <nav
        className={`bg-secondary w-full fixed top-[3.6rem] left-0 z-30 py-10 px-8 h-full md:py-0 md:px-0 md:flex md:static md:bg-white md:items-center md:w-full min-[887px]:w-[68%] lg:w-[65%] xl:w-[63%] ${toggleMenu ? 'flex' : 'hidden'}`}>
        <div className="w-full">
          <div className="flex flex-col items-center gap-10 w-full md:flex-row md:justify-between">
            <ul className="flex flex-col items-center gap-8 md:flex-row">
              <li>
                <a href="#" onClick={handleToogle} onBlur={hide} className="font-medium text-sm text-white tracking-wide hover:text-slate-400 transition ease-in-out duration-200 sm:text-base md:text-secondary xl:text-lg">
                  {navigation.text1}
                </a>
              </li>
              <li>
                <a href="#" onClick={handleToogle} onBlur={hide} className="font-medium text-sm text-white tracking-wide hover:text-slate-400 transition ease-in-out duration-200 sm:text-base md:text-secondary xl:text-lg">
                  {navigation.text2}
                </a>
              </li>
              <li>
                <a href="#" onClick={handleToogle} onBlur={hide} className="font-medium text-sm text-white tracking-wide hover:text-slate-400 transition ease-in-out duration-200 sm:text-base md:text-secondary xl:text-lg">
                  {navigation.text3}
                </a>
              </li>
            </ul>
            <div className="flex justify-center">
              <button
                className="bg-white inline-block px-10 py-2 items-center font-semibold text-sm rounded-md text-secondary border border-white hover:bg-secondary hover:text-white transition duration-200 cursor-pointer sm:px-12 sm:text-base md:px-4 md:bg-secondary md:border-secondary md:hover:bg-white md:hover:text-secondary md:text-white md:font-normal xl:text-lg"
                onClick={() => setShowModal(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderItemMenu;
