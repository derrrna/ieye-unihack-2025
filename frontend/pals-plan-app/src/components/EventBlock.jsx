import React, { useState } from "react";

export default function EventBlock(props) {
    const [likes, setLikes] = useState(0);

    {/* This function makes it so that when the event button is clicked, it leads the user to the hyperlink of the address*/}
    function handleEventClick() {
        window.open(props.addressLink, '_blank');
    }

    function handleLikeClick(event) {
        event.stopPropagation(); 
        setLikes(likes + 1);
        {/*TODO: Add code here to update like count of current activity*/}
    }

    return (
        <button href={props.addressLink} className=" w-4/5 h-18 rounded-2xl shadow-xl m-2 btn btn-primary justify-start" onClick={handleEventClick}>
            
            <p className="font-[Dongle] font-bold text-4xl mr-auto">{props.activityName} at {props.locationName}</p>

            <button class="btn rounded-xl border-none shadow-none hover:bg-[#F8574F]" onClick={handleLikeClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                {likes}
            </button>

        </button>

    )

}