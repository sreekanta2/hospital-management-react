import { Outlet } from "react-router-dom";
import SideBarLinks from "../components/Doctor/SideBarLinks";
import { patientSidebarOptions } from "../constant";

export default function Patient() {
  return (
    <div className="  md:grid max-w-[1240px]  mt-24  md:grid-cols-3 mx-auto w-full relative  ">
      <SideBarLinks options={patientSidebarOptions} />
      <main className="col-span-2 overflow-hidden md:overflow-y-auto md:max-h-[900px]">
        <Outlet />
      </main>
    </div>
  );
}
