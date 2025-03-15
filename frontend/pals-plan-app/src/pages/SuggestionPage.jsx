import React from "react";
import LocationBlock from "../components/LocationBlock";

export default function SuggestionPage() {

    /*NOTE: this array should contain the top 5 locations suggested by the AI. For now this is hardcoded.*/
    /* Refer to line 48 to see where these objects are used*/
    const topLocations = [
        {locationName: "O'Brien Icehouse", address: "Ground/105 Pearl River Rd, Docklands VIC 3008"},
        {locationName: "Melbourne Ice Skating Centre", address: "98A/1-5 The Blvd, Altona North VIC 3025"},
        {locationName: "Winter Village", address: "Federation Square, Melbourne VIC 3000"},
        {locationName: "The Ice Arena", address: "6-14 Kelletts Rd, Rowville VIC 3178"},
        {locationName: "The Ice Arena", address: "6-14 Kelletts Rd, Rowville VIC 3178"}
    ];


    return (
        
        <div className="w-screen h-screen flex bg-white">
            
            {/* generator side*/}
            <div className="w-1/2 h-full text-black bg-[url('public/SuggestionPageBackground.png')] bg-cover">

                <h2 className="lg:text-2xl pt-20 pl-20 font-[Slackey] text-[#F8574F]">PalsPlan</h2>

                <div className="pl-50 mt-10 font-[Dongle]">

                    {/* user know what to do */}
                    <h1 className="text-6xl font-bold"> Activity Generator</h1>
                    <h3 className="text-4xl mt-5"> What plan you feeling? </h3>
                    <div className="mt-3">
                        <input type="text" placeholder="Enter an activity..." className="bg-[#EFEFEF] input rounded-xl text-xl" />
                        <button className="btn ml-3 text-xl text-white bg-[#5E93E8] border-none rounded-xl"> Suggest </button>
                    </div>
                    
                    {/* user don't know what to do*/}
                    <h3 className="text-4xl mt-5"> No idea? </h3>
                    <button className="btn mt-2 w-1/4 text-xl text-white bg-[#F8574F] border-none rounded-xl"> Suggest for me! </button>

                </div>

            </div>

            {/* location suggestions side*/}
            <div className="w-1/2 h-full text-black font-[Dongle]">
                <h1 className="text-6xl font-semibold pt-10">We Suggest...</h1>

                {/*NOTE: For each object in the array, it creates a LocationBlock component and fills in that location's unique details.*/}
                <div className="bg-grey w-6/7 h-3/4 flex flex-col">
                    {topLocations.map( (location) =>
                        <LocationBlock locationName ={location.locationName} address={location.address}/>
                    )}
                </div>

            </div>

        </div>
    )

}