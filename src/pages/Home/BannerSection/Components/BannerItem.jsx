import React from "react";
import BannerMainText from "./BannerMainText";
import BannerIcons from "./BannerIcons";

function BannerItem({title, description}) {
  return (
    <div className="px-6 py-4 flex flex-col items-center gap-10 md:px-20 lg:px-24 lg:py-6 xl:px-32">
      <BannerMainText title={title} description={description} />
      <BannerIcons />
    </div>
  );
}

export default BannerItem;
