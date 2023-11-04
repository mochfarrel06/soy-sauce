import React from "react";
import OverviewImage from "./OverviewImage";
import OverviewMainText from "./OverviewMainText";

function OverviewItem({src, name, title, description}) {
  return (
    <div className="px-6 py-4 flex flex-col items-center gap-20 lg:py-6 lg:flex-row lg:justify-between lg:gap-20 xl:px-16">
      <OverviewImage src={src} name={name} />
      <OverviewMainText title={title} description={description} />
    </div>
  );
}

export default OverviewItem;
