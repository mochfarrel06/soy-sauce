import React from "react";
import LandingPage from "../layouts/Main/Home/LandingPage";
import ProductApp from "../layouts/Main/Home/ProductSection";
import Overview from "../layouts/Main/Home/OverviewSection";
import Banner from "../layouts/Main/Home/BannerSection";

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
