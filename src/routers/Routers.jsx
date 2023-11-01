import React from "react";
import HomePage from "../pages/Home/HomePage";
import {Route, Routes, BrowserRouter} from "react-router-dom";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Routers;
