import React from 'react';
import BannerItemTitle from './BannerItemTitle';
import BannerItemIcon from './BannerItemIcon';

function BannerItem() {
  return (
    <div className="pt-10 pb-10 w-full h-max overflow-hidden bg-secondary md:pt-12 lg:pt-14 xl:pt-16">
      <div className="lg:container">
        <div className="px-6 py-4 flex flex-col items-center gap-10 md:px-20 lg:px-24 lg:py-6 xl:px-32">
          <BannerItemTitle />
          <BannerItemIcon />
        </div>
      </div>
    </div>
  );
}

export default BannerItem;
