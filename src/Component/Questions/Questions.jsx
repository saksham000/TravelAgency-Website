import React, { useState } from "react";
import "./Questions.css";
import Accordion from "./Accordion";

const Questions = () => {
  const [active, setActive] = useState(
    "how can i find best destination for me ?"
  );
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequwntly asked questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion
            title="lorem10 fdsf df sdf ds fsdwefewgsdgdsbfdfgre g efdg fgfdbxb"
            desc="sdadasd ad ad ad ad  lorem10 dsadas dawd wad awd wad wadwefewfasfasdfewsf"
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="dfsfds f sdf "
            desc="sdadasd ad ad ad ad  lorem10 dsadas dawd wad awd wad wadwefewfasfasdfewsf"
            active={active}
            setActive={setActive}
          />
          <Accordion
            title=" df g r fgde gf d2"
            desc="sdadasd ad ad ad ad  lorem10 dsadas dawd wad awd wad wadwefewfasfasdfewsf"
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="titrehet er gfj gjf jet le2"
            desc="sdadasd ad ad ad ad  lorem10 dsadas dawd wad awd wad wadwefewfasfasdfewsf"
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="form">
          <div className="secHeading">
            <h4>Do you have any specific question ?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              saepe?
            </p>
          </div>
          <div className="formContent grid">
            <input type="email" placeholder="enter email" />
            <textarea placeholder="enter your question here"></textarea>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
