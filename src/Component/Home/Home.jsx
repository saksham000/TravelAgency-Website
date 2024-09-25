import React from "react";
import "./Home.css";
import { AiOutlineSwapRight } from "react-icons/ai";

import Video from "../../Assets/video.mp4";

function Home() {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1>Unlock Your Travel Dreams with us !</h1>
        <p>
          Discover the world's most adverturose nature, lifeis so short for a
          trip.
        </p>
        <button className="btn flex">
          Get STarted <AiOutlineSwapRight className="icon" />
        </button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex">
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
