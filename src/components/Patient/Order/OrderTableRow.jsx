export default function OrderTableRow() {
  return (
    <tr className="bg-white border overflow-x-auto dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">12451245</td>
      <td className="px-6 py-4">4</td>
      <td className="px-6 py-4">Medicare</td>
      <td className="px-6 py-4">$250</td>
      <td className="px-6 py-4">Bkash</td>
      <td className="px-6 py-4">Paid</td>
      <td className="px-6 py-4">
        <h1 className="text-gray-700">11 Nov 2023 </h1>
        <p className="text-sm text-cyan-500 font-bold"> 10.45 am</p>
      </td>
    </tr>
  );
}
