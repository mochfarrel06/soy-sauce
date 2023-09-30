import React from 'react';
import HomeItem from '../components/home-components/HomeItem';
import AboutItem from '../components/about-components/AboutItem';
import BannerItem from '../components/banner-components/BannerItem';
import ProductApp from '../components/product-components/ProductApp';

function HomePage() {
  return (
    <>
      <HomeItem />
      <ProductApp />
      <AboutItem />
      <BannerItem />
    </>
  );
}

export default HomePage;
