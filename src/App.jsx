import React from 'react';
import Header from './components/Header';
import HomeItem from './components/HomeItem';
import ProductItem from './components/ProductItem';
import ProductApp from './components/ProductApp';

function App() {
  return (
    <>
      <div className="">
        <Header />
        <HomeItem />
        <ProductApp />
      </div>
    </>
  );
}

export default App;
