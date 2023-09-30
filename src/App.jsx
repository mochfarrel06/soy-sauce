import React from 'react';
import Header from './components/header-components/Header';
import FooterItem from './components/footer-components/FooterItem';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <FooterItem />
    </>
  );
}

export default App;
