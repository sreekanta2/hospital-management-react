import icon1 from "../../assets/icon-01.png";
import icon2 from "../../assets/icon-02.png";
import icon3 from "../../assets/icon-03.png";

export default function DoctorPatientStatus() {
  return (
    <div className="w-full px-6 border">
      <div className="grid grid-cols-1 justify-center lg:grid-cols-3 p-6 gap-4 ">
        <div className="flex  justify-center gap-4     ">
          <div className="w-20 h-20 rounded-full border-8 flex items-center justify-center">
            <img src={icon1} width={30} height={30} alt="icon" />
          </div>
          <div className=" flex flex-col">
            <h2 className="text-gray-600">Total patients</h2>
            <h2 className=" text-xl text-bold">1500</h2>
            <h2 className="text-sm text-gray-400">Till Today</h2>
          </div>
        </div>
        <div className="flex justify-center gap-4   ">
          <div className="w-20 h-20 rounded-full border-8 flex items-center justify-center">
            <img src={icon2} width={30} height={30} alt="icon" />
          </div>
          <div className=" flex flex-col">
            <h2 className="text-gray-600">Total patients</h2>
            <h2 className=" text-xl text-bold">1500</h2>
            <h2 className="text-sm text-gray-400">Till Today</h2>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div className="w-20 h-20 rounded-full border-8 flex items-center justify-center">
            <img src={icon3} width={30} height={30} alt="icon" />
          </div>
          <div className=" flex flex-col">
            <h2 className="text-gray-600">Total patients</h2>
            <h2 className=" text-xl text-bold">1500</h2>
            <h2 className="text-sm text-gray-400">Till Today</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
