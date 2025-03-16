import React, { useState, useEffect } from "react";

const Day = ({ dayName, onTimesChange }) => {
  const [selectedTimes, setSelectedTimes] = useState({
    morning: false,
    afternoon: false,
    evening: false,
  });

  const onClicked = (timePeriod) => {
    setSelectedTimes((prevState) => ({
      ...prevState,
      [timePeriod]: !prevState[timePeriod],
    }));
  };

  // Notify parent component whenever selectedTimes changes
  useEffect(() => {
    const selectedTimePeriods = Object.keys(selectedTimes).filter(
      (time) => selectedTimes[time]
    );
    onTimesChange(dayName, selectedTimePeriods);
  }, [selectedTimes]);

  return (
    <div className="flex flex-1 flex-col gap-3 justify-between">
      <button
        onClick={() => onClicked("morning")}
        className={`flex-1 rounded-2xl btn border-0 ${
          selectedTimes.morning ? "bg-blue-400" : "bg-white"
        }`}
      ></button>
      <button
        onClick={() => onClicked("afternoon")}
        className={`flex-1 rounded-2xl btn border-0 ${
          selectedTimes.afternoon ? "bg-blue-400" : "bg-white"
        }`}
      ></button>
      <button
        onClick={() => onClicked("evening")}
        className={`flex-1 rounded-2xl btn border-0 ${
          selectedTimes.evening ? "bg-blue-400" : "bg-white"
        }`}
      ></button>
    </div>
  );
};

export default Day;
