import React from "react";

function LandingImage({src, name}) {
  return (
    <div className="overflow-hidden">
      <img
        className="w-[15rem] max-[305px]:w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
        src={src}
        alt={name}
      />
    </div>
  );
}

export default LandingImage;
