import React from "react";

function Container({children}) {
  return (
    <section className="pt-32 pb-32 w-full h-max md:pt-36 lg:pt-40 xl:pt-44">
      <div className="lg:container">{children}</div>
    </section>
  );
}

export default Container;
