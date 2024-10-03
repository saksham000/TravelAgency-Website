import React, { useEffect } from "react";
import "./Popular-Places.css";
import bg1 from "../../../Assets/popularplaces/Kedarnath/1.jpg";
import bg2 from "../../../Assets/popularplaces/Kedarnath/2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
function Kedarnath() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="heroSec">
        <div className="Bg">
          <img src={bg1} alt="Background" />
        </div>
        <div className="secText">
          <h1 data-aos="fade-up">Kedarnath Dham !</h1>
          <p data-aos="fade-up">
            A Sacred Himalayan Pilgrimage to the Ancient Lord Shiva Temple.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="centerText ">
          <h1 data-aos="fade-up">Kedarnath Dham</h1>
        </div>
        <div className="portifolio container">
          <div className="secContainer">
            <div className="image">
              <img data-aos="fade-down" src={bg2} alt="Image" />
            </div>
            <div className="textPara">
              <p data-aos="fade-up">
                Kedarnath Dham, one of the holiest pilgrimage sites in India, is
                located in the Rudraprayag district of Uttarakhand, nestled
                amidst the Garhwal Himalayas. This sacred site is dedicated to
                Lord Shiva and is part of the revered Char Dham Yatra. Known for
                its ancient temple, spiritual ambiance, and dramatic natural
                surroundings, Kedarnath attracts thousands of devotees every
                year who seek divine blessings and a connection with the
                almighty in this remote Himalayan setting.
              </p>
              <p data-aos="fade-up">
                Kedarnath has a profound connection with Hindu mythology. It is
                believed that after the Mahabharata war, the Pandavas sought to
                atone for their sins by seeking the blessings of Lord Shiva.
                However, Shiva, not willing to meet them, transformed into a
                bull and fled to Kedarnath. When the Pandavas pursued him, Shiva
                dived into the ground, leaving his hump above the surface. This
                hump is worshipped in the form of a Shivling in the Kedarnath
                temple. This sacred story adds to the spiritual importance of
                the site, making it a prominent pilgrimage for those seeking
                redemption and divine grace.
              </p>
              <p data-aos="fade-up">
                The Kedarnath Temple, an ancient stone structure that dates back
                to the 8th century, was built by the great philosopher Adi
                Shankaracharya. This temple, dedicated to Lord Shiva, is one of
                the 12 Jyotirlingas, making it an essential site for Shiva
                devotees. The temple's architecture is simple yet majestic, with
                large stone slabs interlocked to withstand the region’s harsh
                weather conditions. Despite the devastating floods of 2013, the
                temple miraculously survived, further solidifying its
                significance. Pilgrims undertake a 16 km trek from Gaurikund to
                reach the temple, and many consider this challenging journey a
                part of their spiritual penance.
              </p>
              <p data-aos="fade-up">
                Kedarnath is also a destination for trekkers and adventure
                seekers. The trek to the temple is a popular route for both
                pilgrims and trekking enthusiasts. The path, although demanding
                due to the high altitude and rugged terrain, rewards visitors
                with stunning views of the Himalayan landscape. Beyond
                Kedarnath, trekkers can explore Vasuki Tal, a high-altitude
                glacial lake located at a distance of about 8 km from the
                temple. This trek offers a closer glimpse of the snow-clad peaks
                and the untouched beauty of the Himalayas, making it a must-do
                for adventure lovers.
              </p>
              <p data-aos="fade-up">
                Situated at an altitude of 3,583 meters (11,755 feet) above sea
                level, Kedarnath is surrounded by towering snow-capped peaks,
                including the majestic Kedarnath range. The trek to the temple
                offers breathtaking views of the Himalayan landscape, with lush
                green meadows, flowing rivers, and serene valleys. The Mandakini
                River flows alongside the path, adding to the beauty of the
                journey. The awe-inspiring natural setting provides a peaceful
                and spiritual atmosphere, making Kedarnath a place of
                tranquility and divine connection amid nature’s grandeur.
              </p>
              <p data-aos="fade-up">
                The ideal time to visit Kedarnath is between May and October,
                during which the temple is open for pilgrimage. The weather
                during this period is cool and pleasant, with temperatures
                ranging between 5°C and 15°C, making the trek and visit
                comfortable. In winter, the temple is closed due to heavy
                snowfall, and the idol of Lord Shiva is moved to Ukhimath, where
                it is worshipped during the winter months. Visitors are advised
                to carry warm clothing, stay hydrated, and acclimatize properly,
                as the high-altitude trek can be physically demanding. Pilgrims
                can opt for pony rides or helicopter services for easier access
                to the temple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kedarnath;
