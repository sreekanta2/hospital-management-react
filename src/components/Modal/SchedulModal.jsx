import { useState } from "react";
import { startEndTimeOptions } from "../../constant";
import SelectInput from "../../ui/SelectInput";

export default function ScheduleModal({ open, control }) {
  const [inputFields, setInputFields] = useState([
    { startTime: "", endTime: "" },
  ]);

  const handleAddField = (e) => {
    e.preventDefault();
    setInputFields([...inputFields, { startTime: "", endTime: "" }]);
  };

  const handleRemoveField = (index, event) => {
    event.preventDefault();
    if (inputFields.length > 1) {
      const updatedFields = [...inputFields];
      updatedFields.splice(index, 1);
      setInputFields(updatedFields);
    }
  };

  const handleChange = (index, fieldName, event) => {
    const updatedFields = [...inputFields];
    updatedFields[index][fieldName] = event.target.value;
    setInputFields(updatedFields);
  };

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full overflow-y-scroll inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6   text-xl font-medium text-gray-700 border-b">
            Add Time Slots
          </h2>
          <form className="mt-8 space-y-6">
            <div className="">
              {inputFields.map((field, index) => (
                <div key={index} className="flex gap-8 mb-4 items-end">
                  <SelectInput
                    id={`startTime-${index}`}
                    label="Start Time"
                    value={field.startTime}
                    options={startEndTimeOptions}
                    onChange={(event) =>
                      handleChange(index, "startTime", event)
                    }
                  />
                  <SelectInput
                    id={`endTime-${index}`}
                    label="End Time"
                    value={field.endTime}
                    options={startEndTimeOptions}
                    onChange={(event) => handleChange(index, "endTime", event)}
                  />
                  {!index == 0 && (
                    <button
                      onClick={(event) => handleRemoveField(index, event)}
                      className="bg-red-600 h-10 px-4 text-2xl text-white rounded-lg"
                    >
                      X
                    </button>
                  )}
                </div>
              ))}
              <div
                className="flex gap-2 text-sm text-[#20c0f3] "
                onClick={handleAddField}
              >
                <svg
                  width="20px"
                  height="64px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                      fill="#20c0f3"
                    ></path>{" "}
                  </g>
                </svg>
                <button>Add More</button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Save
              </button>
            </div>
            {/* <Error message="There was an error" /> */}
          </form>
        </div>
      </>
    )
  );
}
