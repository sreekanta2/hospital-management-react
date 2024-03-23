import image from "../../assets/doctor-07.jpg";
import successImg from "../../assets/success.png";
import StarRating from "../../ui/StarRating";

import { Link } from "react-router-dom";

export default function DoctorGridCard() {
  return (
    <div className="  bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
      <div className="p-4">
        <div className="overflow-hidden">
          <img
            src={image}
            className="   cursor-pointer duration-500 hover:scale-125 transition-transform group-hover:opacity-50"
            alt="background image"
          />
        </div>
        <div>
          <h1 className="flex gap-4 mt-4">
            <span className="font-semibold ">Rubey Perrin</span>
            <img src={successImg} width={15} height={15} alt="success image" />
          </h1>
          <p className="text-[12px] text-gray-500 mt-3">
            BDS,MDS - Oral & Maxillofacial Surgery
          </p>
          <div>
            <StarRating rating={3} />
          </div>
          <p className="flex  gap-4 text-sm mt-4">
            <span>
              <i className="ri-map-pin-fill text-gray-400"></i>
            </span>
            <span>Florida,USA</span>
          </p>
          <p className="flex  gap-4 text-sm">
            <span>
              <i className="ri-time-fill text-gray-400"></i>
            </span>
            <span>Available obn fir,22 Mar</span>
          </p>
          <p className="flex  gap-4 text-sm">
            <span>
              <i className="ri-money-dollar-box-line text-gray-400"></i>
            </span>
            <span>$300-500</span>
          </p>
          <div className="grid grid-cols-2 gap-2 my-2">
            <Link
              to="/doctor/1/overview"
              className="relative flex px-2 py-2   rounded-md items-center justify-center overflow-hidden bg-white  text-gray-700 border-2 border-[#1aa2e1]   transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#1aa2e1] before:text-blue-600 hover:text-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
            >
              <span className="relative z-20">View Profile</span>
            </Link>

            <Link
              to="/doctor/1/overview"
              className="relative flex px-2 py-2   rounded-md items-center justify-center overflow-hidden bg-[#1aa2e1] text-white"
            >
              <span className="relative z-20">Booking</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
