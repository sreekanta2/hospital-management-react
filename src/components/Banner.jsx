import image from "../assets/search-bg.png";
export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-between bg-white  ">
      <div className="relative w-full  bg-white    h-screen ">
        <img
          src={image}
          className="w-full absolute md:bottom-14  hidden lg:block  "
          alt="background image"
        />
        <div className=" absolute  top-32    px-4 md:px-0 w-full flex flex-col items-center   ">
          <div className="flex flex-col items-center  leading-4">
            <h1 className="text-2xl md:text-4xl font-bold ">
              Search Doctor, Make an Appointment
            </h1>
            <p className=" text-sm  pt-4 font-semibold text-gray-400 w-[400px]  lg:w-[100%]  ">
              Discover the best doctors, clinic & hospital the city nearest to
              you.
            </p>
          </div>
          <div className="flex  flex-col lg:flex-row gap-4 md:gap-10  h-12 mt-8">
            <div className="w-[400px] md:max-w-72  ">
              <div className=" flex items-center gap-2 p-2 border rounded ">
                <i className="ri-map-pin-line font-semibold text-gray-400   "></i>
                <input
                  type="text"
                  placeholder="Search location"
                  className="  outline-none  "
                />
              </div>
              <p className="text-[13px] mt-1 text-gray-500">
                Based on your Location{" "}
              </p>
            </div>
            <div className="w-[400px] ">
              <div className=" flex items-center gap-2 p-2 border rounded ">
                <i className="ri-map-pin-line font-semibold text-gray-400   "></i>
                <input
                  type="text"
                  placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                  className="  outline-none w-full text-sm "
                />
              </div>
              <p className="text-[13px] mt-1 text-gray-500">
                Ex : Dental or Sugar Check up etc
              </p>
            </div>
            <button className="md:w-full lg:w-12 h-10 rounded  bg-[#09e5ab]">
              <i className="ri-search-line text-gray-100 text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
