import icon from "../../../../assets/doctor-thumb-02.jpg";

export default function PrescriptionTableRow() {
  return (
    <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">
        <h1 className="text-gray-700">11 Nov 2023 </h1>
        <p className="text-sm text-cyan-500 font-bold"> 10.45 am</p>
      </td>
      <td className="px-6 py-4">Prescription</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-4 items-center"
      >
        <div className="w-14 h-14   rounded-full border overflow-hidden flex items-center justify-center">
          <img src={icon} alt="icon" />
        </div>
        <div>
          <h1 className="text-gray-700">Daren </h1>
          <p className="text-sm"> #12445</p>
        </div>
      </th>

      <td className="px-6 py-4      ">
        <button className="border bg-[#e0f6f6] py-1 mr-4 px-4 rounded-md text-cyan-500">
          Print
        </button>
        <button className="border bg-[#e1f6ed] py-1 mr-4 px-4 rounded-md text-[#49b576]">
          Accept
        </button>
      </td>
    </tr>
  );
}
