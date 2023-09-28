import React from 'react';

function AboutItemImg() {
  const imgText = {
    imageUrl: '/image/aboutImg.png',
  };

  return (
    <div>
      <img src={imgText.imageUrl} alt="Kedelai" className="w-96 md:w-[28rem] lg:w-full xl:w-[90%]" />
    </div>
  );
}

export default AboutItemImg;
