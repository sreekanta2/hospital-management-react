import hardImage from "../assets/specialities-01.png";

import "swiper/css";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Specialize() {
  const slides = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex flex-col items-center px-3">
      <div className="flex flex-col items-center  leading-4 py-10">
        <h1 className="text-2xl md:text-4xl font-bold ">
          Clinic and Specialties
        </h1>
        <p className=" text-sm  pt-4 font-semibold text-gray-400      ">
          Discover the best doctors, clinic & hospital the city nearest to you.
        </p>
      </div>
      <div className=" w-full md:max-w-[900px]   flex flex-wrap justify-center items-center gap-10   overflow-hidden  ">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((item) => (
            <SwiperSlide key={item} className="py-10">
              <div className="flex flex-col items-center gap-5">
                <div className="bg-white  rounded-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]    cursor-pointer   w-[150px] h-[150px] flex items-center justify-center">
                  <img
                    src={hardImage}
                    width={60}
                    height={60}
                    className="relative z-10"
                    alt="background image"
                  />
                </div>
                <div className="text-xl text-semibold text-gray-500">
                  Cardiology
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
