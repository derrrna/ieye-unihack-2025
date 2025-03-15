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
                <div className="lg:w-2/3 lg:h-3/4 bg-[#FFCF32] rounded-4xl shadow-md flex flex-col items-center justify-center">
                    <h1> hello </h1>
                    <h1> hello </h1>
                </div>
            </div>

        </div>
    )

}