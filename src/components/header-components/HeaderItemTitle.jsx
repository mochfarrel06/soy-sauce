import React from 'react';

function HeaderItemTitle({ title }) {
  return (
    <div>
      <a href="" className="font-bold text-lg tracking-wide text-primary md:text-xl lg:text-2xl">
        {title}
      </a>
    </div>
  );
}

export default HeaderItemTitle;
