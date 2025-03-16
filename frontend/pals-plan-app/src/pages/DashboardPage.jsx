import React from "react";
import EventBlock from "../components/EventBlock";

export default function DashboardPage() {

    const hangoutName = "Hangout Name";

    {/* array containing all activities and their details*/}
    const allActivities = [
        {id: 0,  activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 1, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 2, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3}
    ]

    return (
        <div className="bg-[url('public/DashboardPageBackground.png')] w-screen h-screen overflow-scroll flex flex-col">
            {/*Logo*/}
            <h2 className="font-[Slackey] text-2xl text-[#F8574F] pt-20 pl-20">PalsPlan</h2>

            {/* Name of hangout, assign to variable hangoutName*/}
            <h1 className="text-5xl text-black font-[Slackey] mt-10 text-center">{hangoutName}</h1>

            {/*Ranking*/}
            <div className="bg-[#FAFAF] text-black mt-15 w-3/4  shadow-lg rounded-3xl flex flex-col items-center mx-auto pb-15">
                <h1 className="font-[Dongle] text-5xl font-bold text-center w-full p-5">Events</h1>
                
                {allActivities.map( activity =>
                    <EventBlock activityName={activity.activityName} locationName={activity.locationName} 
                                addressLink={activity.addressLink} totalLikes={activity.totalLikes}/>
                )}

            </div>

            {/* Availabilities*/}
            <div className="bg-[#FAFAF] text-black mt-15 w-3/4  shadow-md rounded-xl flex mx-auto">
                <h1 className="font-[Dongle] text-5xl font-bold text-center w-full p-5">Availabilities</h1>
            </div>

        </div>
    )
}