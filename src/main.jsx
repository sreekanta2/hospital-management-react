import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Layout from "./Layout";

import "./index.css";

import DoctorAccount from "./components/Doctor/Account/DoctorAccount";
import RefundPatient from "./components/Doctor/Account/RefundPatient";
import TotalInPatient from "./components/Doctor/Account/TotalInPatient";
import Appointments from "./components/Doctor/Appointments/Appointments";
import ChangePassword from "./components/Doctor/ChangePassword/ChangePassword";
import DoctorPatients from "./components/Doctor/DoctorPatients/DoctorPatients";
import DoctorSearch from "./components/Doctor/DoctorSearch";
import ProfileSetting from "./components/Doctor/Profile-setting/ProfileSetting";
import Review from "./components/Doctor/Review/Review";
import Friday from "./components/Doctor/Scheudule/Friday";
import Monday from "./components/Doctor/Scheudule/Monday";
import Saturday from "./components/Doctor/Scheudule/Saturday";
import Schedule from "./components/Doctor/Scheudule/Schedule";
import Sunday from "./components/Doctor/Scheudule/Sunday";
import Thursday from "./components/Doctor/Scheudule/Thursday";
import Tuesday from "./components/Doctor/Scheudule/Tuesday";
import Wednesday from "./components/Doctor/Scheudule/Wednesday";
import SocialMedia from "./components/Doctor/SocialMedia/SocialMedia";

import Dashboard from "./components/Doctor/dashboard/Doctor-dashboard";
import TodayPatient from "./components/Doctor/dashboard/TodayPatient";
import UpcomingPatient from "./components/Doctor/dashboard/UpcomingPatient";
import Index from "./components/Doctor/singleDoctor";
import BusinessHour from "./components/Doctor/singleDoctor/BusinessHour";
import Location from "./components/Doctor/singleDoctor/Location";
import Overview from "./components/Doctor/singleDoctor/Overview";
import SingleDoctor from "./components/Doctor/singleDoctor/SingleDoctor";
import Conversation from "./page/Conversation";

import PatientAccount from "./components/Patient/Account/Account";
import BookingDoctor from "./components/Patient/Account/BookingDoctors/BookingDoctors";
import AddMedicalRecords from "./components/Patient/AddMedicalRecords/AddMedicalRecords";
import Order from "./components/Patient/Order/Order";
import Appointment from "./components/Patient/dashboard/Appointments/Appointment";
import Billing from "./components/Patient/dashboard/Billings/Billing";
import Dashborad from "./components/Patient/dashboard/Dashborad";
import MedicalRecords from "./components/Patient/dashboard/MedicalRecords/MedicalRecords";
import Prescription from "./components/Patient/dashboard/Prescriptions/Prescriptions";
import Doctor from "./page/DoctorDashboard";
import Doctors from "./page/Doctors";
import Home from "./page/Home";
import Patient from "./page/Patients";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctor" element={<Doctor />}>
        <Route path="/doctor/dashboard" element={<Dashboard />}>
          <Route index:true element={<Index />} />
          <Route
            path="/doctor/dashboard/upcoming-patient"
            element={<UpcomingPatient />}
          />{" "}
          <Route
            path="/doctor/dashboard/today-patient"
            element={<TodayPatient />}
          />
        </Route>
        <Route path="/doctor/appointments" element={<Appointments />} />
        <Route path="/doctor/patients" element={<DoctorPatients />} />
        <Route path="/doctor/schedule" element={<Schedule />}>
          <Route path="/doctor/schedule/saturday" element={<Saturday />} />
          <Route path="/doctor/schedule/sunday" element={<Sunday />} />
          <Route path="/doctor/schedule/monday" element={<Monday />} />
          <Route path="/doctor/schedule/tuesday" element={<Tuesday />} />
          <Route path="/doctor/schedule/wednesday" element={<Wednesday />} />
          <Route path="/doctor/schedule/thursday" element={<Thursday />} />
          <Route path="/doctor/schedule/friday" element={<Friday />} />
        </Route>
        <Route path="/doctor/accounts" element={<DoctorAccount />}>
          <Route
            path="/doctor/accounts/total-patient"
            element={<TotalInPatient />}
          />
          <Route
            path="/doctor/accounts/refund-patient"
            element={<RefundPatient />}
          />
        </Route>
        <Route path="/doctor/reviews" element={<Review />} />

        <Route path="/doctor/profile-setting" element={<ProfileSetting />} />
        <Route path="/doctor/social-media" element={<SocialMedia />} />
        <Route path="/doctor/change-password" element={<ChangePassword />} />
      </Route>
      <Route path="/patient" element={<Patient />}>
        <Route path="/patient/dashboard" element={<Dashborad />}>
          <Route
            path="/patient/dashboard/appointment"
            element={<Appointment />}
          />
          <Route
            path="/patient/dashboard/prescription"
            element={<Prescription />}
          />
          <Route
            path="/patient/dashboard/medical-records"
            element={<MedicalRecords />}
          />
          <Route path="/patient/dashboard/billing" element={<Billing />} />
        </Route>
        <Route path="/patient/account" element={<PatientAccount />}>
          <Route
            path="/patient/account/booking-doctor"
            element={<BookingDoctor />}
          />
          <Route
            path="/patient/account/request-doctor"
            element={<BookingDoctor />}
          />
        </Route>
        <Route path="/patient/order" element={<Order />} />
        <Route
          path="/patient/addmedical-record"
          element={<AddMedicalRecords />}
        />
      </Route>
      <Route path="/doctor-search" element={<DoctorSearch />} />
      <Route path="/doctor/:doctorId" element={<SingleDoctor />}>
        <Route path="/doctor/:doctorId/overview" element={<Overview />} />
        <Route path="/doctor/:doctorId/location" element={<Location />} />
        <Route path="/doctor/:doctorId/review" element={<Review />} />
        <Route
          path="/doctor/:doctorId/business-hour"
          element={<BusinessHour />}
        />
      </Route>
      <Route path="/conversation" element={<Conversation />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
