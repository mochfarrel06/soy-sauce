import React from 'react';
import Header from './components/header-components/Header';
import HomeItem from './components/home-components/HomeItem';
import ProductApp from './components/product-components/ProductApp';
import AboutItem from './components/about-components/AboutItem';

function App() {
  return (
    <>
      <div className="">
        <Header />
        <HomeItem />
        <ProductApp />
        <AboutItem />
      </div>
    </>
  );
}

export default App;
