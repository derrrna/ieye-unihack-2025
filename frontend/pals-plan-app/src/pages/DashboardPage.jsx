import React from "react";
import EventBlock from "../components/EventBlock";

export default function DashboardPage() {

    const hangoutName = "Hangout Name";

    {/* array containing all activities and their details*/}
    const allActivities = [
        {id: 0,  activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 1, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 2, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 3, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 3, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3}
    ]

    {/* array containing top 5 availabilities TODO: add ID*/}
    const topAvailabilities = [
        {availabilityDate: "13/2/25", availabilityDay: "Thursday", availabilityTime: "Afternoon", totalFree: 5}
    ]

    return (
        <div className="bg-[url('public/DashboardPageBackground.png')] max-w-screen h-2lvh flex flex-col">
            {/*Logo*/}
            <h2 className="font-[Slackey] text-2xl text-[#F8574F] pt-20 pl-20">PalsPlan</h2>

            {/* Name of hangout, assign to variable hangoutName*/}
            <h1 className="text-5xl text-black font-[Slackey] mt-10 text-center">{hangoutName}</h1>

            {/*Ranking TODO: add suggestion, make scrollable*/}
            <div className="bg-white text-black mt-15 w-3/4 shadow-lg max-h-100 rounded-3xl flex flex-col items-center mx-auto pb-15 overflow-y-scroll">
                <div className="flex m-5">
                    <img src="/ActivityIcon.svg" className="w-8 mt-0 pb-2 mr-2"/>
                    <h1 className="font-[Dongle] text-5xl font-bold  w-full">Activities</h1>
                </div>
    
                {allActivities.map( activity =>
                    <EventBlock activityName={activity.activityName} locationName={activity.locationName} 
                                addressLink={activity.addressLink} totalLikes={activity.totalLikes}/>
                )}

            </div>

            {/* Availabilities*/}
            <div className="bg-white text-black mt-15 w-3/4  shadow-md rounded-xl flex mx-auto pb-15">
                <h1 className="font-[Dongle] text-5xl font-bold text-center w-full p-5">Availabilities</h1>
            </div>

        </div>
    )
}