import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const imageList = [
  "/4.png",
  "/2.png",
  "/1.webp",
  "/3.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
  "/11.png",
  "/12.png",
  "/13.png",
  "/14.png",
];

const Photos = () => {
  return (
    <div className="py-8 w-full px-8 sm:px-6 md:px-10 lg:px-16">
      <Swiper
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop={imageList.length > 3}
        autoplay={
          imageList.length > 3
            ? {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }
            : false
        }
        speed={5000}
        modules={[Autoplay]}
        className="w-full"
      >
        {imageList.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-full h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "mt-6 sm:mt-8" : "mb-6 sm:mb-8"
              }`}
            >
              <img
                src={src}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Photos;
