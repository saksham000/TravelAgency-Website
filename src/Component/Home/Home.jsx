import React, { useEffect } from "react";
import "./Home.css";
import { AiOutlineSwapRight } from "react-icons/ai";
import image1 from "../../Assets/image1.jpg";
import Video from "../../Assets/video2.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Home">
      <div className="videoBg">
        {/* <video src={Video} autoPlay loop muted></video> */}
      </div>
      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams with us !</h1>
        <p data-aos="fade-up">
          Discover the world's most adverturose nature, life is so short for a
          trip.
        </p>
        <button className="btn flex" data-aos="fade-up">
          <a href="#destination">
            Get Started
            <AiOutlineSwapRight className="icon" />
          </a>
        </button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={image1} alt="" />
            <img src={image1} alt="" />
            <img src={image1} alt="" />
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee-content">
          <marquee>
            Get 20% off on your first booking! Book now and enjoy the offer!
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Home;
