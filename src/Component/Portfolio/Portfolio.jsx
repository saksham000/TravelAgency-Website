import React, { useEffect } from "react";
import "./Portfolio.css";
import image1 from "../../Assets/image1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="portifolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why Should You Choose US</h3>
            <p data-aos="fade-up">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              sed.
            </p>
          </div>
          <div className="grid">
            <div className="singlePortifolio flex">
              <div className="iconDiv" data-aos="fade-up">
                <img src={image1} alt="Icon Image" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Saftey and support</h4>
                <p data-aos="fade-up">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  incidunt error ut! Iure quod saepe, provident excepturi eaque
                  facere quas.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={image1} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  incidunt error ut! Iure quod saepe, provident excepturi eaque
                  facere quas.
                </p>
              </div>
            </div>
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={image1} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  incidunt error ut! Iure quod saepe, provident excepturi eaque
                  facere quas.
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
