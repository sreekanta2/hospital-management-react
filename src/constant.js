export const links = [
  {
    name: "Doctors",
    submenu: true,
    sublinks: [
      {
        name: "Doctors",
        href: "/doctors",
      },
      {
        name: "Search Doctor",
        href: "/doctor-search",
      },
    ],
  },
  {
    name: "Doctor",
    submenu: true,
    sublinks: [
      {
        name: "Dashboard",
        href: "/doctor/dashboard",
      },
      {
        name: "Appointments",
        href: "/doctor/appointments",
      },
      {
        name: "My Patients",
        href: "/doctor/patients",
      },
      {
        name: "Schedule Timings",
        href: "/doctor/schedule",
      },

      {
        name: "Accounts",
        href: "/doctor/accounts",
      },
      {
        name: "Reviews",
        href: "/doctor/reviews",
      },
      {
        name: "Messages",
        href: "/conversation",
      },
      {
        name: "Profile Setting",
        href: "/doctor/profile-setting",
      },
      {
        name: "Social Media",
        href: "/doctor/social-media",
      },
      {
        name: "Change Password",
        href: "/doctor/change-password",
      },
      {
        name: "Logout",
        href: "/",
      },
    ],
  },
  {
    name: "Patients",
    submenu: true,
    sublinks: [
      {
        name: "Dashboard",
        href: "/patient/dashboard",
      },
      {
        name: "Favorite",
        href: "/patient/favorite",
      },

      {
        name: "Messages",
        href: "/conversation",
      },
      {
        name: "Account",
        href: "/patient/patient-account",
      },
      {
        name: "Order",
        href: "/patient/patient-order",
      },
      {
        name: "Add Medical Records",
        href: "/patient/patient-add-medical-records",
      },

      {
        name: "Profile Setting",
        href: "/patient/patient-profile-setting",
      },
      {
        name: "Change Password",
        href: "/patient/patient-change-password",
      },
      {
        name: "Logout",
        href: "/",
      },
    ],
  },
  {
    name: "Pharmacy",
    submenu: true,
    sublinks: [
      {
        name: "Pharmacy",
        href: "/pharmacy",
      },

      { name: "Pharmacy Search", href: "/pharmacy-search" },
      { name: "Products", href: "/pharmacy/products" },
      { name: "Chat", href: "/conversation" },
      { name: "Payment Success", href: "/" },
      { name: "Pharmacy Register", href: "/" },
    ],
  },
  // {
  //   name: "Pages",
  //   submenu: true,
  //   sublinks: [
  //     {
  //       name: "About Us",
  //       link: "/",
  //     },
  //     { name: "Contacts Us", link: "/" },
  //     { name: "Cell", link: "/" },
  //     { name: "Invoices", link: "/" },
  //     { name: "Authentication  ", link: "/" },
  //     { name: "Starter Page", link: "/" },
  //     { name: "Pricing Plan", link: "/" },
  //     { name: "FAQ", link: "/" },
  //     { name: "Maintenances", link: "/" },
  //   ],
  // },
  // {
  //   name: "Blog",
  //   submenu: true,
  //   sublinks: [{ name: "Blog Details", link: "/" }],
  // },
  // {
  //   name: "Admin",
  //   submenu: true,
  //   sublinks: [
  //     {
  //       name: "Admin",
  //       link: "/",
  //     },
  //     { name: "Pharmacy Admin", link: "/" },
  //   ],
  // },
];
export const doctorSidebarOptions = [
  {
    name: "Dashboard",
    href: "/doctor/dashboard",
  },
  {
    name: "Appointments",
    href: "/doctor/appointments",
  },
  {
    name: "My Patients",
    href: "/doctor/patients",
  },
  {
    name: "Schedule Timings",
    href: "/doctor/schedule",
  },

  {
    name: "Accounts",
    href: "/doctor/accounts",
  },
  {
    name: "Reviews",
    href: "/doctor/reviews",
  },
  {
    name: "Messages",
    href: "/conversation",
  },
  {
    name: "Profile Setting",
    href: "/doctor/profile-setting",
  },
  {
    name: "Social Media",
    href: "/doctor/social-media",
  },
  {
    name: "Change Password",
    href: "/doctor/change-password",
  },
  {
    name: "Logout",
    href: "/",
  },
];
export const patientSidebarOptions = [
  {
    name: "Dashboard",
    href: "/patient/dashboard",
  },

  {
    name: "Messages",
    href: "/conversation",
  },
  {
    name: "Account",
    href: "/patient/account",
  },
  {
    name: "Order",
    href: "/patient/order",
  },

  {
    name: "Add Medical Records",
    href: "/patient/addmedical-record",
  },
  {
    name: "Medical Details",
    href: "/patient/patient-medical-details",
  },
  {
    name: "Profile Setting",
    href: "/patient/patient-profile-setting",
  },

  {
    name: "Change Password",
    href: "/patient/patient-change-password",
  },
  {
    name: "Logout",
    href: "/",
  },
];

export const speciality = ["Neurology", "Ophthalmology", "Cardiology"];
export const experience = ["1-5years", "5+years"];

//  graph icon
import icon1 from "./assets/graph-01.png";
import icon2 from "./assets/graph-02.png";
import icon3 from "./assets/graph-03.png";
import icon4 from "./assets/graph-04.png";
export const patientGraphData = [
  {
    img: icon1,
    title: "BMI Status",
    color: "#7289DE",
  },
  {
    img: icon2,
    title: "Heart Rate Status",
    color: "#ffa69e",
  },
  {
    img: icon3,
    title: "FBC Status",
    color: "#a9d4ff",
  },
  {
    img: icon4,
    title: "Weight Status",
    color: "#ffb88e",
  },
];

//  deals
// import dealsImage1 from "@/public/assets/pharmacy/deals-01.png";
// import dealsImage2 from "@/public/assets/pharmacy/deals-02.png";
// import dealsImage3 from "@/public/assets/pharmacy/deals-03.png";
// import dealsImage4 from "@/public/assets/pharmacy/deals-04.png";
// import dealsImage5 from "@/public/assets/pharmacy/deals-05.png";
// import dealsImage6 from "@/public/assets/pharmacy/deals-06.png";
// import dealsImage7 from "@/public/assets/pharmacy/deals-07.png";
// import dealsImage8 from "@/public/assets/pharmacy/deals-08.png";
// export const delas = [
//   {
//     name: "Diabetes",
//     src: dealsImage1,
//   },
//   {
//     name: "Cardiac Care",
//     src: dealsImage2,
//   },
//   {
//     name: "Stomach Care",
//     src: dealsImage3,
//   },
//   {
//     name: "Ayurvedic",
//     src: dealsImage4,
//   },
//   {
//     name: "Homeopathy",
//     src: dealsImage5,
//   },
//   {
//     name: "Fitness",
//     src: dealsImage6,
//   },
//   {
//     name: "Mom & Baby",
//     src: dealsImage7,
//   },
//   {
//     name: "Devices",
//     src: dealsImage8,
//   },
// ];

export const startEndTimeOptions = [
  { label: "12.00 AM", value: "12.00 AM" },
  { label: "12.30 PM", value: "12.30 PM" },
  { label: "1.00 PM", value: "1.00 PM" },
  { label: "12.00 AM", value: "12.00 AM" },
];
