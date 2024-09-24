import React, { useState } from "react";
import "./Navbar.css";
import { FaOm } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

function Navbar() {
  // state to track and update navar

  const [navBar, setNavBar] = useState("menu")
  // func to show nav
  const showNavBar = ()=>{
    setNavBar('menu showNavbar')
  }
  // fun to close navbar
  const closeNavBar = ()=>{
    setNavBar("menu")
  }


  return (
    <div className="navBar">
      <div className="logoDiv">
        <FaOm className="icon" />
        <span>Shri hari om yatra</span>
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">Destination</li>

          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        {/* icon to remove navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={closeNavBar} />
      </div>
      <button className="signInBtn btn">Sign Up</button>
      {/* icon to toggle navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar}/>

    </div>
  );
}

export default Navbar;
