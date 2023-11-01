import React from "react";

function BannerTitle({title}) {
  return (
    <p className="font-normal text-xs text-white tracking-wide md:text-sm lg:text-base">
      {title}
    </p>
  );
}

export default BannerTitle;
