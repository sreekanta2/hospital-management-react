export default function Button({ children }) {
  return (
    <button className="relative flex py-2.5 w-40 rounded-md items-center justify-center overflow-hidden bg-white  text-gray-700 border border-[#1aa2e1]   transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#1aa2e1] before:text-blue-600 hover:text-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
      <span className="relative z-20">{children}</span>
    </button>
  );
}
