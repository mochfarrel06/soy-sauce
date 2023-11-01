import React from "react";

function OverviewImage({src, name}) {
  return (
    <div>
      <img
        src={src}
        alt={name}
        className="w-96 md:w-[28rem] lg:w-full xl:w-[90%]"
      />
    </div>
  );
}

export default OverviewImage;
