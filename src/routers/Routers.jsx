import React from "react";
import HomePage from "../pages/Home/HomePage";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/Error";

function Routers() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routers;
