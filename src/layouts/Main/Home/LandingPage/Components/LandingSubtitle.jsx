import React from "react";

function LandingSubtitle({subtitle}) {
  return (
    <p className="font-semibold text-sm text-gray2 tracking-wide max-[305px]:text-xs md:text-base lg:text-lg">
      {subtitle}
    </p>
  );
}

export default LandingSubtitle;
