import React from "react";

function Container({children}) {
  return (
    <div className="pt-32 pb-32 w-full h-max md:pt-36 lg:pt-40 xl:pt-44 overflow-hidden lg:pb-10">
      <div className="lg:container">{children}</div>
    </div>
  );
}

export default Container;
