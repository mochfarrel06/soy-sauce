import React from "react";
import ButtonSmall from "../../../../components/Button/ButtonSmall";

function LandingPageButton({titlebtn1, titlebtn2}) {
  return (
    <div className="flex gap-4">
      <ButtonSmall title={titlebtn1} bgcolor={"yellow"} hvcolor={"white"} />
      <ButtonSmall title={titlebtn2} bgcolor={"white"} hvcolor={"yellow"} />
    </div>
  );
}

export default LandingPageButton;
