import { Outlet } from "react-router-dom";
import SideBarLinks from "../components/Doctor/SideBarLinks";
import { doctorSidebarOptions } from "../constant";

export default function Doctor() {
  return (
    <div className=" md:grid max-w-[1240px]  mt-24  md:grid-cols-3 mx-auto w-full relative  ">
      <SideBarLinks options={doctorSidebarOptions} />
      <main className="col-span-2 overflow-hidden md:overflow-y-auto md:max-h-[900px]">
        <Outlet />
      </main>
    </div>
  );
}
