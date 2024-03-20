import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavLinks from "./Navlinks.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBackground = scrollPosition === 0 ? "bg-gray-100" : "bg-gray-300";
  return (
    <nav className={`   ${navBackground} `}>
      <div className=" max-w-6xl mx-auto  flex justify-between  items-center  ">
        <div className="  p-2 flex  gap-6 items-center">
          {!open ? (
            <i
              className="ri-menu-line text-4xl md:hidden text-[#0de0fe]"
              onClick={() => setOpen(!open)}
            ></i>
          ) : (
            <i
              className="ri-close-line text-4xl  text-[#0de0fe] "
              onClick={() => setOpen(!open)}
            ></i>
          )}

          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul className="md:flex hidden rounded  items-center    ">
            <NavLinks />
          </ul>
        </div>
        <div className="bg-[#1c5b91] text-xs p-4 mr-4 text-white rounded-full   ">
          <Link to="/singup" className="uppercase">
            Singup
          </Link>
          /
          <Link to="/login" className="uppercase">
            Login
          </Link>
        </div>
      </div>
      {/* Mobile nav */}
      <div
        className={`
        md:hidden bg-[#15558d] fixed w-[60%] top-16 overflow-y-auto bottom-0 py-24   
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
      >
        <div className="mt-[-80px]">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
