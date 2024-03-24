import { useState } from "react";
import AddMedicalRecordsTableRow from "./AddMedicalRecordsTableRow";
import AddRecordModal from "./AddRecordModal";

export default function AddMedicalRecords() {
  const table1 = [1, 2, 3, 4, 5];
  const [open, setOpen] = useState(false);
  const controller = () => {
    setOpen(!open);
  };
  return (
    <div className="border p-6">
      <div className="flex justify-end pb-4 border-b">
        <button
          className="bg-[#0de0fe] px-4 py-2 rounded-full text-white font-bold"
          onClick={controller}
        >
          Add Medical Record
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-[1050px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Test Name
              </th>
              <th scope="col" className="px-6 py-3">
                Hospital Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Attachment
              </th>
              <th scope="col" className="px-6 py-3">
                Created by
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {table1.map((item) => (
              <AddMedicalRecordsTableRow key={item} />
            ))}
          </tbody>
        </table>
      </div>
      <AddRecordModal open={open} control={controller} />
    </div>
  );
}
