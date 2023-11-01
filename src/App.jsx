import React from "react";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
