import React, { useState } from "react";
import "./Navbar.css";
import { FaRegRegistered } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link, Navigate } from "react-router-dom";

function Navbar() {
  // state to track and update navar

  const [navBar, setNavBar] = useState("menu");
  // func to show nav
  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };
  // fun to close navbar
  const closeNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <a href="/">
          <span>Shri Hari Om Yatra</span>
        </a>

        <FaRegRegistered className="icon" />
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
