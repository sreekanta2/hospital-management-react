import DoctorClinic from "./DoctorClicnic";

export default function Location() {
  const times = [1, 2];
  return (
    <div className="my-8 flex flex-col gap-4 ">
      {times.map((time) => (
        <DoctorClinic times={times} key={time} />
      ))}
    </div>
  );
}
