import React from "react";
import Home from "../Home/Home";
import Destinations from "../Destinations/Destinations";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import Questions from "../Questions/Questions";
import Subscribe from "../Subscribe/Subscribe";
import Middle from "../Middle/Middle";
import Branches from "../Branches/Branches";

function MainPage() {
  return (
    <div>
      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Branches />
      <Reviews />
      <Questions />
      <Subscribe />
    </div>
  );
}

export default MainPage;
