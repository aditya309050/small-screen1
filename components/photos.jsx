import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

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
    <div className="py-6 w-full px-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true} // Infinite looping
        autoplay={{
          delay: 0, // No delay for continuous motion
          disableOnInteraction: false, // Keeps autoplay active even after user interaction
          pauseOnMouseEnter: false, // Prevents stopping on hover
        }}
        speed={5000} // Slow, smooth, and consistent scrolling
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {imageList.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-full h-120 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "mt-8" : "mb-8"
              }`}
            >
              <img src={src} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Photos;
