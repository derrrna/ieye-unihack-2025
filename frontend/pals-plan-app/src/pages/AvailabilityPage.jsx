import React from 'react';

import Calendar from '../components/calendar.jsx'

const name = "Joe";

export default function AvailabilityPage() {

    return (
		<div className="h-screen flex flex-col bg-[url('public/AvailabilityPageBackground.png')] bg-cover">
			<div className='flex flex-col bg-[#FFCF32]  p-8 mx-50 mt-16 rounded-2xl '>
				<div>
					<h1 className="text-center text-5xl font-[Slackey]">My Availabilities</h1>
				</div>
				<div className='h-96 mt-10 mr-10'>
					<Calendar></Calendar>
				</div>
			</div>
			<div className="flex-1 flex items-center justify-center">
				<button className="btn border-0 bg-[#08BA63] text-white text-lg">Submit</button>
			</div>
		</div>
    )
}