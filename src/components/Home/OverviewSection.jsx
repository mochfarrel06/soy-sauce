import React from "react";

function OverviewSection() {
  return (
    <section className="pt-32 pb-32 w-full h-max md:pt-36 lg:pt-40 xl:pt-44 overflow-hidden">
      <div className="lg:container">
        <div className="px-6 py-4 flex flex-col items-center gap-20 lg:py-6 lg:flex-row lg:justify-between lg:gap-24">
          <div>
            <img
              src="/image/aboutImg.png"
              alt="Kedelai"
              className="w-96 md:w-[28rem] lg:w-full xl:w-[90%]"
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-10">
            <h3 className="font-semibold text-xl text-primary tracking-wide lg:text-2xl">
              Mustard soy sauce with its special qualities
            </h3>
            <p className="font-normal text-sm text-gray2 tracking-wide">
              The natural delicacy of Cap SAWI Sweet Soy Sauce has been trusted
              by the Indonesian people since 1935. With selected quality
              ingredients, it produces a delicious taste, delicious sweet and
              savory aroma and gives a more attractive and shiny appearance to
              your dishes. Suitable for fried noodles, fried rice, meatballs,
              chicken noodles, various stir-fries, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
