import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import HomePage from "./pages/Home/HomePage";
import Routers from "./routers/Routers";

function App() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
