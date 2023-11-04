import React from "react";

function NavbarItemMenu({text, onClick, onBlur, id}) {
  return (
    <li id={id}>
      <a
        href=""
        onClick={onClick}
        onBlur={onBlur}
        className="font-medium text-sm text-white tracking-wide hover:text-slate-400 transition ease-in-out duration-200 sm:text-base md:text-secondary xl:text-lg"
      >
        {text}
      </a>
    </li>
  );
}

export default NavbarItemMenu;
