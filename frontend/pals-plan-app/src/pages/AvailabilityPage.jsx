import React from 'react';

import Calendar from '../components/calendar.jsx'

const name = "Joe";

export default function AvailabilityPage() {

    return (
			<div className='h-screen flex flex-col'>
				<div className='flex flex-col bg-yellow-300  p-8 mx-8 mt-8 rounded-2xl '>
					<div className='mb-4'>
						<h1 className="text-center text-5xl">My Availabilities</h1>
					</div>
					<div className='h-96 mt-10'>
						<Calendar></Calendar>
					</div>
				</div>
				<div className="flex-1 w-full flex items-center justify-items-end">
					<button className="bg-[#08BA63] btn">Submit</button>
				</div>
			</div>
	

        

    )

}