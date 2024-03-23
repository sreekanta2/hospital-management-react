import { Form } from "react-router-dom";
import patientImage from "../../../assets/patient2.jpg";
import Input from "../../../ui/Input";
import SelectInput from "../../../ui/SelectInput";
import TextArea from "../../../ui/TextArea";

export default function ProfileSetting() {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  return (
    <Form className=" flex flex-col gap-4 px-6">
      <div className="border rounded-md px-4 ">
        <h1 className="mt-8 text-xl font-semibold text-gray-700 mb-4">
          Basic Information
        </h1>
        <div className="flex gap-6 pb-4  flex-col md:flex-row  ">
          <div>
            <img
              src={patientImage}
              width={120}
              height={120}
              className="relative z-10"
              alt="background image"
            />
          </div>
          <div className="flex  flex-col gap-4  w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col   justify-center  w-44  h-14    border-gray-300  rounded-full cursor-pointer bg-[#20c0f3]  "
            >
              <div className="flex   gap-2 px-4 items-center justify-center text-white ">
                <svg
                  className="w-8 h-8   text-white dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p>Upload file</p>
              </div>

              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <p className="text-sm text-gray-400">
              Allowed JPG, GIF or PNG. Max size of 2MB
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <Input text="username" required />
          <Input text="Email" required />
          <Input text="First Name" required />
          <Input text="Last Name" required />
          <Input text="Phone Number" />
          <SelectInput
            label="Select "
            id="gender"
            options={genderOptions}
            // onChange={handleSelectChange}
          />
          <Input type="date" text="Date of Birth" required />
        </div>
      </div>
      <div className="border rounded-md px-4 py-4">
        <h1 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          About Me
        </h1>
        <TextArea text="Biography" />
      </div>
      <div className="border rounded-md px-4 py-4">
        <h1 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Clinic Info
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <Input text="Clinic Name" required />
          <Input text="Clinic Info" />
        </div>
      </div>
      <div className="border rounded-md px-4 py-4">
        <h1 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Contact Details
        </h1>
        <div className="grid   grid-cols-1 md:grid-cols-2 gap-4 ">
          <Input text="Address line 1" />
          <Input text="Address line 2" />
          <Input text="City" />
          <Input text="State / Province" />
          <Input text="Country" />
          <Input text="Postal Code" />
        </div>
      </div>
    </Form>
  );
}
