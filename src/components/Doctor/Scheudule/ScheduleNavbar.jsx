import { NavLink } from "react-router-dom";

export default function ScheduleNavbar() {
  const sidebarOptions = [
    {
      name: "SATURDAY",
      href: "/doctor/schedule/saturday",
    },
    {
      name: "SUNDAY",
      href: "/doctor/schedule/sunday",
    },
    {
      name: "MONDAY",
      href: "/doctor/schedule/monday",
    },
    {
      name: "TUESDAY",
      href: "/doctor/schedule/tuesday",
    },
    {
      name: "WEDNESDAY",
      href: "/doctor/schedule/wednesday",
    },
    {
      name: "THURSDAY",
      href: "/doctor/schedule/thursday",
    },
    {
      name: "FRIDAY",
      href: "/doctor/schedule/friday",
    },
  ];

  return (
    <div className="  p-4  ">
      <div>
        <h1 className="text-xl text-gray-600 font-semibold mb-4">
          Schedule Timings
        </h1>
      </div>
      <ul>
        {sidebarOptions.map((link, index) => (
          <li
            key={index}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-20 focus:bg-cyan-500"
          >
            <NavLink
              to={link.href}
              className={({ isActive, isPending }) =>
                isActive
                  ? " from-cyan-500 to-blue-500 relative px-5 py-2.5 transition-all ease-in duration-75 text-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 "
                  : isPending
                  ? "pending"
                  : " relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
