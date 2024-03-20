import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../../constant";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => {
        return (
          <div
            key={link.name}
            className="  lg:px-3 text-left    border-b md:border-0  md:cursor-pointer group "
          >
            <li
              className="p-4  md:text-xs lg:text-sm font-bold     flex justify-between text-white md:text-gray-600  hover:text-[#09dca4]    items-center   pr-0 md:pr-0   group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl pr-5  inline">
                {link?.sublinks && (
                  <i className="ri-arrow-down-s-line text-xl items-end"></i>
                )}
              </span>
              <span className="text-xl    md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2 ">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </li>
            {link.sublinks && (
              <div className="absolute top-[47px]    hidden group-hover:md:block hover:md:block">
                <div
                  className=" py-3 w-6 h-4 ml-5  top-0 
                    mt-4  bg-white rotate-45"
                ></div>

                <div className="  mt-[-12px]   min-w-[200px] bg-[#fff]  ">
                  {link?.sublinks?.map((slinks) => {
                    return (
                      <ul key={slinks?.name} className="  border border-t-0   ">
                        <li
                          className={`  text-sm w-full group  p-3 transition duration-300 ease-out hover:translate-x-2 hover:text-[#1c89fd]`}
                        >
                          <Link to={slinks.href}> {slinks?.name}</Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            )}

            <div
              className={`
           
            ${heading === link.name ? "duration-300 md:hidden " : "hidden"}
          `}
            >
              {/* sublinks */}
              {link?.sublinks?.map((slinks) => (
                <div key={slinks.name} className="text-white">
                  <ul className="  bg-[#3474ac]  ">
                    <li
                      onClick={() =>
                        subHeading !== slinks.name
                          ? setSubHeading(slinks.name)
                          : setSubHeading("")
                      }
                      className="py-4 pl-7   font-semibold flex linkBorder-b justify-between items-center md:pr-0 pr-5"
                    >
                      {slinks.name}

                      <span className="  md:mt-1 md:ml-2 inline">
                        <ion-icon
                          name={`${
                            subHeading === slinks.Head
                              ? "chevron-up"
                              : "chevron-down"
                          }`}
                        ></ion-icon>
                      </span>
                    </li>
                    <ul
                      className={`${
                        subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks?.sublink?.map((slink, index) => (
                        <li className="py-3 pl-14" key={index}>
                          <Link href={slink.link}>{slink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
