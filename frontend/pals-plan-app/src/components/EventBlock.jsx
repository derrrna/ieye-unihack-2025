import React from "react";

export default function EventBlock(props) {
    return (
        <div>
            {/* add onClick/link feature*/}
            <button>
                <svg></svg>
            </button>
            
            <div>
                <p>{props.activityName}</p>
                <p>{props.locationName}</p>
            </div>
        </div>

    )

}