import React, { useEffect } from "react";
import "./Subscribe.css";
import aboutus from "../../Assets/about-us.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
function Subscribe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={aboutus} alt="Div Image" data-aos="fade-down" />
        <div className="textDiv">
          <h4 data-aos="fade-up">About Us !</h4>
          <p data-aos="fade-up">
            Welcome to Shri Hari Om Yatra, serving you since 1975 by providing
            the best travel packages and cabs in Haridwar. As the oldest travel
            agency in the region, we pride ourselves on offering unmatched
            services tailored to your travel needs. Whether you're seeking a
            spiritual pilgrimage to the sacred sites of Uttarakhand or a
            relaxing getaway in the serene Himalayas, our expert team ensures a
            seamless and memorable journey. We specialize in personalized travel
            experiences, premium accommodations, and hassle-free transportation,
            making us your trusted partner in exploring the wonders of Haridwar
            and beyond. Let us guide you on your next adventure with the best
            services available.
          </p>
          <a href="/contact">
            <button className="btn" data-aos="fade-up">
              Start Here !
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
