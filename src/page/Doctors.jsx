import DoctorListCard from "../components/Doctor/DoctorListCard";
import Map from "../components/Doctor/Map/Map";
import Button from "../ui/Button";
import SelectInput from "../ui/SelectInput";

export default function Doctors() {
  const doctorFilterOptions = [
    { value: "sort by", label: "sort by" },
    { value: "Popular", label: "popular" },
    { value: "latest", label: "latest" },
    { value: "free", label: "free" },
  ];
  return (
    <div className=" relative  grid grid-cols-1 lg:grid-cols-7 gap-4 mx-10  ">
      <div className=" px-4 col-span-4     ">
        <div className="grid grid-cols-1 items-center py-4 lg:grid-cols-2">
          <h1>2024 doctor founds</h1>
          <div className="flex items-center   gap-4  ">
            <SelectInput id="doctors" options={doctorFilterOptions} />
            <Button className="py-2 px-4 bg-cyan-400 text-white rounded-md ">
              Filter
            </Button>
          </div>
        </div>

        <div className=" flex flex-col gap-4  h-[600px]  overflow-y-auto ">
          <DoctorListCard indicator />
          <DoctorListCard indicator />
          <DoctorListCard indicator />
          <DoctorListCard indicator />
          <div className="py-4 flex justify-center">
            <button className="py-2 px-4 bg-green-500 text-white rounded-md">
              Load more
            </button>
          </div>
        </div>
      </div>
      <div className="  relative col-span-3 ">
        <Map />
      </div>
    </div>
  );
}
