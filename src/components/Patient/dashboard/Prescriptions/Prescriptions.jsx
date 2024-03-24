import PrescriptionTableRow from "./PrescriptionTableRow";

export default function Prescription() {
  const table1 = [1, 2, 3, 4, 5, 6, 8];
  return (
    <div className="relative  shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>{" "}
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Created
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {table1.map((item) => (
            <PrescriptionTableRow key={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
