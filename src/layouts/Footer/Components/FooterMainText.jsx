import React from "react";
import FooterItemTitle from "./FooterItemTitle";
import FooterItemDescription from "./FooterItemDescription";

function FooterMainText({title, description}) {
  return (
    <div className="flex flex-col gap-4">
      <FooterItemTitle title={title} />
      <FooterItemDescription description={description} />
    </div>
  );
}

export default FooterMainText;
