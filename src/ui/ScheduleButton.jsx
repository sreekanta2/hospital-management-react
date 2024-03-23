"use client";

import { useState } from "react";

export default function ScheduleButton({ index, times }) {
  const [activeStates, setActiveStates] = useState(times.map(() => false));

  const handleButtonClick = (index) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = !newActiveStates[index];
    setActiveStates(newActiveStates);
  };
  return (
    <div
      className={`btn btn-three ${activeStates[index] ? "active" : ""}`}
      onClick={() => handleButtonClick(index)}
    >
      {activeStates[index] ? (
        <span>10.00 AM-11.00 AM * </span>
      ) : (
        <span>10.00 AM-11.00 AM </span>
      )}
    </div>
  );
}
