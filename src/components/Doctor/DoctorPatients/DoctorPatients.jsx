import PatientCard from "../Appointments/PatientCard";

export default function DoctorPatients() {
  const patient = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="border rounded-md mx-6 p-4 flex flex-col gap-4 bg-gray-50   ">
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {patient.map((item, index) => (
          <PatientCard key={index} />
        ))}
      </div>
    </div>
  );
}
