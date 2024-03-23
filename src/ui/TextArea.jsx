export default function TextArea({ text }) {
  return (
    <>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {text}
      </label>
      <textarea
        id="message"
        rows="4"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-none  focus:ring-[1px]   block w-full p-2.5 "
        placeholder="Write your thoughts here..."
      ></textarea>
    </>
  );
}
