import React from "react";
import "./Reviews.css";
import { AiFillStar } from "react-icons/ai";
import image1 from "../../Assets/image1.jpg";

function Reviews() {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History from our beloved Clients</h3>
          <p>
            Lorem, elit. Aut excepturi nisi assumenda hic in iusto nemo impedit
            earum laudantium blanditiis, eos molestias cumque nam unde!
          </p>
          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>
          
          <div className="clientsImages flex">
            <img src={image1} alt="image Icon" />
            <img src={image1} alt="image Icon" />
            <img src={image1} alt="image Icon" />
            <img src={image1} alt="image Icon" />
            <img src={image1} alt="image Icon" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={image1} alt="div Image" />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
