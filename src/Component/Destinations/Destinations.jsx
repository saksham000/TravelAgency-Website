import React, { useEffect } from "react";
import "./Destinations.css";
import { TiLocation } from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../../Assets/image1.jpg";

const destinations = [
  {
    id: 1,
    img: image1,
    name: "Ice Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 2,
    img: image1,
    name: "Ice Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 3,
    img: image1,
    name: "Ice Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 4,
    img: image1,
    name: "Ice Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 5,
    img: image1,
    name: "Ice Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 6,
    img: image1,
    name: "Ice Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 7,
    img: image1,
    name: "Ice Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 8,
    img: image1,
    name: "Ice Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
];

function Destinations() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="destination" className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Find Your Dream Destination</h3>
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
                  <img src={destination.img} alt="Destination Image" data-aos="fade-up" />
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
