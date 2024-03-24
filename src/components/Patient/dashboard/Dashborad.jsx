import { Outlet } from "react-router-dom";
import { patientGraphData } from "../../../constant";
import Navlink from "../../../ui/NavLink";
import DashboardStatus from "./DashboardStatus";
import PatientGraph from "./PatientGraph";

export default function Dashborad() {
  const heart = [1, 2, 3, 4];
  return (
    <div className="max-w-[1280px] mx-auto   p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {heart.map((item) => (
          <DashboardStatus key={item} />
        ))}
      </div>
      <div className="border rounded-md  mt-8">
        <h1 className="py-4 text-xl border-b font-bold text-gray-700 ml-4 ">
          Graph Status
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4  p-4">
          {patientGraphData.map((item) => (
            <PatientGraph key={item.title} item={item} />
          ))}
        </div>
      </div>
      <ul className=" p-4 flex justify-between">
        <Navlink to="/patient/dashboard/appointment">Appointment</Navlink>
        <Navlink to="/patient/dashboard/prescription">Prescription</Navlink>
        <Navlink to="/patient/dashboard/medical-records">
          Medical Records
        </Navlink>
        <Navlink to="/patient/dashboard/billing">Billing</Navlink>
      </ul>
      <main className=" px-4 overflow-x-scroll">
        <Outlet />
      </main>
    </div>
  );
}
