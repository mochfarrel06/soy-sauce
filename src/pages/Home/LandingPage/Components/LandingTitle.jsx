import React from "react";

function LandingTitle({title1, title2, title3}) {
  return (
    <h1 className="font-bold text-2xl text-secondary tracking-wider max-[305px]:text-xl sm:text-3xl sm:leading-10 lg:w-full lg:text-4xl lg:leading-[2.9rem] xl:text-[2.5rem] xl:leading-[3.4rem]">
      {title1} <span className="text-yellow">{title2}</span>
      {title3}
    </h1>
  );
}

export default LandingTitle;
