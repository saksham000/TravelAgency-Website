import React, { useEffect } from "react";
import "./Branches.css";
import image1 from "../../Assets/branch.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { SiGooglemaps } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

function Branches() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="branches" className="container section branches">
      <section className="courses">
        <h2 data-aos="fade-up" className="heading">
          Our Branches
        </h2>
        <div className="container branchesContainer">
          <article className="branch" data-aos="fade-up">
            <div className="branchImage">
              <img src={image1} data-aos="fade-up" alt="Branch 1" />
            </div>
            <div className="branchInfo">
              <h4 data-aos="fade-up">Shri Hari Om Yatra</h4>
              <p data-aos="fade-up">
                Serving You Since 1975 with Exceptional Travel Experiences,
                Tailored Packages, and Memorable Journeys to Sacred Destinations
              </p>
              <div className="contactInfo">
                <h3 data-aos="fade-up">Contact Us At</h3>
                <ul>
                  <li data-aos="fade-up">
                    <FaPhone /> 9319028166, 7417960990
                  </li>
                  <li data-aos="fade-up">
                    <GrMail /> shrihariomyatra@gmail.com
                  </li>
                  <li data-aos="fade-up">
                    <SiGooglemaps />
                    <a
                      target="_blank"
                      href="https://www.google.com/maps?q=29.9470545,78.1570162"
                    >
                      Click here for loaction
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="branch" data-aos="fade-up">
            <div className="branchImage">
              {/* <img src={image1} data-aos="fade-up" alt="Branch 2" /> */}
            </div>
            <div data-aos="fade-up" className="branchInfo">
              <h4>Shri Shakti Wahini Travels</h4>
              <p data-aos="fade-up">Serving you since 1972</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Branches;
