import "./ErrorComponent.css";
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
export default function ErrorComponent() {
    useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="error-container section" data-aos="fade-up">
      <div className="error-section" data-aos="fade-up">
        <h1 className="error-title" data-aos="fade-up">We Are Working Really Hard!</h1>
        <p className="error-message" data-aos="fade-up">Sorry, but this page does not exist!</p>
        <a data-aos="fade-up" href="/" className="error-button">
          Go Back Home
        </a>
      </div>
    </div>
  );
}
