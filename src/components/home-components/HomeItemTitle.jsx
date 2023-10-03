import React from 'react';

function HomeItemTitle() {
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      <p className="font-semibold text-sm text-gray2 tracking-wide max-[305px]:text-xs md:text-base lg:text-lg">Soy Sauce: A Touch of True Flavor</p>
      <h1 className="font-bold text-2xl text-secondary tracking-wider max-[305px]:text-xl sm:text-3xl sm:leading-10 lg:w-full lg:text-4xl lg:leading-[2.9rem] xl:text-[2.5rem] xl:leading-[3.4rem]">
        Soy sauce with a <span className="text-yellow">traditional recipe</span> without using chemicals or additional ingredients.
      </h1>
    </div>
  );
}

export default HomeItemTitle;
