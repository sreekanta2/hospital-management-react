"use client";

import { useState } from "react";

export default function Checkbox({ title }) {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div
      className="flex items-center    rounded"
      onClick={handleCheckboxChange}
    >
      <input
        id="myCheckbox"
        type="checkbox"
        checked={isChecked}
        onChange={(prev) => !prev}
        className={`w-[10px] h-[10px]   ring-2 ring-offset-[2px] rounded-full appearance-none ${
          isChecked ? "bg-[#0de0fe] " : "bg-white"
        }  `}
      />

      <label
        htmlFor={title}
        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
    </div>
  );
}
