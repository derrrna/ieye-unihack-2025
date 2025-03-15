import React from "react";

export default function SuggestionPage() {

    return (
        
        <div className="w-screen h-screen flex bg-[url('public/SuggestionPageBackground.png')] bg-cover">
            {/* fix background issue */}
            
            {/* generator side*/}
            <div className="w-1/2 h-full text-black">

                <h2 className="lg:text-2xl pt-20 pl-20 font-[Slackey] text-[#F8574F]">PalsPlan</h2>

                <div className="pl-50 mt-10 font-[Dongle]">

                    {/* Know what to do */}
                    <h1 className="text-6xl font-bold"> Activity Generator</h1>
                    <h3 className="text-4xl mt-5"> What plan you feeling? </h3>
                    <div className="mt-3">
                        <input type="text" placeholder="Enter an activity..." className="bg-[#EFEFEF] input rounded-xl text-xl" />
                        <button className="btn ml-3 text-xl text-white bg-[#5E93E8] border-none rounded-xl"> Suggest </button>
                    </div>
                    
                    {/* Don't know what to do*/}
                    <h3 className="text-4xl mt-15"> No idea? </h3>
                    <button className="btn mt-2 w-1/4 text-xl text-white bg-[#F8574F] border-none rounded-xl"> Suggest for me! </button>

                </div>

            </div>

            {/* location side*/}
            <div className="w-1/2 h-full text-black font-[Dongle]">
                <h1 className="text-6xl font-semibold pt-20">We Suggest...</h1>
            </div>

        </div>
    )

}