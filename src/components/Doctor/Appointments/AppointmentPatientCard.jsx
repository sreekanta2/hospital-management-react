import patientImage from "../../../assets/doctor-thumb-02.jpg";

export default function AppointmentPatientCard() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 p-4  border rounded-md  items-center bg-white">
      <div className="flex gap-6   ">
        <div>
          <img
            src={patientImage}
            width={120}
            height={120}
            className="relative z-10"
            alt="background image"
          />
        </div>
        <div>
          <h1 className="font-bold">Travis Thimble</h1>
          <div className="text-sm text-gray-600 flex flex-col gap-1">
            <p>
              <span>
                <i className="ri-time-fill"></i>
              </span>
              <span>14 Nov 2023, 10.00 AM</span>
            </p>
            <p>
              <span>
                <i className="ri-time-fill"></i>
              </span>
              <span>Newyork, United States</span>
            </p>
            <p>
              <span>
                <i className="ri-time-fill"></i>
              </span>
              <span>richard@example.com</span>
            </p>
            <p>
              <span>
                <i className="ri-time-fill"></i>
              </span>
              <span>+1 923 782 4575</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <button className="border bg-[#e0f6f6] py-1 mr-4 px-4 rounded-md text-cyan-500">
          View
        </button>
        <button className="border bg-[#e1f6ed] py-1 mr-4 px-4 rounded-md text-[#49b576]">
          Accept
        </button>
        <button className="border bg-[#fee2e6] py-1 mr-4 px-4 rounded-md text-red-400">
          Cancel
        </button>
      </div>
    </div>
  );
}
