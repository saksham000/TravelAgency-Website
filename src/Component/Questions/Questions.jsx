import React, { useState, useEffect } from "react";
import "./Questions.css";
import Accordion from "./Accordion";
import Aos from "aos";
import "aos/dist/aos.css";
const Questions = () => {
  const [active, setActive] = useState(
    "how can i find best destination for me ?"
  );
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequwntly asked questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid" data-aos="fade-up">
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
          <div className="secHeading" data-aos="fade-up">
            <h4 data-aos="fade-up">Do you have any specific question ?</h4>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              saepe?
            </p>
          </div>
          <div className="formContent grid" data-aos="fade-up">
            <input type="email" placeholder="enter email" data-aos="fade-up" />
            <textarea
              placeholder="enter your question here"
              data-aos="fade-up"
            ></textarea>
            <button className="btn" data-aos="fade-up">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
