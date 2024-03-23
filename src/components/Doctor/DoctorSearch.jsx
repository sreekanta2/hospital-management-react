import { experience, speciality } from "../../constant";
import Button from "../../ui/Button";
import { Faq } from "../Faq";
import Pagination from "../Pagination";
import DoctorGridCard from "./DoctorGridCard";

export default function DoctorSearch() {
  const genderOptions = ["Male", "Female"];
  const avalable = [
    "Available Today",
    "Available Tomorrow",
    "Available in Next 7 Days",
    "Available in Next 3 Days",
  ];
  return (
    <div className=" max-w-[1280px] mx-auto mt-24 ">
      <div className="grid mx-6  grid-cols-1 lg:grid-cols-4 gap-4 ">
        <div className="col-span-1  ">
          <div className="flex   my-2">
            <div className="w-full   ">
              <h2 className="text-xl font-semibold text-vnet-blue mb-2 h-14 p-4 bg-gray-100">
                Filter
              </h2>
              <Faq options={genderOptions} title="Gender" />
              <Faq options={avalable} title="Available" />
              <Faq type="range" options={[1]} title="Consultation Fee" />
              <Faq options={speciality} title=" Specialty" />
              <Faq options={experience} title=" Experience" />

              <Button className="w-full bg-green-500 py-3 rounded-md text-white font-bold text-xl">
                Apply
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className=" relative   px-4 flex flex-col items-center   ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DoctorGridCard />
              <DoctorGridCard />
              <DoctorGridCard />
              <DoctorGridCard />
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
