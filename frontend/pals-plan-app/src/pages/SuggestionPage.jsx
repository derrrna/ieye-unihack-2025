import React from "react";

export default function SuggestionPage() {

    return (
        
        <div className="w-screen h-screen flex bg-[url('public/SuggestionPageBackground.png')] bg-cover">
            {/* fix background issue */}
            
            {/* generator side*/}
            <div className="w-1/2 h-full text-black">

                <h2 className="lg:text-2xl pt-20 pl-20 font-[Slackey] text-[#F8574F]">PalsPlan</h2>

                <div className="pl-50 mt-10 font-[Dongle] text-6xl font-bold">
                    <h1> Activity Generator</h1>
                </div>

            </div>

            {/* location side*/}
            <div className="w-1/2 h-full">
                <h1>hi</h1>
            </div>

        </div>
    )

}