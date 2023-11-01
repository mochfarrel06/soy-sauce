import React from "react";
import FooterMainText from "./FooterMainText";
import FooterItemIcons from "./FooterItemIcons";

function FooterItem({title, description}) {
  return (
    <div className="flex flex-col gap-6">
      <FooterMainText title={title} description={description} />
      <FooterItemIcons />
    </div>
  );
}

export default FooterItem;
