import React from 'react';
import HeaderItemList from './HeaderItemList';

function HeaderItemNavbar({ navigation, text }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToogle = () => {
    setToggleMenu(!toggleMenu);
  };
  const hide = () => setToggleMenu(false);

  return (
    <nav className={`bg-secondary w-full fixed top-[3.6rem] left-0 z-30 py-10 px-8 h-full md:py-0 md:px-0 md:flex md:static md:bg-white md:items-center md:w-full min-[887px]:w-[68%] lg:w-[65%] xl:w-[63%] ${toggleMenu ? 'flex' : 'hidden'}`}>
      <div className="w-full">
        <div className="flex flex-col items-center gap-10 w-full md:flex-row md:justify-between">
          <HeaderItemList text={text} navigation={navigation} />
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
  );
}

export default HeaderItemNavbar;
