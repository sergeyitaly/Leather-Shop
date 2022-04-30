import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

import "../scss/slider.scss";

import SwiperCore, {
  FreeMode,Navigation,Thumbs,Pagination
} from 'swiper';

SwiperCore.use([FreeMode,Navigation,Thumbs,Pagination]);

function ProductSlider(props) {
  
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  
  return (
    <>
        <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff', borderRadius: "10px"}} slidesPerView={1} spaceBetween={10} loop={true} pagination={{"clickable":true}} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
            <SwiperSlide>
                <img src={props.image} alt="slide 1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={props.image2} alt="slide 2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={props.image3} alt="slide 3"/>
            </SwiperSlide>
        </Swiper>
        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
            <SwiperSlide>
                <img src={props.image} alt="slide 1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={props.image2} alt="slide 2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={props.image3} alt="slide 3"/>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default ProductSlider