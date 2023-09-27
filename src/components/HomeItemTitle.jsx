import React from 'react';

function HomeItemTitle() {
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      <p className="font-semibold text-sm text-gray2 tracking-wide sm:text-base lg:text-lg">Soy Sauce: A Touch of True Flavor</p>
      <h1 className="font-bold text-2xl text-secondary tracking-wider sm:text-3xl md:text-4xl xl:text-5xl">
        Soy sauce with a <span className="text-yellow">traditional recipe</span> without using chemicals or additional ingredients.
      </h1>
    </div>
  );
}

export default HomeItemTitle;
