import React from 'react';

function FooterItemLink({ title, sub1, sub2, sub3 }) {
  return (
    <div className="flex flex-col gap-4">
      <h4>{title}</h4>
      <div className="flex flex-col gap-2">
        <a href="#" className="font-normal inline-block text-gray2 text-sm tracking-wide">
          {sub1}
        </a>
        <a href="#" className="font-normal inline-block text-gray2 text-sm tracking-wide">
          {sub2}
        </a>
        <a href="#" className="font-normal inline-block text-gray2 text-sm tracking-wide">
          {sub3}
        </a>
      </div>
    </div>
  );
}

export default FooterItemLink;
