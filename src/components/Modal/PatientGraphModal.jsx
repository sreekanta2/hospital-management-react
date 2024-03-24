"use client";

export default function PatientGraphModel({ open, control, item }) {
  const { title } = item;
  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed top-0 w-full h-full overflow-y-scroll inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white border text-gray-700 py-6 px-4 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex justify-between items-center border-b">
            <h1 className="font-bold text-xl">{title}</h1>
            <i
              className="ri-close-line text-5xl cursor-pointer"
              onClick={control}
            ></i>
          </div>
        </div>
      </>
    )
  );
}
