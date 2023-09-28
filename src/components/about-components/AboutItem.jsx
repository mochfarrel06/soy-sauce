import React from 'react';
import AboutItemTitle from './AboutItemTitle';
import AboutItemImg from './AboutItemImg';

function AboutItem() {
  return (
    <section className="pt-32 pb-32 w-full h-max md:pt-36 lg:pt-40 xl:pt-44 overflow-hidden">
      <div className="lg:container">
        <div className="px-6 py-4 flex flex-col items-center gap-20 lg:py-6 lg:flex-row lg:justify-between lg:gap-24">
          <AboutItemImg />
          <AboutItemTitle />
        </div>
      </div>
    </section>
  );
}

export default AboutItem;
