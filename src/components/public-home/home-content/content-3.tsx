'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function HomeContent3() {
  return (
    <div className="flex flex-col h-full space-y-5 bg-[#393939] w-full py-20 px-10 justify-center items-center">
      <h1 className="font-bold text-white text-6xl">LATEST NEWS</h1>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3.2}
        navigation
        loop={true}
        centeredSlides={true}
        className="w-full max-w-[80%]"
      >
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-xl h-[360px] shadow-md w-full"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: white;
        }
      `}</style>

      <button className="bg-[#8e8e8e] text-white py-2 px-6 hover:bg-[#686868]">
        ALL NEWS
      </button>
    </div>
  );
}
