import React, { useState } from 'react';

import Day from '../components/day.jsx';

const Calendar = () => {

const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="w-full h-full flex flex-row text-center items-center gap-2">
      <div className="h-full flex flex-col">
        <p className="h-6"></p>
        <p className="flex-1">Morning</p>
        <p className="flex-1">Afternoon</p>
        <p className="flex-1">Evening</p>
      </div>
        <div className='h-full flex flex-1 gap-3'>
          {daysOfWeek.map((day, idx) => {
            return (
              <div key={idx} className="h-full flex flex-col flex-1 ">
                <p className="text-center">{day}</p>
                <Day></Day>
              </div>
            )
          })}
        </div>
     

		</div>
  )
}

export default Calendar;