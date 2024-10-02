import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contactus from "../Contactus/Contactus";
import MainPage from "../MainPage/MainPage";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CharDham from "../Itinerary/CharDham";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import DooDham from "../Itinerary/DooDham";

function Travel() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/chardham" element={<CharDham />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/doodham" element={<DooDham />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Travel;
