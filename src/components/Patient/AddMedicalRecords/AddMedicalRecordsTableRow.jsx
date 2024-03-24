import image from "../../../assets/doctor-thumb-02.jpg";

export default function AddMedicalRecordsTableRow() {
  return (
    <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">CBC</td>
      <td className="px-6 py-4">Popular Diagnostic</td>
      <td className="px-6 py-4">
        <h1 className="text-gray-700">11 Nov 2023 </h1>
        <p className="text-sm text-cyan-500 font-bold"> 10.45 am</p>
      </td>
      <td className="px-6 py-4 text-xl ">
        <i className="ri-download-2-line bg-[#09e5ab] h-8 w-8 p-2 text-white cursor-pointer"></i>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-4 items-center"
      >
        <div className="w-14 h-14   rounded-full border overflow-hidden flex items-center justify-center">
          <img src={image} alt="icon" />
        </div>
        <div>
          <h1 className="text-gray-700">Daren </h1>
          <p className="text-sm"> #12445</p>
        </div>
      </th>

      <td className="px-6 py-4">
        <i className="ri-delete-bin-line bg-red-700 h-8 w-8 p-2 text-white cursor-pointer"></i>
      </td>
    </tr>
  );
}
