import { Link } from "react-router-dom";
import hardImage from "../../../assets/doctor-thumb-02.jpg";
export default function PatientCard() {
  return (
    <div className="border rounded-md bg-white  ">
      <div className="p-6 flex flex-col items-center justify-center  ">
        <div className="rounded-full w-24  overflow-hidden    ring-gray-100">
          <img src={hardImage} alt="background image" />
        </div>
        <div className="text-gray-700 text-center flex flex-col gap-1 py-2">
          <Link to="/patient-profile/appointment" className="font-semibold ">
            Richard Wilson
          </Link>
          <p>
            <span className="font-bold text-sm">Patient ID:</span>
            <span>P006</span>
          </p>
          <p className="text-sm"> Alabama, USA</p>
        </div>
      </div>
      <div className="border-t py-4 mx-4 text-sm flex flex-col gap-4">
        <div className="flex justify-between  ">
          <div className="font-semibold">Phone</div>
          <div>+88 01737813575</div>
        </div>
        <div className="flex justify-between  ">
          <div className="font-semibold">Age</div>
          <div>35</div>
        </div>
        <div className="flex justify-between  ">
          <div className="font-semibold">Blood Group</div>
          <div>A+</div>
        </div>
      </div>
    </div>
  );
}
