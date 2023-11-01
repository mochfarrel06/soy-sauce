import React from "react";
import ProductApp from "./ProductSection";
import Overview from "./OverviewSection";
import Banner from "./BannerSection";
import LandingPage from "./LandingPage";

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
