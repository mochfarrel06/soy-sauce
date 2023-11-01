import React from "react";
import OverviewDescription from "./OverviewDescription";
import OverviewTitle from "./OverviewTitle";

function OverviewMainText({title, description}) {
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <OverviewTitle title={title} />
      <OverviewDescription description={description} />
    </div>
  );
}

export default OverviewMainText;
