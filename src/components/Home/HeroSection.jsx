import React from "react";

function HeroSection() {
  return (
    <section className="pt-32 pb-32 w-full h-max md:pt-36 lg:pt-40 xl:pt-44">
      <div className="lg:container">
        <div className="px-6 py-4 flex flex-col items-center gap-20 lg:py-6 lg:flex-row lg:justify-between lg:gap-20 xl:px-16">
          <div className="flex flex-col gap-12 md:gap-16 lg:w-3/4 lg:gap-16 xl:gap-20">
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="font-semibold text-sm text-gray2 tracking-wide max-[305px]:text-xs md:text-base lg:text-lg">
                Soy Sauce: A Touch of True Flavor
              </p>
              <h1 className="font-bold text-2xl text-secondary tracking-wider max-[305px]:text-xl sm:text-3xl sm:leading-10 lg:w-full lg:text-4xl lg:leading-[2.9rem] xl:text-[2.5rem] xl:leading-[3.4rem]">
                Soy sauce with a
                <span className="text-yellow">traditional recipe</span> without
                using chemicals or additional ingredients.
              </h1>
            </div>
            <div className="flex gap-4">
              <button className="bg-yellow inline-block px-3 py-2 items-center font-semibold text-sm rounded-sm text-secondary border-2 border-yellow hover:bg-white hover:text-secondary transition duration-200 cursor-pointer max-[305px]:px-2 max-[305px]:text-xs sm:px-5 lg:text-lg lg:px-4">
                Buy Now
              </button>
              <button className="bg-white inline-block px-3 py-2 items-center font-semibold text-sm rounded-sm text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition duration-200 cursor-pointer max-[305px]:px-2 max-[305px]:text-xs sm:px-5 lg:text-lg lg:px-4">
                Halo
              </button>
            </div>
          </div>
          <div className="">
            <div className="overflow-hidden">
              <img
                className="w-[15rem] max-[305px]:w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
                src="./image/homeImg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
