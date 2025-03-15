import React from 'react';

export default function CreationPage() {

    return (
        <div className="w-screen h-screen flex flex-row bg-[url('public/CreationPageBackground.png')] bg-cover">

            {/* Logo + Descriptive Text*/}
            <div className="lg:w-1/2 flex flex-col animate-fadein">
                <div className="lg:pl-35 text-[#1F100A]">
                    <h1 className="lg:pt-50 lg:text-5xl font-[Slackey]">PalsPlan</h1>
                    <h2 className="lg:mt-2 lg:text-3xl font-[Dongle]">Plan a hangout in less than 5 minutes!</h2>
                </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className="lg:w-2/3 lg:h-3/4 bg-[#FFCF32] rounded-4xl shadow-md font-[Dongle] lg:text-4xl">
                    <div className="p-20 text-white flex flex-col">
                        <h1>Hangout Name</h1>
                        <input type="text" placeholder="Enter hangout name here..." className="input mb-8 text-2xl text-white rounded-2xl" />
                        <h1>Location</h1>
                        <input type="text" placeholder="Enter hangout name here..." className="input mb-8 text-2xl text-white rounded-2xl" />
                        <h1>Date Range</h1>
                        <input type="date" className="input text-2xl text-white rounded-2xl mb-10"/>
                        <button class="btn bg-[#5E93E8] border-none text-xl w-1/4">+ Create</button>
                    </div>
                </div>
            </div>

        </div>
    )

}