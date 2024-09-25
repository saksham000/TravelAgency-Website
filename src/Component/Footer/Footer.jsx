import React from "react";
import "./Footer.css";
import { FaOm } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <FaOm className="icon" />
            <span>Shri hari om yatra</span>
          </div>
        </div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <ImTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        <div>

          <div className="footerLinks">
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

          <div className="footerLinks">
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

          <div className="footerLinks">
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
