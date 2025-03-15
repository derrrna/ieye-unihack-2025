import React from "react";

export default function DashboardPage() {

    const hangoutName = "Hangout Name";

    return (
        <div className="bg-[url('public/DashboardPageBackground.png')] bg-cover w-screen h-screen overflow-auto flex flex-col">
            {/*Logo*/}
            <h2 className="font-[Slackey] text-2xl text-[#F8574F] pt-20 pl-20">PalsPlan</h2>

            {/* Name of hangout, assign to variable hangoutName*/}
            <div>
                <h1 className="text-5xl text-black justify-self-center font-[Slackey] mt-10">{hangoutName}</h1>
            </div>

            {/**/}


        </div>
    )
}