export default function Pagination() {
  return (
    <ul className="inline-flex w-1/2  justify-center    mt-10">
      <li>
        <button className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-green-100">
          Prev
        </button>
      </li>
      <li>
        <button className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-green-100">
          1
        </button>
      </li>
      <li>
        <button className="px-4 py-2 text-white transition-colors duration-150 bg-green-600 focus:shadow-outline">
          2
        </button>
      </li>
      <li>
        <button className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-green-100">
          3
        </button>
      </li>
      <li>
        <button className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-green-100">
          Next
        </button>
      </li>
    </ul>
  );
}
