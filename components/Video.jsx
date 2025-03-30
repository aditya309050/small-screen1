import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const videoList = [
  { src: "/video1.mp4", thumbnail: "/thumb1.jpg" },
  { src: "/video2.mp4", thumbnail: "/thumb2.jpg" },
  { src: "/video3.mp4", thumbnail: "/thumb3.jpg" },
];

const Video = () => {
  return (
    <div className="py-10 max-w-5xl px-10 mx-auto mt-30">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="w-full"
      >
        {videoList.map((video, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`w-[280px] h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-black transition-transform duration-300 ${
                index === 1 ? "scale-110" : "scale-100"
              }`}
            >
              <video
                className="w-full h-full object-cover"
                controls
                poster={video.thumbnail}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Video;
