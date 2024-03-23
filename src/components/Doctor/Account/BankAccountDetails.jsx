export default function BankAccountDetails() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2  gap-4 p-6">
      <div className="border rounded-md border-b pb-4  ">
        <div className="flex justify-between items-center border-b p-4">
          <h1 className="text-gray-700 font-semibold ">Account </h1>
          <button className="bg-green-400 py-2 px-4 text-white rounded-md">
            Edit Details
          </button>
        </div>
        <div className="p-4  grid grid-cols-1 md:grid-cols-2  gap-4">
          <div>
            <h1 className="text-gray-700">Bank name</h1>
            <p className="text-gray-500 text-sm">Sonali Bank</p>
          </div>{" "}
          <div>
            <h1 className="text-gray-700">Branch name</h1>
            <p className="text-gray-500 text-sm">Dinajpur </p>
          </div>{" "}
          <div>
            <h1 className="text-gray-700">Account Number</h1>
            <p className="text-gray-500 text-sm">1244557874554</p>
          </div>
          <div>
            <h1 className="text-gray-700">Account Name</h1>
            <p className="text-gray-500 text-sm">Srikanto</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4  text-center border p-6 rounded-md">
        <div className="  bg-green-100 text-green-500 rounded-md h-24 flex flex-col justify-center items-center  ">
          <h1 className="font-bold text-2xl"> $90.48</h1>
          <p> Earned</p>
        </div>{" "}
        <div className="  bg-[#fff3e0] text-[#f39c12] rounded-md h-24 flex flex-col justify-center items-center  ">
          <h1 className="font-bold text-2xl"> $00.00</h1>
          <p> Requested</p>
        </div>{" "}
        <div className="  bg-[#f8f0ff] text-[#c580ff] rounded-md h-24 flex flex-col justify-center items-center  ">
          <h1 className="font-bold text-2xl"> $90.48</h1>
          <p> Balance</p>
        </div>
      </div>
    </div>
  );
}
