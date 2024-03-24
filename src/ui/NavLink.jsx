import { NavLink } from "react-router-dom";

export default function Navlink({ to, children }) {
  return (
    <li className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-20 focus:bg-cyan-500">
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isActive
            ? " from-cyan-500 to-blue-500 relative px-5 py-2.5 transition-all ease-in duration-75 text-white  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 "
            : isPending
            ? "pending"
            : " relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
