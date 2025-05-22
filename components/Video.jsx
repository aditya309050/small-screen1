import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const videoList = [
  { src: "3v.mp4", thumbnail: "video.png" },
  { src: "1v.mp4", thumbnail: "image.png" },
  { src: "4v.mp4", thumbnail: "lack.png" },
];

const Video = () => {
  return (
    <div className="py-10 max-w-7xl px-6 mx-auto relative mt-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={videoList.length > 3}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        modules={[Navigation]}
        className="w-full"
      >
        {videoList.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[260px] h-[460px] mx-auto bg-white rounded-[30px] shadow-lg overflow-hidden border-[4px] border-black transition-transform duration-300">
              <video
                className="w-full h-full object-cover"
                muted
                loop
                controls={false}
                poster={video.thumbnail}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
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
          @media (max-width: 640px) {
            .swiper-button-prev, .swiper-button-next {
              width: 40px;
              height: 40px;
              font-size: 20px;
              left: -40px;
              right: -40px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Video;
