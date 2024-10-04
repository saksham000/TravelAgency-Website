import React, { useEffect } from "react";
import "./Destinations.css";
import { TiLocation } from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";
import adventure from "../../Assets/popularPackages/1.jpg";
import beach from "../../Assets/popularPackages/2.jpg";
import taxi from "../../Assets/popularPackages/3.jpg";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    img: adventure,
    name: "Char Dham",
    location: "Gangotri,Yamunotri,Badrinath,Kedarnath",

    url: "/chardham",
  },
  {
    id: 2,
    img: beach,
    name: "Do Dham",
    location: "Badrinath,Kedarnath",

    url: "/doodham",
  },
  {
    id: 3,
    img: taxi,
    name: "Taxi Service",
    location: "Haridwar",

    url: "/contact",
  },
];

function Destinations() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="destination" className="destination section container">
      <div className="secContainer">
        <a
          class="fixed-tel"
          href="tel:+91 9319028166"
          target="_blank"
          title="Call Now"
        >
          <i>
            <FaPhone className="icon" />
          </i>
        </a>
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Our Packages Categories</h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div
                className="singleDestination"
                key={destination.id}
                data-aos="fade-up"
              >
                <div className="imgDiv" data-aos="fade-up">
                  <Link to={destination.url}>
                    <img
                      src={destination.img}
                      alt="Destination Image"
                      data-aos="fade-up"
                    />
                  </Link>
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>
                    {/* <span className="rating">{destination.rating}</span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
