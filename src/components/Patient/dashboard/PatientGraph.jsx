import { useState } from "react";
import PatientGraphModel from "../../Modal/PatientGraphModal";

export default function PatientGraph({ item }) {
  const { title, color, img } = item;
  const [open, setOpen] = useState(false);
  const controller = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        onClick={controller}
        style={{ backgroundColor: color }}
        className={`  flex flex-col text-white justify-center items-center py-4 gap-y-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
      >
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className="font-bold  ">{title}</h1>
          <div className="w-14 h-14">
            <img src={img} alt="heat image" className="" />
          </div>

          <span className="text-sm">Last Update 2d</span>
        </div>
      </div>
      <PatientGraphModel open={open} control={controller} item={item} />
    </>
  );
}
