import React from 'react';
import { SiShopee, SiBukalapak } from 'react-icons/si';

function BannerItemIcon() {
  return (
    <div className="flex items-center gap-12">
      <SiShopee className="text-2xl text-white md:text-3xl" />
      <SiBukalapak className="text-2xl text-white md:text-3xl" />
    </div>
  );
}

export default BannerItemIcon;
