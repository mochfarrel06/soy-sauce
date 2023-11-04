import React from "react";
import ButtonMedium from "../../../components/Button/ButtonMedium";

function NavbarButton({title}) {
  return (
    <div className="flex justify-center">
      <ButtonMedium title={title} />
    </div>
  );
}

export default NavbarButton;
