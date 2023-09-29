import React, { useEffect, useState } from "react";
import "./Slider.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";

const Slider = () => {

    const [slider, setSlider] = useState([])
    useEffect(() => {
        axios.get(`https://api.icd-academy.com/api/Slider`).then(resp => setSlider(resp.data))
    }, [])
    console.log(slider);
  return (
    <div className="slider-container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
       {
        slider && slider.map((e) => {
            return(
                <SwiperSlide>
                <img
                  src={`https://api.icd-academy.com/img/${e.imageName}`}
                  alt=""
                />
              </SwiperSlide>
            )
        })
       }
        
      </Swiper>
    </div>
  );
};

export default Slider;
