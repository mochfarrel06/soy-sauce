import React from 'react';

function HeaderItemText({ text, handleToogle, hide }) {
  return (
    <a href="" className='className="font-medium text-sm text-white tracking-wide hover:text-slate-400 transition ease-in-out duration-200 sm:text-base md:text-secondary xl:text-lg' onClick={handleToogle} onBlur={hide}>
      {text}
    </a>
  );
}

export default HeaderItemText;
