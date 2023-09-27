import React from 'react';
import HomeItemTitle from './HomeItemTitle';
import HomeItemButton from './HomeItemButton';
import HomeItemImage from './HomeItemImage';

function HomeItem() {
  return (
    <section className="pt-32 pb-32 w-full h-max md:pt-36 lg:pt-40 xl:pt-44">
      <div className="lg:container">
        <div className="px-6 py-4 flex flex-col items-center gap-20 lg:py-6 lg:flex-row lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-12 lg:w-3/4 lg:gap-16">
            <HomeItemTitle />
            <HomeItemButton />
          </div>
          <div className="">
            <HomeItemImage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeItem;
