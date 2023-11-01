import React from "react";

function BannerDescription({description}) {
  return (
    <h3 className="font-semibold text-lg text-white tracking-wide md:text-xl lg:text-2xl">
      {description}
    </h3>
  );
}

export default BannerDescription;
