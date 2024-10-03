import React, { useEffect } from "react";
import "./Footer.css";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <footer data-aos="fade-up page-wrapper">
        <div className="container footerContainer content">
          <div className="footer1">
            <a href="/" className="footerLogo">
              <h4 data-aos="fade-up">Shri Hari Om Yatra</h4>
            </a>
            <p data-aos="fade-up">
              Explore the world with us—your dream destination is just a click
              away!
            </p>
          </div>

          <div className="footer2">
            <h4 data-aos="fade-up">Permalinks</h4>
            <ul className="permalinks">
              <li data-aos="fade-up">
                <a href="/">Home</a>
              </li>
              <li data-aos="fade-up">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer3">
            <ul className="privacy">
              <li data-aos="fade-up">
                <a href="#">Privacy Policy</a>
              </li>
              <li data-aos="fade-up">
                <a href="#">Terms and Conditions</a>
              </li>
              <li data-aos="fade-up">
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer4">
            <h4 data-aos="fade-up">Contact Us</h4>
            <div>
              <p data-aos="fade-up">9319028166</p>
              <p data-aos="fade-up">shrihariomyatra@gmail.com</p>
            </div>

            <ul className="footerSocials">
              <li data-aos="fade-up">
                <a href="#">
                  <ImFacebook className="icon" />
                </a>
              </li>
              <li data-aos="fade-up">
                <a href="#">
                  <GrMail className="icon" />
                </a>
              </li>
              <li data-aos="fade-up">
                <a
                  target="_blank"
                  href="https://www.instagram.com/shrihariomyatra/profilecard/?igsh=MXUxYWYyZXN4dDZ6bg=="
                >
                  <AiFillInstagram className="icon" />
                </a>
              </li>
              {/* <li data-aos="fade-up">
                <a href="#">
                  <ImTwitter className="icon" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="footerCopyright">
          <small>copyright &copy; Shri Hari Om Yatra</small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
