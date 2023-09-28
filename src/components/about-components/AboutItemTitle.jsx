import React from 'react';

function AboutItemTitle() {
  const textAbout = {
    title: 'Mustard soy sauce with its special qualities',
    description:
      'The natural delicacy of Cap SAWI Sweet Soy Sauce has been trusted by the Indonesian people since 1935. With selected quality ingredients, it produces a delicious taste, delicious sweet and savory aroma and gives a more attractive and shiny appearance to your dishes. Suitable for fried noodles, fried rice, meatballs, chicken noodles, various stir-fries, etc.',
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <h3 className="font-semibold text-xl text-primary tracking-wide lg:text-2xl">{textAbout.title}</h3>
      <p className="font-normal text-sm text-gray2 tracking-wide">{textAbout.description}</p>
    </div>
  );
}

export default AboutItemTitle;
