import React from "react";
import LandingSubtitle from "./LandingSubtitle";
import LandingTitle from "./LandingTitle";

function LandingPageText({subtitle, title1, title2, title3}) {
  return (
    <div className="flex flex-col gap-6 lg:gap-4">
      <LandingSubtitle subtitle={subtitle} />
      <LandingTitle title1={title1} title2={title2} title3={title3} />
    </div>
  );
}

export default LandingPageText;
