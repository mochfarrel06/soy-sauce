import React from "react";
import FooterItem from "./FooterItem";

function FooterLinkContainer({items, title, description}) {
  return (
    <div className="px-6 py-4 flex flex-col gap-20 lg:py-6 lg:flex-row lg:gap-12 lg:justify-between">
      <FooterItem title={title} description={description} />
      <div className="flex flex-col gap-8 w-full sm:flex-row  sm:justify-between lg:gap-16">
        {items.map((item) => (
          <div className="flex flex-col gap-4" key={item.id}>
            <h4 className="font-normal">{item.name}</h4>
            <div className="flex flex-col gap-2">
              {item.links.map((link) => (
                <a
                  href="#"
                  className="font-normal inline-block text-gray2 text-sm tracking-wide"
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterLinkContainer;
