import { NavLink, Outlet, useParams } from "react-router-dom";
import DoctorListCard from "../DoctorListCard";

export default function SingleDoctor() {
  const { doctorId } = useParams();
  return (
    <div className="max-w-[1040px] px-6 mx-auto mt-24 relative">
      <DoctorListCard />
      <div className="border mt-10  ">
        <ul className=" border-b-2 flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between p-6  font-bold text-gray-700">
          <li className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-20 focus:bg-cyan-500">
            <NavLink
              to={`/doctor/${doctorId}/overview`}
              className={({ isActive, isPending }) =>
                isActive
                  ? " from-cyan-500 to-blue-500 relative px-5 py-2.5 transition-all ease-in duration-75 text-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 "
                  : isPending
                  ? "pending"
                  : " relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              }
            >
              Overview
            </NavLink>
          </li>
          <li className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-20 focus:bg-cyan-500">
            <NavLink
              to={`/doctor/${doctorId}/location`}
              className={({ isActive, isPending }) =>
                isActive
                  ? " from-cyan-500 to-blue-500 relative px-5 py-2.5 transition-all ease-in duration-75 text-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 "
                  : isPending
                  ? "pending"
                  : " relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              }
            >
              Location
            </NavLink>
          </li>

          <li className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-20 focus:bg-cyan-500">
            <NavLink
              to={`/doctor/${doctorId}/review`}
              className={({ isActive, isPending }) =>
                isActive
                  ? " from-cyan-500 to-blue-500 relative px-5 py-2.5 transition-all ease-in duration-75 text-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 "
                  : isPending
                  ? "pending"
                  : " relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              }
            >
              Review
            </NavLink>
          </li>
          <li className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-20 focus:bg-cyan-500">
            <NavLink
              to={`/doctor/${doctorId}/business-hour`}
              className={({ isActive, isPending }) =>
                isActive
                  ? " from-cyan-500 to-blue-500 relative px-5 py-2.5 transition-all ease-in duration-75 text-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 "
                  : isPending
                  ? "pending"
                  : " relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              }
            >
              Business Hour
            </NavLink>
          </li>
        </ul>

        <main className="px-6 mt-2">
          <Outlet data="hello" />
        </main>
      </div>
    </div>
  );
}
