import React, { useEffect } from "react";
import "./Contactus.css";
import image1 from "../../Assets/image1.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import { SiGooglemaps } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

function Contactus() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className=" container contact section" data-aos="fade-up">
      <section>
        <div className="contactContainer">
          <aside className="contactAside">
            <div className="asideImg">
              <img src={image1} alt="Principal" />
            </div>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              tempore.
            </p>
            <ul className="contactDetails">
              <li>
                <FaPhone />
                <h5>982914559</h5>
              </li>
              <li>
                <GrMail />
                <h5>hello@gmail.com</h5>
              </li>
              <li>
                <SiGooglemaps />
                <a target="_blank" href="https://www.google.com/maps">
                  Click Here !
                </a>
              </li>
            </ul>
            <ul className="contactSocial">
              <li>
                <a href="https://facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <RiTwitterXLine />
                </a>
              </li>
            </ul>
          </aside>

          <form
            action="https://formspree.io/f/maygyzre"
            method="POST"
            className="contactForm"
          >
            <div className="formName">
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="email"
              name="Email Address"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              rows="7"
              required
              placeholder="Message"
            ></textarea>
            <div>
              <button className="button-86" type="submit">
                <span className="default">Send</span>
                <span className="success">Sent!</span>
                <div className="left"></div>
                <div className="right"></div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
