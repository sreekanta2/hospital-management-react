import { Outlet } from "react-router-dom";
import Navlink from "../../../ui/NavLink";
import BankAccountDetails from "../../Doctor/Account/BankAccountDetails";

export default function PatientAccount() {
  return (
    <div className=" mx-6   border ">
      <BankAccountDetails />
      <ul className=" p-4">
        <Navlink to="/patient/account/booking-doctor">Booking Doctors</Navlink>
        <Navlink to="/patient/account/request-doctor">Request Doctor</Navlink>
      </ul>
      <main className="border  m-4    overflow-x-scroll">
        <Outlet />
      </main>
    </div>
  );
}
