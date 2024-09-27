import React, { useEffect } from "react";
import "./Reviews.css";
import { AiFillStar } from "react-icons/ai";
import image1 from "../../Assets/image1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
function Reviews() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Real Travel History from our beloved Clients
          </h3>
          <p data-aos="fade-up">
            Lorem, elit. Aut excepturi nisi assumenda hic in iusto nemo impedit
            earum laudantium blanditiis, eos molestias cumque nam unde!
          </p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex">
            <img src={image1} alt="image Icon" data-aos="fade-up" />
            <img src={image1} alt="image Icon" data-aos="fade-up" />
            <img src={image1} alt="image Icon" data-aos="fade-up" />
            <img src={image1} alt="image Icon" data-aos="fade-up" />
            <img src={image1} alt="image Icon" data-aos="fade-up" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={image1} alt="div Image" data-aos="fade-down"/>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
