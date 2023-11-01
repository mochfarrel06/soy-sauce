import React from "react";

function FooterItemDescription({description}) {
  return (
    <p className="font-normal text-sm text-gray2 tracking-wide sm:text-base md:w-3/4">
      {description}
    </p>
  );
}

export default FooterItemDescription;
