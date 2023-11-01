import React from "react";

// import ProductApp from "../layouts/Main/Home/ProductSection";
// import Overview from "../layouts/Main/Home/OverviewSection";
// import Banner from "../layouts/Main/Home/BannerSection";
// import LandingImage from "./Home/LandingPage/Components/LandingImage";
import ProductApp from "./Home/ProductSection";
import Overview from "./Home/OverviewSection";
import Banner from "./Home/BannerSection";
import LandingPage from "./Home/LandingPage";

function HomePage() {
  return (
    <>
      <LandingPage />
      <ProductApp />
      <Overview />
      <Banner />
    </>
  );
}

export default HomePage;
