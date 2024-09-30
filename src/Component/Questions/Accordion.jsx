import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";

import "./Questions.css";

const Accordion = ({ title, desc, active, setActive }) => {
  const isActive = active === title;

  return (
    <div className={`accordionContainer ${isActive ? "open" : ""}`} onClick={() => setActive(isActive ? "" : title)}>
      <span className={`title flex ${isActive ? "activeTitle" : ""}`}>
        {title}
        <span>
          {isActive ? <BsArrowDownCircle className="icon" /> : <BsArrowUpCircle className="icon" />}
        </span>
      </span>
      <p className={`description ${isActive ? "show" : ""}`}>{desc}</p>
    </div>
  );
};

export default Accordion;
