import React from "react";
import ProductApp from "../components/product-components/ProductApp";
import HeroSection from "../components/Home/HeroSection";
import OverviewSection from "../components/Home/OverviewSection";
import BannerSection from "../components/Home/BannerSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductApp />
      <OverviewSection />
      <BannerSection />
    </>
  );
}

export default HomePage;
