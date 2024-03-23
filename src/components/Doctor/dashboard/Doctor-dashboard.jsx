import { NavLink, Outlet } from "react-router-dom";
import DoctorPatientStatus from "../DoctorPatientStatus";

export default function Dashboard() {
  return (
    <div className="  mx-6">
      <DoctorPatientStatus />
      <h1 className="mt-8 text-xl font-semibold text-gray-700 mb-4">
        Patients Appointments
      </h1>
      <ul className=" p-4">
        <li className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-20 focus:bg-cyan-500">
          <NavLink
            to="/doctor/dashboard/upcoming-patient"
            className={({ isActive, isPending }) =>
              isActive
                ? " from-cyan-500 to-blue-500 relative px-5 py-2.5 transition-all ease-in duration-75 text-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 "
                : isPending
                ? "pending"
                : " relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            }
          >
            Upcoming
          </NavLink>
        </li>
        <li className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <NavLink
            to="/doctor/dashboard/today-patient"
            className={({ isActive, isPending }) =>
              isActive
                ? " from-cyan-500 to-blue-500 relative px-5 py-2.5 transition-all ease-in duration-75 text-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 "
                : isPending
                ? "pending"
                : " relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            }
          >
            Today
          </NavLink>
        </li>
      </ul>
      <main className="   px-4    overflow-x-scroll">
        <Outlet />
      </main>
    </div>
  );
}
