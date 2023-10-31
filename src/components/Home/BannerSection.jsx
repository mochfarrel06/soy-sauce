import React from "react";
import {SiShopee, SiBukalapak} from "react-icons/si";

function BannerSection() {
  return (
    <div className="pt-10 pb-10 w-full h-max overflow-hidden bg-secondary md:pt-12 lg:pt-14 xl:pt-16">
      <div className="lg:container">
        <div className="px-6 py-4 flex flex-col items-center gap-10 md:px-20 lg:px-24 lg:py-6 xl:px-32">
          <div className="flex flex-col text-center gap-2">
            <p className="font-normal text-xs text-white tracking-wide md:text-sm lg:text-base">
              Do you want to try soy sauce ?
            </p>
            <h3 className="font-semibold text-lg text-white tracking-wide md:text-xl lg:text-2xl">
              Please buy at your nearest store or at several online stores
              available in Indonesia
            </h3>
          </div>
          <div className="flex items-center gap-12">
            <SiShopee className="text-2xl text-white md:text-3xl" />
            <SiBukalapak className="text-2xl text-white md:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
