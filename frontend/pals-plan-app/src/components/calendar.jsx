import React, { useState } from 'react';

import Day from '../components/day.jsx';

const Calendar = () => {

const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="w-full h-full flex flex-row text-center items-center gap-2">
      <div className="h-full flex flex-col font-[Dongle] font-bold text-4xl">
        <p className="h-6"></p>
        <div className="flex-1">
          <p>7-12</p>
          <img src="src/assets/sun-solid.svg"></img>
        </div>
        <div className="flex-1">
          <p>12-5</p>
          <img></img>
        </div>
        <div className="flex-1">
          <p>5-10</p>
          <img></img>
        </div>
      </div>
        <div className='h-full flex flex-1 gap-3'>
          {daysOfWeek.map((day, idx) => {
            return (
              <div key={idx} className="h-full flex flex-col flex-1 ">
                <p className="text-center pb-2 font-[Dongle]">{day}</p>
                <Day></Day>
              </div>
            )
          })}
        </div>
     

		</div>
  )
}

export default Calendar;