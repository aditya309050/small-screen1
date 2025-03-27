import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const imageList = [
  "/C:/Users/rahul/Downloads/small-scale photo\\'s/4x5-charli-damelio.avif",
  "/https://media-s3-us-east-1.ceros.com/forbes/images/2022/08/25/5024ce934ae8eb1628b952bad3cd1da8/4x5-charli-damelio.png?imageOpt=1&fit=bounds&width=1082",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
   "/images/photo5.jpg",
   "/images/photo5.jpg",
   "/images/photo5.jpg",
   "/images/photo5.jpg",
   "/images/photo5.jpg",
   "/images/photo5.jpg",
   "/images/photo5.jpg",
   "/images/photo5.jpg",
   "/images/photo5.jpg",


];

const Photos = () => {
  return (
    <div className="py-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full max-w-6xl"
      >
        {imageList.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-60 h-80 rounded-xl overflow-hidden shadow-lg">
              <img src={src} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Photos;
