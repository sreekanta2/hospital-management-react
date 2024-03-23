import { Pagination } from "swiper/modules";
import featureImage from "../assets/feature-06.jpg";
import image from "../assets/feature.png";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  const slides = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-white py-8 ">
      <div className="flex flex-col mx-8 md:flex-row gap-10 py-14 ">
        <div className="  w-full  md:w-[30.33%]  ">
          <img src={image} alt="background image" />
        </div>
        <div className=" w-full md:max-w-[900px]   flex flex-wrap justify-center items-center gap-10   overflow-hidden  ">
          <div className=" w-4/5 mx-auto text-justify">
            <h1 className="text-4xl md:text-3xl font-semibold ">
              Available Features in Our Clinic
            </h1>
            <h3 className="font-semibold  text-gray-400 mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h3>
          </div>
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
              800: {
                slidesPerView: 3,
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
                      src={featureImage}
                      alt="background image"
                      className="rounded-full"
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
    </div>
  );
}
