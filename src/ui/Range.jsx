"use client";

import { useState } from "react";

export default function Range() {
  const [rangeValue, setRangeValue] = useState(10);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setRangeValue(newValue);
  };

  return (
    <div className="px-4">
      <label
        htmlFor="default-range"
        className="w-full mb-2 text-sm flex justify-between font-medium text-gray-900 dark:text-white"
      >
        <span>$10</span>
        <span>$1000</span>
      </label>
      <input
        id="default-range"
        type="range"
        min={10}
        max={1000}
        value={rangeValue}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <span>{rangeValue}</span>
    </div>
  );
}
