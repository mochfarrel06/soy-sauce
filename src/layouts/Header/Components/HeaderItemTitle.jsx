import React from "react";

function HeaderItemTitle({title}) {
  return (
    <a
      href=""
      className="font-bold text-base tracking-wide text-primary max-[305px]:text-sm md:text-lg lg:text-2xl"
    >
      {title}
    </a>
  );
}

export default HeaderItemTitle;
