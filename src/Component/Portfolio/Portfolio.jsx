import React, { useEffect } from "react";
import "./Portfolio.css";
import saftey from "../../Assets/saftey.png";
import destination from "../../Assets/destination.png";
import support from "../../Assets/support.png";
import image1 from "../../Assets/abt.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="portifolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why Should You Choose US</h3>
            <p data-aos="fade-up">
              Choose us for unforgettable adventures, personalized experiences,
              and seamless travel planning to your dream destinations!
            </p>
          </div>
          <div className="grid">
            <div className="singlePortifolio flex">
              <div className="iconDiv" data-aos="fade-up">
                <img src={saftey} alt="Icon Image" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Saftey and support</h4>
                <p data-aos="fade-up">
                  Your safety and support are our top priorities, ensuring
                  worry-free travel every step of the way.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={destination} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Discover a diverse range of breathtaking destinations, from
                  serene beaches to adventurous mountain escapes, tailored to
                  fulfill every traveler's dream.
                </p>
              </div>
            </div>
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={support} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated 24/7 Customer Support ensures you're never alone
                  on your travel journey—help is always just a call away!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos="fade-down">
          <img src={image1} alt="/Icon Image" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
