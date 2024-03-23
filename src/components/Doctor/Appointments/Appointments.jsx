import AppointmentPatientCard from "./AppointmentPatientCard";

export default function Appointments() {
  const patient = [1, 2, 3, 4, 5, 6, 8, 9];
  return (
    <div className="border rounded-md mx-6 p-4 flex flex-col gap-4 bg-gray-50   ">
      {patient.map((item, index) => (
        <AppointmentPatientCard key={index} />
      ))}
    </div>
  );
}
