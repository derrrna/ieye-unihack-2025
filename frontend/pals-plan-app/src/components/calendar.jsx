import React, { useState, useEffect} from 'react';
import Day from '../components/day.jsx';
import { useParams} from "react-router-dom";

const Calendar = ({ onAvailabilityChange }) => {
  //const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const { hangoutId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/hangout/${hangoutId}/dates`, {
            headers: {
                "Content-Type": "applications/json",
            },
        }).then((res)=> {
            return res.json();
        }).then((data) => {
            setDaysOfWeek(data.days);
            console.log(daysOfWeek)
        });
    },[])

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
          <img src="/sun-solid.svg" className="w-7 m-4"></img>
          <p className="drop-shadow-lg">7-12</p>
        </div>
        <div className="flex-1">
          <img src="/cloud-solid.svg" className="w-7 m-4"></img>
          <p className="drop-shadow-lg">12-5</p>
        </div>
        <div className="flex-1">
          <img src="/moon-solid.svg" className="w-7 m-4"></img>
          <p className="drop-shadow-lg">5-10</p>
        </div>
      </div>
      <div className="h-full flex flex-1 gap-3">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="h-full flex flex-col flex-1">
            <p className="drop-shaow-lg text-center pb-2 text-4xl font-semibold font-[Dongle]">
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