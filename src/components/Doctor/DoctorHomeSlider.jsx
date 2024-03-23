import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import DoctorGridCard from "./DoctorGridCard";

export default function HomeDoctorSlider() {
  const card = [1, 2, 3, 4, 5, 6, 9, 8];
  return (
    <div className="bg-[#f8f9fa] py-14 ">
      <div className="flex flex-col mx-8 md:flex-row gap-10 py-14 ">
        <div className="  w-full  md:w-[30.33%]  ">
          <div className="  text-justify">
            <h1 className="text-2xl md:text-3xl font-semibold ">
              Book Our Doctor
            </h1>
            <h3 className="font-semibold  text-gray-400 mt-4">
              Lorem Ipsum is simply dummy text
            </h3>
            <p className="font-semibold mt-6 text-sm text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              commodi dicta quis quasi explicabo blanditiis! Incidunt adipisci
              dolorum nam explicabo, natus atque et officia autem officiis
              quibusdam, quas, libero tenetur!
            </p>
            <p className="font-semibold mt-6 text-gray-400 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              commodi dicta quis quasi explicabo blanditiis! Incidunt adipisci
              dolorum nam explicabo, natus atque et officia autem officiis
              quibusdam, quas, libero tenetur!
            </p>
            <button className="bg-[#0de0fe] py-2 px-5   text-bold rounded mt-10 text-white">
              Read More...
            </button>
          </div>
        </div>
        <div className="  md:w-[66%]    ">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              740: {
                slidesPerView: 2,
              },
              1040: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            {card.map((item) => (
              <SwiperSlide key={item} className=" p-4 ">
                <DoctorGridCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
