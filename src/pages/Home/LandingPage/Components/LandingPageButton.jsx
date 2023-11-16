import React from "react";
import ButtonSmall from "../../../../components/Button/ButtonSmall";

function LandingPageButton({titlebtn1, titlebtn2}) {
  return (
    <div className="flex gap-4">
      <ButtonSmall
        title={titlebtn1}
        bgcolor={"yellow"}
        hvcolor={"slate-50"}
        brcolor={"yellow"}
      />
      <ButtonSmall
        title={titlebtn2}
        bgcolor={"secondary"}
        hvcolor={"slate-50"}
        brcolor={"secondary"}
      />
    </div>
  );
}

export default LandingPageButton;
