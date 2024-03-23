import { Link } from "react-router-dom";
import doctor from "../assets/doctor-07.jpg";
import pharmacyImage from "../assets/img-pharmacy1.jpg";
import labImage from "../assets/lab-image.jpg";
export default function Service() {
  return (
    <div className="w-full py-20 flex flex-col items-center gap-10 bg-[#f8f9fa]">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#272b41]">
        What are you looking for?
      </h1>
      <div className="flex flex-wrap flex-col md:flex-row gap-5 justify-center">
        <div className="bg-gray-700 group overflow-hidden cursor-pointer    relative w-[400px] md:w-[300px] md:h-auto">
          <img
            src={doctor}
            className=" duration-500 group-hover:scale-125 transition-transform group-hover:opacity-50"
            alt="background image"
          />
          <div className="absolute inset-0 flex gap-3 flex-col items-center justify-center text-white text-2xl text-bold">
            <h2>Visit a Doctor</h2>
            <button className="bg-[#0de0fe] py-2 px-5 text-xl text-bold rounded">
              Book Now
            </button>
          </div>
        </div>
        <div className="bg-gray-700 group overflow-hidden cursor-pointer   relative w-[400px] md:w-[300px] md:h-auto">
          <img
            src={labImage}
            width={400}
            height={200}
            className="w-full h-auto  duration-500 group-hover:scale-125 transition-transform group-hover:opacity-50"
            alt="background image"
          />
          <div className="absolute inset-0 flex gap-3 flex-col items-center justify-center text-white text-2xl text-bold">
            <h1>Find a Pharmacy</h1>
            <Link className="bg-[#0de0fe] py-2 px-5 text-xl text-bold rounded">
              Find Now
            </Link>
          </div>
        </div>
        <div className="bg-gray-700 group overflow-hidden  cursor-pointer    relative w-[400px] md:w-[300px] md:h-auto">
          <img
            src={pharmacyImage}
            width={400}
            height={200}
            className="  duration-500 group-hover:scale-125 transition-transform group-hover:opacity-50"
            alt="background image"
          />
          <div className="absolute inset-0 flex gap-3 flex-col items-center justify-center text-white text-2xl text-bold">
            <h2>Find a lab</h2>
            <button className="bg-[#0de0fe] py-2 px-5 text-xl text-bold rounded">
              Find Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
