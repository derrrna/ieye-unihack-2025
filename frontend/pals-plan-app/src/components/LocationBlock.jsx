import React from "react"
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";

export default function LocationBlock(props) {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch("http://localhost:3000/event/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: props.locationName, location: props.address, suggestingUser: props.userId, hangoutId: props.hangoutId}),
            });

            if (response.ok) {
                navigate(`/dashboard/${props.hangoutId}`); // Redirect on success
            } else {
                console.error("Submission failed");
            }
        } catch (error) {
            console.error("Error submitting:", error);
        }
    };


    return(
        <form onSubmit={handleSubmit}>
            <button type="submit" className=" btn btn-outline w-full shadow-sm min-h-22 h-auto m-3 rounded-xl">
                <div className="flex w-full h-full">
                    <img src="/locationIcon.svg" className="w-10 m-5"/>
                    <div className="flex flex-col">
                        <p className="text-4xl pt-4 leading-none text-start">{props.locationName}</p>
                        <p className="text-3xl font-light">{props.address}</p>
                    </div>
                </div>
            </button>
        </form>
    )
}