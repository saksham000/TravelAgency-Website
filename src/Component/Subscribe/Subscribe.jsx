import React, { useEffect } from "react";
import "./Subscribe.css";
import image1 from "../../Assets/image1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
function Subscribe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={image1} alt="Div Image" data-aos="fade-down" />
        <div className="textDiv">
          <h4 data-aos="fade-up">Best way to start your journey !</h4>
          <p data-aos="fade-up">
            we offer personalized intericanoj tailer to idani dnosn
            andannlndalksd
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
