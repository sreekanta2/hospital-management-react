export default function Input({ type = "text", text, required = false }) {
  return (
    <div className="w-full">
      <label
        htmlFor="default-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {text} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        id="default-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-none  focus:ring-[1px]   block w-full p-2.5 "
      />
    </div>
  );
}
