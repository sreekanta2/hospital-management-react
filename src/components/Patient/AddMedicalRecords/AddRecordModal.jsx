import Input from "../../../ui/Input";

export default function AddRecordModal({ open, control }) {
  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed   w-full h-full overflow-y-scroll inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px]  space-y-8 bg-white p-6 absolute top-1/3 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="  text-2xl border-b pb-4 text-gray-700">
              Add Medical Record
            </h1>

            <div className="flex flex-col gap-4">
              <Input text="Text Name" required />
              <Input text="Hospital Name" required />
              <label
                htmlFor="uploadFile1"
                className="bg-white text-center rounded  w-full min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-dotted border-gray-300 mx-auto font-[sans-serif] m-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 mb-6 fill-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
                    data-original="#000000"
                  />
                  <path
                    d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
                    data-original="#000000"
                  />
                </svg>
                <p className="text-gray-400 font-semibold text-sm">
                  Drag & Drop or{" "}
                  <span className="text-[#007bff]">Choose file</span> to upload
                </p>
                <input type="file" id="uploadFile1" className="hidden" />
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG SVG, WEBP, and GIF are Allowed.
                </p>
              </label>
              <Input type="date" text="Date of Birth" required />
              <button className="bg-[#0de0fe] py-2 text-white">Submit</button>
            </div>
          </div>
        </div>
      </>
    )
  );
}
