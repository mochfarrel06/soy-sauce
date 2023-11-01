import React from "react";
import FooterLinkContainer from "./FooterLinkContainer";

function FooterLinkList({title, links, subtitle, id, items}) {
  return (
    <div className="flex flex-col gap-8 w-full sm:flex-row  sm:justify-between lg:gap-16">
      {items.map((item) => (
        <FooterLinkContainer
          key={item.id}
          id={item.id}
          title={title}
          links={links}
          subtitle={subtitle}
        />
      ))}
    </div>
  );
}

export default FooterLinkList;
