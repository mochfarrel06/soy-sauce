import React from "react";

function Container({children}) {
  return (
    <section className="pt-10 pb-10 w-full h-max overflow-hidden bg-secondary md:pt-12 lg:pt-14 xl:pt-16">
      <div className="lg:container">{children}</div>
    </section>
  );
}

export default Container;
