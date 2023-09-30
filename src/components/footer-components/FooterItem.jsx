import React from 'react';
import FooterItemLogo from './FooterItemLogo';
import FooterItemLink from './FooterItemlink';

function FooterItem() {
  return (
    <div className="pt-32 pb-32 w-full h-max md:pt-36 lg:pt-40 xl:pt-44 overflow-hidden lg:pb-10">
      <div className="lg:container">
        <div className="px-6 py-4 flex flex-col gap-20 lg:py-6 lg:flex-row lg:gap-12 lg:justify-between">
          <FooterItemLogo />
          <div className="flex flex-col gap-8 w-full sm:flex-row  sm:justify-between lg:gap-16">
            <FooterItemLink title="Partnership" sub1="Website" sub2="Social Media" sub3="Branding" />
            <FooterItemLink title="Partnership" sub1="Website" sub2="Social Media" sub3="Branding" />
            <FooterItemLink title="Partnership" sub1="Website" sub2="Social Media" sub3="Branding" />
            <FooterItemLink title="Partnership" sub1="Website" sub2="Social Media" sub3="Branding" />
          </div>
        </div>
        <div className="px-6 py-4 text-center lg:py-6">
          <p className="font-normal text-xs text-gray2 tracking-wide lg:text-base">@2023 KecapSawi, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default FooterItem;
