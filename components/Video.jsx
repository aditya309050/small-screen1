import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const videoList = [
  { src: "/videos/video1.mp4", thumbnail: "/videos/thumb1.jpg" },
  { src: "/videos/video2.mp4", thumbnail: "/videos/thumb2.jpg" },
  { src: "/videos/video3.mp4", thumbnail: "/videos/thumb3.jpg" },
];

const Video = () => {
  return (
    <div className="py-10 max-w-20xl px-10 mx-auto relative mt-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="w-full"
      >
        {videoList.map((video, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`relative w-[260px] h-[460px] bg-white rounded-[30px] shadow-lg overflow-hidden border-[4px] border-black transition-transform duration-300 ${
                index === 1 ? "scale-110 w-[300px] h-[500px]" : ""
              }`}
            >
              <video
                className="w-full h-full object-cover"
                controls
                poster={video.thumbnail}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Styling */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #ff6600;
          font-size: 24px;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
        }
        .swiper-button-prev {
          left: -60px;
        }
        .swiper-button-next {
          right: -60px;
        }
      `}</style>
    </div>
  );
};

export default Video;
