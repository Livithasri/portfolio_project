import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Pr1 from "../../img/pr1.png";
import Pr2 from "../../img/pr2.png";
import Pr3 from "../../img/pr3.png";
import Pr4 from "../../img/pr4.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Pr1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pr2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pr3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pr4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
