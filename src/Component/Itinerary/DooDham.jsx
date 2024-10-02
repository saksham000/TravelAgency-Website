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

function DooDham() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const itineraryData = [
    {
      day: "Day 1: Haridwar to Barkot",
      travel:
        "Drive from Haridwar to Barkot (approximately 220 km, 7-8 hours).",
      route: "Haridwar – Rishikesh – Dehradun – Mussoorie – Barkot.",
      stay: "Overnight stay in Barkot.",
      activities: [
        "1. Enroute, visit Kempty Falls in Mussoorie.",
        "2. Enjoy the scenic beauty.",
      ],
      location: "Barkot, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=(haridwar%20to%20barkot)&t=&z=8&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 2: Barkot to Yamunotri and Back to Barkot",
      travel:
        "Drive from Barkot to Jankichatti/Phoolchatti (approximately 36 km), then trek 6 km to Yamunotri.",
      activities: [
        "1. Trek to Yamunotri, take a dip in the Yamuna River, and visit the Yamunotri Temple.",
        "2. Trek back to Jankichatti/Phoolchatti and drive back to Barkot.",
      ],
      stay: "Overnight stay in Barkot.",
      location: "Yamunotri, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(Barkot%20to%20Yamunotri)&t=&z=11&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 3: Barkot to Uttarkashi",
      travel:
        "Drive from Barkot to Uttarkashi (approximately 100 km, 4-5 hours).",
      route: "Barkot – Dharasu Band – Uttarkashi.",
      stay: "Overnight stay in Uttarkashi.",
      activities: [
        "1. Visit Vishwanath Temple in Uttarkashi.",
        "2. Stroll around the town and enjoy the serene surroundings.",
      ],
      location: "Uttarkashi, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(Barkot%20to%20Uttarkashi)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 4: Uttarkashi to Gangotri and Back to Uttarkashi",
      travel:
        "Drive from Uttarkashi to Gangotri (approximately 100 km, 3-4 hours).",
      activities: [
        "1. Visit the Gangotri Temple.",
        "2. Take a holy dip in the sacred Bhagirathi River.",
        "Explore nearby sites such as Pandava Gufa.",
      ],
      stay: "Overnight stay in Uttarkashi.",
      location: "Gangotri, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(Uttarkashi%20to%20Gangotri)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 5: Uttarkashi to Guptkashi",
      travel:
        "Drive from Uttarkashi to Guptkashi (approximately 220 km, 8-9 hours).",
      route: "Uttarkashi – Srinagar – Rudraprayag – Guptkashi.",
      stay: "Overnight stay in Guptkashi.",
      activities: [
        "1. Rest and prepare for the next day's journey to Kedarnath.",
      ],
      location: "Guptkashi, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(Uttarkashi%20to%20Guptkashi)&t=&z=9&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 6: Guptkashi to Kedarnath",
      travel:
        "Drive from Guptkashi to Gaurikund (approximately 30 km), then trek 16 km to Kedarnath.",
      activities: ["1. Trek to Kedarnath.", "2. Visit the Kedarnath Temple."],
      stay: "Overnight stay in Kedarnath (book in advance).",
      location: "Kedarnath, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(Guptkashi%20to%20Kedarnath)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 7: Kedarnath to Guptkashi",
      activities: [
        "1. Trek back from Kedarnath to Gaurikund.",
        "2. Drive from Gaurikund to Guptkashi.",
      ],
      stay: "Overnight stay in Guptkashi.",
      location: "Guptkashi, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(Kedarnath%20to%20Guptkashi)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 8: Guptkashi to Badrinath",
      travel:
        "Drive from Guptkashi to Badrinath (approximately 200 km, 7-8 hours).",
      route: "Guptkashi – Rudraprayag – Joshimath – Badrinath.",
      stay: "Overnight stay in Badrinath.",
      activities: [
        "1. Visit Badrinath Temple.",
        "2. Take a dip in the Tapt Kund (hot springs).",
      ],
      location: "Badrinath, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(Guptkashi%20to%20Badrinath)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 9: Badrinath to Rudraprayag",
      travel:
        "Drive from Badrinath to Rudraprayag (approximately 160 km, 5-6 hours).",
      route: "Badrinath – Joshimath – Chamoli – Karnaprayag – Rudraprayag.",
      stay: "Overnight stay in Rudraprayag.",
      activities: [
        "1. Visit the confluence of Alaknanda and Mandakini rivers.",
      ],
      location: "Rudraprayag, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(Badrinath%20to%20Rudraprayag)&t=&z=9&ie=UTF8&iwloc=B&output=embed",
    },
    {
      day: "Day 10: Rudraprayag to Haridwar",
      travel:
        "Drive from Rudraprayag to Haridwar (approximately 165 km, 5-6 hours).",
      route: "Rudraprayag – Srinagar – Rishikesh – Haridwar.",
      activities: [
        "1. Enroute, visit Devprayag (the confluence of Alaknanda and Bhagirathi rivers).",
      ],
      stay: "Arrival in Haridwar, conclude the Yatra.",
      location: "Haridwar, Uttarakashi, India",
      url: "https://maps.google.com/maps?width=520&height=400&hl=en&q=+(Rudraprayag%20to%20Haridwar)&t=&z=10&ie=UTF8&iwloc=B&output=embed",
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
          <h1 data-aos="fade-up">Itinerary and Rates of Doo Dham</h1>
          <p data-aos="fade-up">
            Discover the world's best Spiritual Places with us !
          </p>
        </div>
      </div>

      {/* Centered Title */}
      <div className="centerText">
        <h1 className="secHeading">Doo Dham Yatra</h1>
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
        <p data-aos="fade-up">1. Adult on twin sharing - ₹22,500</p>
        <p data-aos="fade-up">2. Adult on triple sharing - ₹21,000</p>
        <p data-aos="fade-up">3. Adult on 4-bed sharing - ₹20,500</p>
        <p data-aos="fade-up">4. Adult in Single Room - ₹28,500</p>
        <p data-aos="fade-up">5. Child (3-11 Yrs) without bed - ₹16,000</p>
        <p data-aos="fade-up">6. Child (0-3 Yrs) Complimentary</p>
        <p className="note">*Prices may vary</p>
      </div>
    </div>
  );
}

export default DooDham;
