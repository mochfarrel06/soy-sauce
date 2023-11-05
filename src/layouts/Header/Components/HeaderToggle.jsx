import React from "react";

function HeaderToggle({handleToogle, children}) {
  return (
    <div className="flex justify-center md:hidden">
      <button onClick={handleToogle}>{children}</button>
    </div>
  );
}

export default HeaderToggle;
