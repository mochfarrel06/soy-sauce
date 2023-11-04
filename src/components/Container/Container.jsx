import React from "react";

function Container({children}) {
  return (
    <section className="py-36 w-full h-max max-[305px]:py-28 md:pt-36 lg:pt-40 xl:pt-44 overflow-hidden">
      <div className="lg:container">{children}</div>
    </section>
  );
}

export default Container;
