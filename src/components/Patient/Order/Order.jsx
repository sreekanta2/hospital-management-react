import OrderTableRow from "./OrderTableRow";

export default function Order() {
  const table1 = [1, 2, 3, 4, 5, 6, 8];
  return (
    <div className="relative  shadow-md sm:rounded-lg  overflow-x-auto ">
      <table className=" w-[1000px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order ID
            </th>{" "}
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>{" "}
            <th scope="col" className="px-6 py-3">
              Pharmacy Name
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Gateway
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Order date
            </th>
          </tr>
        </thead>
        <tbody>
          {table1.map((item) => (
            <OrderTableRow key={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
