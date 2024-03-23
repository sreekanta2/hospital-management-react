import footerLogo from "../../assets/footer-logo.png";
export default function Footer() {
  return (
    <div className="bg-[#15558d] p-10 pb-0  text-white flex flex-col justify-center items-center ">
      <div className=" border-b pb-8 border-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src={footerLogo} alt="logo" />
          <p className="text-justify text-sm mt-4 leading-snug font-semibold">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 text-2xl mt-2 ">
            <i className="ri-facebook-fill hover:text-[#20c997] cursor-pointer"></i>
            <i className="ri-twitter-fill hover:text-[#20c997] cursor-pointer"></i>
            <i className="ri-linkedin-fill hover:text-[#20c997] cursor-pointer"></i>
            <i className="ri-instagram-line hover:text-[#20c997] cursor-pointer"></i>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold ">For Patient</h1>
          <div>
            <ul>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Search for
                Doctors
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Login
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Register
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Booking
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Patient Dashboard
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold ">For Doctor</h1>
          <div>
            <ul>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Appointments
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Chat
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Login
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Register
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-arrow-right-double-fill"></i> Doctor Dashboard
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold ">Contact Us</h1>
          <div>
            <ul>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-map-pin-fill">
                  {" "}
                  3556 Beech Street, San Francisco, California, CA 94108
                </i>
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-phone-fill"> +01737813575</i>
              </li>
              <li
                className={`  text-md w-full group p-1 transition duration-300 ease-out hover:translate-x-2 cursor-pointer  `}
              >
                <i className="ri-mail-line"> {`   shreekantaray@gmail.com`}</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-16 flex items-center my-auto">
        <h1 className=" text-center items-center  ">
          © 2024 Doccure. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
