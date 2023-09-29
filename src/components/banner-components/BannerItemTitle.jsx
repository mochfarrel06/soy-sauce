import React from 'react';

function BannerItemTitle() {
  const titleText = {
    text1: 'Do you want to try soy sauce ?',
    text2: 'Please buy at your nearest store or at several online stores available in Indonesia',
  };

  return (
    <div className="flex flex-col text-center gap-2">
      <p className="font-normal text-xs text-white tracking-wide md:text-sm lg:text-base">{titleText.text1}</p>
      <h3 className="font-semibold text-lg text-white tracking-wide md:text-xl lg:text-2xl">{titleText.text2}</h3>
    </div>
  );
}

export default BannerItemTitle;
