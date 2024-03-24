import { Outlet } from "react-router-dom";
import Navlink from "../../../ui/NavLink";
import DoctorPatientStatus from "../DoctorPatientStatus";

export default function Dashboard() {
  return (
    <div className="  mx-6">
      <DoctorPatientStatus />
      <h1 className="mt-8 text-xl font-semibold text-gray-700 mb-4">
        Patients Appointments
      </h1>
      <ul className=" p-4">
        <Navlink to="/doctor/dashboard/upcoming-patient">Upcoming</Navlink>
        <Navlink to="/doctor/dashboard/today-patient">Today</Navlink>
      </ul>
      <main className="   px-4    overflow-x-scroll">
        <Outlet />
      </main>
    </div>
  );
}
