import React, { useState } from 'react';

const Day = () => {
    const [selectedTimes, setSelectedTimes] = useState({
      morning: false,
      afternoon: false,
      evening: false
      });
    
      const onClicked = (timePeriod) => {
        setSelectedTimes(prevState => ({
            ...prevState,
            [timePeriod]: !prevState[timePeriod]
        }));
      };
      
      return (
        <div className="flex flex-1 flex-col  gap-3  justify-between">
          <button onClick={() => onClicked("morning")} className={`flex-1 rounded-2xl  ${selectedTimes.morning ? "bg-blue-400" : "bg-white"}`}></button>
          <button onClick={() => onClicked("afternoon")} className={`flex-1 rounded-2xl  ${selectedTimes.afternoon ? "bg-blue-400" : "bg-white"}`}></button>
          <button onClick={() => onClicked("evening")} className={`flex-1 rounded-2xl ${selectedTimes.evening ? "bg-blue-400" : "bg-white"}`}></button>
        </div>
      )

}

export default Day