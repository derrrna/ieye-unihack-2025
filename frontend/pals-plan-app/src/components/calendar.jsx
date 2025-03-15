import React, { useState } from 'react';
import Day from '../components/day.jsx';

const Calendar = ({ onAvailabilityChange }) => {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const [availability, setAvailability] = useState({});

  const handleTimesChange = (dayName, selectedTimePeriods) => {
    setAvailability((prev) => {
      const updatedAvailability = { ...prev, [dayName]: selectedTimePeriods };
      onAvailabilityChange(updatedAvailability); // Notify parent component
      return updatedAvailability;
    });
  };

  return (
    <div className="w-full h-full flex flex-row text-center items-center gap-2">
      <div className="h-full flex flex-col font-[Dongle] font-bold text-4xl">
        <p className="h-12"></p>
        <div className="flex-1">
          <img src="public/sun-solid.svg" className="w-7 m-4"></img>
          <p>7-12</p>
        </div>
        <div className="flex-1">
          <img src="public/cloud-solid.svg" className="w-7 m-4"></img>
          <p>12-5</p>
        </div>
        <div className="flex-1">
          <img src="public/moon-solid.svg" className="w-7 m-4"></img>
          <p>5-10</p>
        </div>
      </div>
      <div className="h-full flex flex-1 gap-3">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="h-full flex flex-col flex-1">
            <p className="text-center pb-2 text-4xl font-semibold font-[Dongle]">
              {day}
            </p>
            <Day dayName={day} onTimesChange={handleTimesChange}></Day>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;