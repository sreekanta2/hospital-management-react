import { useState } from "react";
import PatientProfileModal from "../../Modal/PatientProfileModal";
import Table from "../../Table";

export default function UpcomingPatient() {
  const [open, setOpen] = useState(false);
  const control = () => {
    setOpen(!open);
  };
  const table = [1, 2, 3, 4, 5, 6, 8];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[1050px]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Patients Name
            </th>
            <th scope="col" className="px-6 py-3">
              Appt Date
            </th>
            <th scope="col" className="px-6 py-3">
              Purpose
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Paid Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) => (
            <Table key={index} control={control} />
          ))}
        </tbody>
      </table>
      <PatientProfileModal open={open} control={control} />
    </div>
  );
}
