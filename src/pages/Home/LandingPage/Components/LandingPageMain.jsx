import React from "react";
import LandingPageText from "./LandingPageText";
import LandingPageButton from "./LandingPageButton";

function LandingPageMain({
  subtitle,
  title1,
  title2,
  title3,
  titlebtn1,
  titlebtn2,
}) {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:w-3/4 lg:gap-16 xl:gap-20">
      <LandingPageText
        subtitle={subtitle}
        title1={title1}
        title2={title2}
        title3={title3}
      />
      <LandingPageButton titlebtn1={titlebtn1} titlebtn2={titlebtn2} />
    </div>
  );
}

export default LandingPageMain;
