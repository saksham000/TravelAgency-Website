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
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="questions" className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequently asked questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid" data-aos="fade-up">
          <Accordion
            title="What is the best time to book my trip to get the lowest prices?"
            desc="The best time to book for the lowest prices is typically 6-8 weeks in advance. However, last-minute deals and off-peak seasons can also offer significant savings depending on your destination."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="Do you offer customized travel packages based on personal preferences?"
            desc="Yes, we specialize in personalized travel packages. You can share your preferences, such as destinations, activities, and budget, and we'll craft an itinerary tailored just for you."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title=" What is your cancellation and refund policy?"
            desc="Our cancellation and refund policy varies depending on the package and booking terms. We recommend reviewing your specific itinerary for details or contacting our 24/7 Customer Support for assistance."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="Can you help with visa applications and travel insurance?"
            desc="Absolutely! We assist with visa applications, ensuring you have the necessary documentation for your trip. We also offer comprehensive travel insurance options to give you peace of mind throughout your journey."
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
            <form action="https://formspree.io/f/maygyzre" method="POST">
              <input
                type="email"
                name="Email Address"
                placeholder="enter email"
                data-aos="fade-up"
                required
              />
              <textarea
                name="message"
                placeholder="enter your question here"
                data-aos="fade-up"
                required
              ></textarea>
              <button className="btn" data-aos="fade-up">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
