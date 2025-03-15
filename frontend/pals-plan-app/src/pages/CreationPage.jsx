import React, { useState } from 'react';
import Autocomplete from "react-google-autocomplete";

export default function CreationPage() {
    const [selectedPlace, setSelectedPlace] = useState('');
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
                        <form action="http://localhost:3000/hangout" method="POST">
                            <input type="text" name="name" placeholder="Enter hangout name here..." className="input mb-8 text-2xl text-black rounded-2xl" autoComplete='off'/>
                            <h1>Location</h1>
                            <Autocomplete
                                apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
                                onPlaceSelected={(place) => {
                                const address = place.formatted_address; 
                                setSelectedPlace(address); 
                                console.log(place);
                                }}
                                className="input mb-8 text-2xl text-black rounded-2xl"
                            />
                            
                            {/* Hidden input to store the place as a string */}
                            <input 
                                type="hidden" 
                                name="selectedPlace" 
                                value={selectedPlace} 
                            />
                            <h1>Date Range</h1>
                            <input name="startDate" type="date" className="input text-2xl text-black rounded-2xl mb-10"/>
                            <button type="submit" class="btn bg-[#5E93E8] border-none text-xl w-1/4">+ Create</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )

}