import { Outlet } from "react-router-dom";
import ScheduleNavbar from "./ScheduleNavbar";

export default function Schedule() {
  return (
    <div className="mx-6 pb-8   relative border rounded-md ">
      <ScheduleNavbar />
      <main className="px-6">
        <Outlet />
      </main>
    </div>
  );
}
