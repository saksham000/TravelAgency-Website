import React, { useEffect } from "react";
import "./Reviews.css";
import user1 from "../../Assets/testimonial/1.jpg";
import user2 from "../../Assets/testimonial/2.jpg";
import user3 from "../../Assets/testimonial/3.jpg";
import user4 from "../../Assets/testimonial/4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Reviews() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="reviews"
      className="review testimonialsContainer section container"
    >
      <div className="secContainer">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Real Travel History from our beloved Clients
          </h3>
        </div>
        <div className="reviews-cards" data-aos="fade-down">
          <Swiper
            modules={[Autoplay]} // Add the Autoplay module
            // modules={{Autoplay}}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides
            autoplay={{
              // Set the autoplay property
              delay: 2500, // Delay between slides in milliseconds
              disableOnInteraction: false, // Keep autoplaying even after user interaction
            }}
          >
            <SwiperSlide>
              <article class="testimonial swiper-slide">
                <div class="avatar">
                  <img src={user4} alt="image" data-aos="fade-down" />
                </div>
                <div class="testimonialInfo">
                  <h5 data-aos="fade-up">Yash</h5>
                  <small data-aos="fade-up">Kanpur</small>
                </div>
                <div class="testimonialBody">
                  <p>
                    I recently completed the Char Dham Yatra with this travel
                    agency, and it was an incredible experience! From the scenic
                    drive to Barkot and the stunning Kempty Falls to the
                    spiritual trek to Yamunotri, every moment was unforgettable.
                  </p>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="testimonial swiper-slide">
                <div class="avatar">
                  <img src={user3} alt="image" data-aos="fade-down" />
                </div>
                <div class="testimonialInfo">
                  <h5>Ritish Rohela</h5>
                  <small>Haridwar</small>
                </div>
                <div class="testimonialBody">
                  <p>
                    I just returned from the Char Dham Yatra organized by this
                    travel agency, and it was truly a life-changing experience!
                    Every aspect of the trip was well-organized, from the
                    breathtaking views during our drive to Barkot to the
                    beautiful temples we visited.
                  </p>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="testimonial swiper-slide">
                <div class="avatar">
                  <img src={user2} alt="image" data-aos="fade-down" />
                </div>
                <div class="testimonialInfo">
                  <h5>Aviral</h5>
                  <small>Gujarat </small>
                </div>
                <div class="testimonialBody">
                  <p>
                    I recently completed the Do Dham Yatra with this travel
                    agency, and it was an unforgettable spiritual journey! The
                    itinerary was perfectly planned, allowing us to explore
                    beautiful locations like Haridwar, Guptkashi, Kedarnath, and
                    Badrinath.
                  </p>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="testimonial swiper-slide">
                <div class="avatar">
                  <img src={user1} alt="image" data-aos="fade-down" />
                </div>
                <div class="testimonialInfo">
                  <h5>Aakash</h5>
                  <small>Ujjain</small>
                </div>
                <div class="testimonialBody">
                  <p>
                    I just finished the Do Dham Yatra organized by this
                    fantastic travel agency, and it was truly a remarkable
                    experience! From our arrival in Haridwar to our visits to
                    Kedarnath and Badrinath, every moment was filled with
                    spiritual significance and breathtaking beauty.
                  </p>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
