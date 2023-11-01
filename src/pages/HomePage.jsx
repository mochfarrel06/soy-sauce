import React from "react";
import OverviewSection from "../components/Home/OverviewSection";
import BannerSection from "../components/Home/BannerSection";
import LandingPage from "../layouts/Main/Home/LandingPage";
import ProductApp from "../layouts/Main/Home/ProductSection";

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
