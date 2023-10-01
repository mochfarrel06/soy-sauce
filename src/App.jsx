import React from 'react';
import Header from './components/header-components/Header';
import FooterItem from './components/footer-components/FooterItem';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import HeaderItem from './components/header-components/HeaderItem';

function App() {
  return (
    <>
      <HeaderItem />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <FooterItem />
    </>
  );
}

export default App;
