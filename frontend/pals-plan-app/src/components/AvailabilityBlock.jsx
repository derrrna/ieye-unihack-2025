import React from "react";

export default function AvailabilityBlock(props) {
    return (
        <div className="text-black w-3/4 mb-6 h-15 font-[Dongle] text-4xl flex items-center">
            <h1 className="text-white font-bold bg-[#FFCF32] pr-5 pl-5 pt-1 pb-1 rounded-lg shadow-md">{props.index + 1}</h1>
            <h2 className="ml-8">{props.availabilityDate}</h2>
            <h2 className="ml-8 font-[Slackey] text-xl mr-auto">{props.availabilityDay}, {props.availabilityTime}</h2>

            <div className="bg-[#08BA63] w-1/4 justify-end rounded-4xl shadow-lg animate-bounce">
                <h1 className="text-center text-3xl p-2 text-white font-bold">{props.totalFree}/{props.totalPeople} pals are free!</h1>
            </div>
        </div>
    )
}