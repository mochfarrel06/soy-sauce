import React from "react";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
// import HeaderItem from "./components/header-components/HeaderItem";
import HeaderSection from "./components/Header/HeaderSection";
import FooterSection from "./components/Footer/FooterSection";

function App() {
  return (
    <>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
