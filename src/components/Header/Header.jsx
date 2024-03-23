import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavLinks from "./Navlinks.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navBackground = scrollPosition === 0 ? "bg-gray-100" : "bg-gray-300";

  return (
    <nav className={`z-50 ${navBackground}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="p-2 flex gap-6 items-center">
          {!open && (
            <i
              className="ri-menu-line text-4xl md:hidden text-[#0de0fe]"
              onClick={() => setOpen(!open)}
            ></i>
          )}

          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul
            className="md:flex hidden rounded items-center z-50
          "
          >
            <NavLinks />
          </ul>
        </div>
        <div className="bg-[#1c5b91] text-xs p-4 mr-4 text-white rounded-full">
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
        ref={navRef}
        className={`
        md:hidden bg-[#15558d] z-50 fixed w-[60%] top-16 overflow-y-auto bottom-16 py-24
        duration-500 ${open ? "m-0" : "m-[-100%] "}
        `}
      >
        <div className="mt-[-80px]">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
