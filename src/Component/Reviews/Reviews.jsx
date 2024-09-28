import React, { useEffect } from "react";
import "./Reviews.css";
import { AiFillStar } from "react-icons/ai";
import image1 from "../../Assets/image1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Reviews() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
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
                  <img src={image1} data-aos="fade-down" />
                </div>
                <div class="testimonialInfo">
                  <h5 data-aos="fade-up">Saksham Sharma</h5>
                  <small data-aos="fade-up">student</small>
                </div>
                <div class="testimonialBody">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt voluptatum eaque, sequi deleniti voluptate quidem minus
                    suscipit impedit cumque cupiditate laudantium maiores
                    tempore veniam ea dolore, vel ab velit repellat?
                  </p>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="testimonial swiper-slide">
                <div class="avatar">
                  <img src={image1} data-aos="fade-down" />
                </div>
                <div class="testimonialInfo">
                  <h5>Saksham Sharma</h5>
                  <small>student</small>
                </div>
                <div class="testimonialBody">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt voluptatum eaque, sequi deleniti voluptate quidem minus
                    suscipit impedit cumque cupiditate laudantium maiores
                    tempore veniam ea dolore, vel ab velit repellat?
                  </p>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="testimonial swiper-slide">
                <div class="avatar">
                  <img src={image1} data-aos="fade-down" />
                </div>
                <div class="testimonialInfo">
                  <h5>Saksham Sharma</h5>
                  <small>student</small>
                </div>
                <div class="testimonialBody">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt voluptatum eaque, sequi deleniti voluptate quidem minus
                    suscipit impedit cumque cupiditate laudantium maiores
                    tempore veniam ea dolore, vel ab velit repellat?
                  </p>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="testimonial swiper-slide">
                <div class="avatar">
                  <img src={image1} data-aos="fade-down" />
                </div>
                <div class="testimonialInfo">
                  <h5>Saksham Sharma</h5>
                  <small>student</small>
                </div>
                <div class="testimonialBody">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt voluptatum eaque, sequi deleniti voluptate quidem minus
                    suscipit impedit cumque cupiditate laudantium maiores
                    tempore veniam ea dolore, vel ab velit repellat?
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
