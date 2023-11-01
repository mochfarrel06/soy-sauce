import React from "react";
import BannerTitle from "./BannerTitle";
import BannerDescription from "./BannerDescription";

function BannerMainText({title, description}) {
  return (
    <div className="flex flex-col text-center gap-2">
      <BannerTitle title={title} />
      <BannerDescription description={description} />
    </div>
  );
}

export default BannerMainText;
