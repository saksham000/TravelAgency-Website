import React, { useEffect } from "react";
import "./Itinerary.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from "aos";
import "aos/dist/aos.css";
import bg1 from "../../Assets/itinerary/1.jpg";
import bg2 from "../../Assets/itinerary/2.jpg";
import bg3 from "../../Assets/itinerary/3.jpg";
import bg4 from "../../Assets/itinerary/4.jpg";
import bg5 from "../../Assets/itinerary/5.jpg";
import bg6 from "../../Assets/itinerary/6.jpg";
import bg7 from "../../Assets/itinerary/7.jpg";
import bg8 from "../../Assets/itinerary/8.jpg";
import bg9 from "../../Assets/itinerary/9.jpg";
import bg10 from "../../Assets/itinerary/10.jpg";
import { Link } from "react-router-dom";

function DooDham() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const itineraryData = [
    {
      day: "Day 1: Arrival in Haridwar",
      travel: "Check-in at your hotel in Haridwar.",
      activities: [
        "1. Visit Har Ki Pauri for Ganga Aarti in the evening.",
        "2. Explore local temples like Mansa Devi and Chandi Devi.",
      ],
      stay: "Overnight Stay at a hotel in Haridwar.",
      location: "Haridwar, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(Haridwar)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 2: Haridwar to Guptkashi",
      travel: "Drive from Haridwar to Guptkashi (205 km | 8-9 hours).",
      route: "Haridwar – Rishikesh – Devprayag – Rudraprayag – Guptkashi.",
      activities: [
        "1. Stop at Devprayag (confluence of Bhagirathi and Alaknanda rivers).",
        "2. Visit Rudraprayag (confluence of Alaknanda and Mandakini rivers).",
      ],
      stay: "Overnight stay in Guptkashi.",
      location: "Guptkashi, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(Haridwar%20to%20Guptkashi)&t=&z=9&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 3: Guptkashi to Kedarnath",
      travel:
        "Drive from Guptkashi to Sonprayag (30 km), then trek 18 km to Kedarnath.",
      activities: [
        "1. Early morning drive to Sonprayag.",
        "2. Begin the 18 km trek from Gaurikund to Kedarnath.",
        "3. Visit the Kedarnath Temple and attend evening aarti.",
      ],
      stay: "Overnight stay in Kedarnath.",
      location: "Kedarnath, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(guptkashi%20to%20kedarnath)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 4: Kedarnath to Guptkashi",
      travel: "Trek back from Kedarnath to Sonprayag, then drive to Guptkashi.",
      activities: [
        "1. Early morning darshan at Kedarnath Temple.",
        "2. Relax in Guptkashi after the trek.",
      ],
      stay: "Overnight stay in Guptkashi.",
      location: "Guptkashi, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(kedarnath%20to%20guptkashi)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 5: Guptkashi to Badrinath",
      travel: "Drive to Badrinath (185 km | 7-8 hours).",
      route: "Guptkashi – Joshimath – Vishnuprayag – Badrinath.",
      activities: [
        "1. Visit Joshimath (a winter seat of Lord Badrinath).",
        "2. Explore Vishnuprayag (confluence of Alaknanda and Dhauliganga rivers).",
        "3. Attend evening aarti at Badrinath Temple.",
      ],
      stay: "Overnight stay in Badrinath.",
      location: "Badrinath, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(guptkashi%20to%20badrinath)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 6: Badrinath to Chopta (via Tungnath)",
      travel: "Visit Badrinath Temple and travel to Chopta (95 km).",
      activities: [
        "1. Take a dip in Tapt Kund.",
        "2. Trek from Chopta to Tungnath Temple (3.5 km).",
        "3. Option to trek to Chandrashila Peak for panoramic views.",
      ],
      stay: "Overnight stay in Chopta.",
      location: "Chopta, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(badrinath%20to%20chopta)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 7: Chopta to Haridwar",
      travel: "Drive back to Haridwar (215 km | 8-9 hours).",
      activities: [
        "1. Depart from Chopta and drive back to Haridwar via Rudraprayag.",
        "2. Sightseeing en route at any remaining scenic spots or temples.",
        "3. End of the Tour.",
      ],
      stay: "Drop at Haridwar for your onward journey.",
      location: "Haridwar, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(chopta%20to%20haridwar)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
  ];

  return (
    <div>
      {/* Home Section with Swiper Carousel */}
      <div className="heroSec">
        <div className="bgImg">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="bgImg"
          >
            <SwiperSlide>
              <img src={bg1} alt="Itinerary Background 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bg2} alt="Itinerary Background 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bg3} alt="Itinerary Background 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bg4} alt="Itinerary Background 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bg5} alt="Itinerary Background 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bg6} alt="Itinerary Background 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bg7} alt="Itinerary Background 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bg8} alt="Itinerary Background 8" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bg9} alt="Itinerary Background 9" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bg10} alt="Itinerary Background 10" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="sectionText">
          <h1 data-aos="fade-up">Itinerary and Rates of Do Dham</h1>
          <p data-aos="fade-up">
            Discover the world's best Spiritual Places with us!
          </p>
        </div>
      </div>

      {/* Centered Title */}
      <div className="centerText">
        <h1 className="secHeading">Do Dham Yatra</h1>
      </div>

      {/* Itinerary Section */}
      <div className="itinerary section container">
        <div className="secContainer grid">
          <div className="leftContent">
            {itineraryData.map((item, index) => (
              <div className="itineraryBlock" key={index}>
                <div className="day-section" data-aos="fade-up">
                  <h2 data-aos="fade-up">{item.day}</h2>
                  <p data-aos="fade-up">
                    <strong data-aos="fade-up">Travel:</strong> {item.travel}
                  </p>
                  {item.route && (
                    <p data-aos="fade-up">
                      <strong data-aos="fade-up">Route:</strong> {item.route}
                    </p>
                  )}
                  <p data-aos="fade-up">
                    <strong data-aos="fade-up">Stay:</strong> {item.stay}
                  </p>
                  {item.activities.length > 0 && (
                    <div data-aos="fade-up">
                      <strong className="strong" data-aos="fade-up">
                        Activities:
                      </strong>
                      <ul>
                        {item.activities.map((activity, i) => (
                          <li className="actiLi" key={i}>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* Google Map Location after every itinerary */}
                <div className="mapDiv">
                  <iframe
                    data-aos="fade-up"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    id="map"
                    src={item.url}
                    title={`Map of ${item.location}`}
                  >
                    <a href="https://www.gps.ie/">gps systems</a>
                  </iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pricing Section */}
      <div className="pricingSection" data-aos="fade-up">
        <h2 data-aos="fade-up">Price</h2>
        <p data-aos="fade-up">
          1. Adult on twin sharing - ₹22,500{" "}
          <i className="note">*Prices may vary</i>
        </p>
        <p data-aos="fade-up">
          2. Adult on triple sharing - ₹21,000{" "}
          <i className="note">*Prices may vary</i>
        </p>
        <p data-aos="fade-up">
          3. Adult on 4-bed sharing - ₹20,500
          <i className="note">*Prices may vary</i>
        </p>
        <p data-aos="fade-up">
          4. Adult in Single Room - ₹28,500{" "}
          <i className="note">*Prices may vary</i>
        </p>
        <p data-aos="fade-up">
          5. Child (3-11 Yrs) without bed - ₹16,000{" "}
          <i className="note">*Prices may vary</i>
        </p>
        <p data-aos="fade-up">
          6. Child (0-3 Yrs) Complimentary{" "}
          <i className="note">*Prices may vary</i>
        </p>
        <Link to="/contact">
          <a className="btn" href="/contact" data-aos="fade-up">
            Contact Us !
          </a>
        </Link>
      </div>
    </div>
  );
}

export default DooDham;
