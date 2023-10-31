import React from "react";
import ProductApp from "../components/product-components/ProductApp";
import OverviewSection from "../components/Home/OverviewSection";
import BannerSection from "../components/Home/BannerSection";
import LandingPage from "../layouts/Main/Home/LandingPage";

function HomePage() {
  return (
    <>
      <LandingPage />
      <ProductApp />
      <OverviewSection />
      <BannerSection />
    </>
  );
}

export default HomePage;
