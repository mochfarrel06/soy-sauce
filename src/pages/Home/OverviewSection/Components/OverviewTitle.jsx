import React from "react";

function OverviewTitle({title}) {
  return (
    <h3 className="font-semibold text-xl text-primary tracking-wide lg:text-2xl">
      {title}
    </h3>
  );
}

export default OverviewTitle;
