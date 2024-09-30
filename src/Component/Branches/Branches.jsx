import React, { useEffect } from "react";
import "./Branches.css";
import image1 from "../../Assets/image1.jpg";
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
              <h4 data-aos="fade-up">Branch in Location 1</h4>
              <p data-aos="fade-up">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus error earum eligendi voluptatum qui, vel similique?
              </p>
              <div className="contactInfo">
                <h3 data-aos="fade-up">Contact Us At</h3>
                <ul>
                  <li data-aos="fade-up">
                    <FaPhone /> 8360132497
                  </li>
                  <li data-aos="fade-up">
                    <GrMail /> yourmail@gmail.com
                  </li>
                  <li data-aos="fade-up">
                    <SiGooglemaps />
                    <a target="_blank" href="https://www.google.com/maps">
                      Click here for loaction
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="branch" data-aos="fade-up">
            <div className="branchImage">
              <img src={image1} data-aos="fade-up" alt="Branch 2" />
            </div>
            <div data-aos="fade-up" className="branchInfo">
              <h4>Branch in Location 2</h4>
              <p data-aos="fade-up">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus error earum eligendi voluptatum qui, vel similique?
              </p>
              <div className="contactInfo">
                <h3 data-aos="fade-up">Contact Us At</h3>
                <ul>
                  <li data-aos="fade-up">
                    <FaPhone /> 8360132497
                  </li>
                  <li data-aos="fade-up">
                    <GrMail /> yourmail@gmail.com
                  </li>
                  <li data-aos="fade-up">
                    <SiGooglemaps />
                    <a target="_blank" href="https://www.google.com/maps">
                      Click here for loaction
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Branches;
