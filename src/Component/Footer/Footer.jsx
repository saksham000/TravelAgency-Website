import React, { useEffect } from "react";
import "./Footer.css";
import { FaOm } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos="fade-up">
            <FaOm className="icon" />
            <span>Shri hari om yatra</span>
          </div>
        </div>
        <div className="socials flex" data-aos="fade-up">
          <ImFacebook className="icon" />
          <ImTwitter className="icon" />
          <AiFillInstagram className="icon" />
        </div>
        <div>
          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">Information</span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>

          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">Helpful Links</span>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">travel and conditions</a>
            </li>
            <li>
              <a href="#">privecy</a>
            </li>
          </div>

          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">Contact details</span>
            <span className="phone">9999999999</span>
            <span className="email">yourmail@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
