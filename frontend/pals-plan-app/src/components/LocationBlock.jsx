import React from "react";

export default function LocationBlock(props) {
    return(
        <button className=" btn btn-outline w-full shadow-sm min-h-22 h-auto m-3 rounded-xl">
            <div className="flex w-full h-full">
                <img src="/locationIcon.svg" className="w-10 m-5"/>
                <div className="flex flex-col">
                    <p className="text-4xl pt-4 leading-none text-start">{props.locationName}</p>
                    <p className="text-3xl font-light">{props.address}</p>
                </div>
            </div>
        </button>
    )
}