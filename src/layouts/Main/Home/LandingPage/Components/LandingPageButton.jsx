import React from "react";
import ButtonSmall from "../../../../../components/Button/ButtonSmall";

function LandingPageButton({titlebtn1, titlebtn2}) {
  return (
    <div className="flex gap-4">
      <ButtonSmall title={titlebtn1} />
      <ButtonSmall title={titlebtn2} />
    </div>
  );
}

export default LandingPageButton;
