import React, { useEffect } from "react";
import "./Middle.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Middle() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="middle section">
      <div className="secContainer container">
        <div className="grid" data-aos="fade-up">
          <span className="flex" data-aos="fade-up">
            <h1>24/7</h1>
            <p>Customer Support</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>200+</h1>
            <p>Fine Destinations</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>1K+</h1>
            <p>Customer Reviews</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>4.5</h1>
            <p>Overall Rateing</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Middle;
