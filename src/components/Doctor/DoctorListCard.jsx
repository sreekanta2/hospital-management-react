import { Link } from "react-router-dom";
import image from "../../assets/doctor-thumb-02.jpg";
import StarRating from "../../ui/StarRating";
import LightBox from "../Lightbox";
export default function DoctorListCard({ indicator }) {
  return (
    <div className="border rounded">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex  gap-8 ">
          <div className="w-36 h-36">
            <img src={image} alt="doctor profile" />
          </div>
          <div className="flex  flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl text-gray-700  font-semibold">
                Dr. Darren Elder
              </h1>
              <p className="text-sm text-gray-600">
                BDS, MDS - Oral & Maxillofacial Surgery
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 ">
                <img src={image} alt="dentist image" width={30} height={30} />
                <span className="text-blue-400">Dentist</span>
              </div>
              <StarRating rating={5} />
              <p className="text-sm text-gray-500">
                <span>icon</span>
                <span> Network, USA - Get Directions</span>
              </p>
            </div>
            <div className="flex ">
              {/* <Image src={}/> */}
              <LightBox />
            </div>
            <div className="flex gap-4 text-sm">
              <span className="py-2 px-4 border text-gray-600 rounded-md ">
                Dental Fillings
              </span>
              <span className="py-2 px-4 border text-gray-600 rounded-md ">
                Teeth Whitneing
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 text-sm text-gray-600 pb-4">
            <p> 99% </p>
            <p>35 Feedback Newyork</p>
            <p> Newyork, USA</p>
            <p>$100 per hour</p>
          </div>
          {!indicator && (
            <div className="flex gap-2 py-4 text-gray-600 ">
              <button className="border p-2 rounded transition delay-200  hover:bg-red-400 hover:text-white">
                icon
              </button>{" "}
              <button className="border p-2 rounded transition delay-200  hover:bg-red-400 hover:text-white">
                icon
              </button>{" "}
              <button className="border p-2 rounded transition delay-200  hover:bg-red-400 hover:text-white">
                icon
              </button>{" "}
              <button className="border p-2 rounded transition delay-200  hover:bg-red-400 hover:text-white">
                icon
              </button>
            </div>
          )}
          <ul className=" flex flex-col gap-4  ">
            {indicator && (
              <Link
                to="/doctor/1/overview"
                className="relative flex px-5 py-2.5 rounded-md items-center justify-center overflow-hidden bg-white  text-gray-700 border-2 border-[#1aa2e1]   transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#1aa2e1] before:text-blue-600 hover:text-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-20">View Profile</span>
              </Link>
            )}
            <Link
              to="/doctor/1/overview"
              className="relative flex px-5 py-2.5 rounded-md items-center justify-center overflow-hidden bg-[#1aa2e1] text-white"
            >
              <span className="relative z-20">Booking</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
