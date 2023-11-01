import React from "react";
import LandingPageMain from "./LandingPageMain";
import LandingImage from "./LandingImage";

function LandingPageContainer() {
  return (
    <div className="px-6 py-4 flex flex-col items-center gap-20 lg:py-6 lg:flex-row lg:justify-between lg:gap-20 xl:px-16">
      <LandingPageMain
        subtitle={"Soy Sauce: A Touch of True Flavor"}
        title1={"Soy sauce with a"}
        title2={"traditional recipe "}
        title3={"without using chemicals or additional ingredients."}
        titlebtn1={"Buy Now"}
        titlebtn2={"Learn More"}
      />
      <LandingImage src={"./image/homeImg.png"} name={"Kecap Sawi"} />
    </div>
  );
}

export default LandingPageContainer;
