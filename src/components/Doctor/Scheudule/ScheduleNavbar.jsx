import Navlink from "../../../ui/NavLink";

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
          <Navlink key={index} to={link.href}>
            {link.name}
          </Navlink>
        ))}
      </ul>
    </div>
  );
}
