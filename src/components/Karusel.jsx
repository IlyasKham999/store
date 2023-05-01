import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import icon4 from "../img/444.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import classes from "../styles/Karusel.module.css";

const Karusel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3.5}
      navigation
      Mousewheel
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={icon4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={icon4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={icon4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={icon4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={icon4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={icon4} alt="" />
      </SwiperSlide>
      <div className={classes.dot}>...</div>
    </Swiper>
  );
};

export default Karusel;
