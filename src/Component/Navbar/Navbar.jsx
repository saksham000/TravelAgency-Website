import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaRegRegistered } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

function Navbar() {
  // state to track and update navar

  const [navBar, setNavBar] = useState("menu");
  const [navBgColor, setNavBgColor] = useState("transparent");
  // func to show nav
  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };
  // fun to close navbar
  const closeNavBar = () => {
    setNavBar("menu");
  };

  // Change background color on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBgColor("#696262d5"); // Change to red when scrolled more than 50px
    } else {
      setNavBgColor("transparent"); // Reset to transparent
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navBar" style={{ backgroundColor: navBgColor }}>
      <div className="logoDiv">
        <a href="/">
          <span>
            Shri Hari Om Yatra <FaRegRegistered className="icon smallIcon" />
          </span>
        </a>
      </div>
      <div className={navBar}>
        <ul>
          <li>
            <a className="navList" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="navList" href="/#branches">
              Branches
            </a>
          </li>
          <li>
            <a className="navList" href="/#reviews">
              Testimonial
            </a>
          </li>
          <li>
            <a className="navList" href="/#questions">
              Have Question ?
            </a>
          </li>
          <li>
            <div className="socialIcons">
              <a
                className="navList icon"
                target="_blank"
                href="https://www.facebook.com"
              >
                <ImFacebook />
              </a>
              <a
                className="navList icon"
                target="_blank"
                href="https://www.x.com"
              >
                <ImTwitter />
              </a>
              <a
                className="navList icon"
                target="_blank"
                href="https://www.instagram.com/saxamonly/"
              >
                <AiFillInstagram />
              </a>
            </div>
          </li>
        </ul>
        {/* icon to remove navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={closeNavBar} />
      </div>
      <Link to="/contact" className="signInBtn btn">
        Contact Us !
      </Link>
      {/* icon to toggle navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
}

export default Navbar;
