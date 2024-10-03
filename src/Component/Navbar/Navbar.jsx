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
  const [navBar, setNavBar] = useState("menu");
  const [navBgColor, setNavBgColor] = useState("transparent");
  const [dropdown, setDropdown] = useState(false); // State to control dropdown visibility

  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };

  const closeNavBar = () => {
    setNavBar("menu");
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBgColor("#696262d5");
    } else {
      setNavBgColor("transparent");
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
          <li
            onMouseEnter={() => setDropdown(true)} // Show dropdown on hover
            onMouseLeave={() => setDropdown(false)} // Hide dropdown when mouse leaves
          >
            <a className="navList" href="#">
              Itinerary
            </a>
            {dropdown && ( // Conditionally render the dropdown
              <div className="dropdown">
                <Link to="/chardham" className="dropdownLink">
                  Chardham
                </Link>
                <Link to="/doodham" className="dropdownLink">
                  Do dham
                </Link>
              </div>
            )}
          </li>
          <li>
            <a className="navList" href="/#questions">
              Have a Question ?
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
        <AiFillCloseCircle className="icon closeIcon" onClick={closeNavBar} />
      </div>
      <Link to="/contact" className="signInBtn btn">
        Contact Us !
      </Link>
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
}

export default Navbar;
