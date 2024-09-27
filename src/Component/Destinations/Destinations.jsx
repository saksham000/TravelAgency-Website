import React, { useEffect } from "react";
import "./Destinations.css";
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
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
    <div className="destination section container">
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
        <div className="searchField grid">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>
          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>beach</li>
            <li>park</li>
            <li>nature</li>
            <li>mountain</li>
          </ul>
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
                  <img src={destination.img} alt="Destination Image" />
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
