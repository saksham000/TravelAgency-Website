import React, { useEffect, useRef, useState } from "react";
import "./Questions.css";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../../Assets/question.png";

// react tostify
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Questions = () => {
  const formRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // If the submission is successful, reset the form
          form.reset();
          toast.success("Form Submitted !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          toast.warn("Please Try Again !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      })
      .catch(() => {
        toast.error("Server Error !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div id="questions" className="questions section container">
      <div className="secHeading">
        {/* <h3 data-aos="fade-up">Frequently asked questions</h3> */}
      </div>
      <div className="secContainer grid">
        <img src={image1} data-aos="fade-down" className="icon" />
        {/* <div className="accordion grid" data-aos="fade-up">
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
        </div> */}
        <div className="form">
          <div className="secHeading" data-aos="fade-up">
            <h4 data-aos="fade-up">Do you have any specific question ?</h4>
            <p data-aos="fade-up">
            Got a Question? We're Here to Help !
            </p>
          </div>
          <div className="formContent grid" data-aos="fade-up">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/maygyzre"
              method="POST"
            >
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
      <ToastContainer />
    </div>
  );
};

export default Questions;
