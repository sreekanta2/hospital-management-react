import { Outlet } from "react-router-dom";
import Navlink from "../../../ui/NavLink";
import BankAccountDetails from "./BankAccountDetails";

export default function DoctorAccount() {
  return (
    <div className=" mx-6   border ">
      <BankAccountDetails />
      <ul className=" p-4">
        <Navlink to="/doctor/accounts/total-patient">Accounts</Navlink>
        <Navlink to="/doctor/accounts/refund-patient">
          Patient Refund Account
        </Navlink>
      </ul>
      <main className="border  m-4    overflow-x-scroll">
        <Outlet />
      </main>
    </div>
  );
}
