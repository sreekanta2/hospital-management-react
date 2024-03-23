/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import hardImage from "../../assets/doctor-thumb-02.jpg";

// eslint-disable-next-line react/prop-types
export default function SideBarLinks({ options }) {
  return (
    <div
      className=" m-6 mt-0 md:mb-0 px-6
     col-span-1 border rounded-md  "
    >
      <div className="lg:inset-y-0 lg:flex lg:w-full lg:flex-col">
        <div className="flex grow flex-col gap-5   bg-white   ">
          <div className="flex mt-14 flex-col justify-center  shrink-0 items-center">
            <div className="rounded-full w-32  overflow-hidden  ring-offset-2 ring-8 ring-gray-100">
              <img src={hardImage} alt="background image" />
            </div>
            <h1 className="text-xl mt-4 ">Dr. Darren Elder</h1>
            <p className="text-[12px] text-gray-400">
              BDS, MDS - Oral & Maxillofacial Surgery
            </p>
          </div>
          <nav className="flex flex-1 flex-col ">
            <ul role="list">
              <li>
                <ul className="  space-y-1  ">
                  {options.map((option) => (
                    <li key={option.name} className="border-b w-full">
                      <NavLink
                        to={option.href}
                        className={({ isActive, isPending }) =>
                          isActive
                            ? "bg-gray-700 text-white group flex gap-x-3 rounded-sm p-2 text-sm leading-6 font-semibold "
                            : isPending
                            ? "pending"
                            : " text-gray-400 hover:text-white hover:bg-gray-700 group flex gap-x-3 rounded-sm p-2 text-sm leading-6 font-semibold"
                        }
                      >
                        {option.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
