import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contactus from "../Contactus/Contactus";
import MainPage from "../MainPage/MainPage";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Travel() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Travel;
