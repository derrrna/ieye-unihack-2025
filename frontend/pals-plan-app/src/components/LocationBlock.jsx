import React from "react";

export default function LocationBlock() {
    return(
        <button className=" btn btn-outline w-full shadow-sm h-22 m-3 rounded-xl ">
            <div className="flex w-full h-full">
                <img src="public/locationIcon.svg" className="w-10 m-5 color-white"/>
                <div className="flex flex-col">
                    <p className="text-4xl pt-4 leading-none text-start">O'Brien IceHouse</p>
                    <p className="text-3xl font-light">Ground/105 Pearl River Rd, Docklands VIC 3008 </p>
                </div>
            </div>
        </button>
    )
}