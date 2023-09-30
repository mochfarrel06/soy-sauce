import React from 'react';

function Button({ title, width, height }) {
  return (
    <button
      className={`bg-secondary inline-block px-${width} py-${height} items-center font-medium text-sm rounded-sm text-white border border-secondary hover:bg-white hover:text-secondary transition duration-200 cursor-pointer lg:text-lg`}>
      {title}
    </button>
  );
}

export default Button;
