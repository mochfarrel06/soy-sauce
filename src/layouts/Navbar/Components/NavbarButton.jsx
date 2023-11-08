import React from "react";
import ButtonMedium from "../../../components/Button/ButtonMedium";

function NavbarButton({title, hide}) {
  return (
    <div className="flex justify-center">
      <ButtonMedium title={title} hide={hide} />
    </div>
  );
}

export default NavbarButton;
