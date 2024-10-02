import React, { useEffect } from "react";
import "./Destinations.css";
import { TiLocation } from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";
import adventure from "../../Assets/popularPackages/adventure.jpg";
import beach from "../../Assets/popularPackages/beach.jpg";
import family_trip from "../../Assets/popularPackages/family_trip.jpg";
import { FaPhone } from "react-icons/fa6";

const destinations = [
  {
    id: 1,
    img: adventure,
    name: "Adventure Tour",
    location: "USA",
    rating: 4.7,
    url: "/chardham",
  },
  {
    id: 2,
    img: beach,
    name: "Beaches Tour",
    location: "GOA",
    rating: 4.7,
    url: "/doodham",
  },
  {
    id: 3,
    img: family_trip,
    name: "Family Trip",
    location: "Kulu",
    rating: 4.7,
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
          href="tel:+91 8360132497"
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
                  <a href={destination.url}>
                    <img
                      src={destination.img}
                      alt="Destination Image"
                      data-aos="fade-up"
                    />
                  </a>
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
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
