import React from "react";

function HeaderContainer({children}) {
  return (
    <div className="bg-white shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="lg:container">
        <div className="px-6 py-4 overflow-hidden lg:py-5">
          <div className="flex justify-between items-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContainer;
