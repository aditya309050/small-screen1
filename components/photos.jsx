import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const imageList = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/15.png",
  "/5.png",
  "/6.png",
  "/lack.png",
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
              className={`w-full h-[22rem] sm:h-[34rem]  md:h-[30rem] lg:h-[34rem] xl:h-[40rem] rounded-xl overflow-hidden shadow-lg ${
                index % 2 === 0 ? "mt-8 sm:mt-8" : "mb-4 sm:mb-8 "
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
