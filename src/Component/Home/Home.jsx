import React, { useEffect, useRef } from "react";
import "./Home.css";
import { AiOutlineSwapRight } from "react-icons/ai";
import kedarnath from "../../Assets/kedarnath.jpg";
import hridwar from "../../Assets/hridwar.jpg";
import chardham from "../../Assets/chardham.jpg";
import badrinath from "../../Assets/badrinath.jpg";
import bg1 from "../../Assets/background/bg1.jpg";
import bg2 from "../../Assets/background/bg2.jpg";
import bg3 from "../../Assets/background/bg3.jpg";
import bg4 from "../../Assets/background/bg4.jpg";
import bg5 from "../../Assets/background/bg5.jpg";
import bg6 from "../../Assets/background/bg6.jpg";
import bg7 from "../../Assets/background/bg7.jpg";
import bg8 from "../../Assets/background/bg8.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <div className="Home">
      <div className="imgBg">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay]}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="imgBg"
        >
          <SwiperSlide>
            <img src={bg1}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg2}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg3}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg4}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg5}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg6}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg7}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg8}></img>
          </SwiperSlide>
          {/* <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div> */}
        </Swiper>
      </div>
      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams with us !</h1>
        <p data-aos="fade-up">
          Discover the world's most adverturose nature, life is so short for a
          trip.
        </p>
        <button className="btn flex" data-aos="fade-up">
          <a href="#destination">
            Get Started
            <AiOutlineSwapRight className="icon" />
          </a>
        </button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <a href="/">
              <img src={hridwar} alt="" />
            </a>
            <a href="/">
              <img src={kedarnath} alt="" />
            </a>
            <a href="/">
              <img src={chardham} alt="" />
            </a>
            <a href="/">
              <img src={badrinath} alt="" />
            </a>
            <a href="/">
              <img src={badrinath} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee-content">
          <marquee>
            Get 20% off on your first booking! Book now and enjoy the offer!
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Home;
