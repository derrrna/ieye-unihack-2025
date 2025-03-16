import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventBlock from "../components/EventBlock";
import AvailabilityBlock from "../components/AvailabilityBlock";

export default function CreationPage() {
	const { hangoutId } = useParams();
	const navigate = useNavigate();
	const [name, setName] = useState(null);
	const [numberOfAttendees, setNumberOfAttendees] = useState(0);
  const [topAvailabilities, setTopAvailabilities] = useState([]);
  const [hangout, setHangout] = useState();

	const getUserAvailabilities = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/hangout/${hangoutId}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json(); // Parse the JSON data
			const attendees = data.attendees;
			setNumberOfAttendees(attendees.length);

			// Array of availability objects for each attendee
			const availabilities = data.attendees.map((attendee) => {
				return attendee.availability;
			});

			console.log("availabilities", availabilities);

			// Flatten the array of arrays into a single array
			const flattenedAvailabilities = availabilities.flat();

			const availabilityCounts = flattenedAvailabilities.reduce(
				(acc, availability) => {
					if (availability.timePeriod.length === 0) return acc; // Skip if no timePeriod

					// Iterate over each timePeriod and create a separate key for each
					availability.timePeriod.forEach((time) => {
						const key = `${availability.day}-${time}`; 
						if (!acc[key]) {
							acc[key] = {
								day: availability.day,
								timePeriod: [time], // Store the individual timePeriod as an array
								count: 0,
							};
						}
						acc[key].count += 1; // Increment the count for this day-timePeriod combination
					});

					return acc;
				},
				{}
			);

			// Convert the result back into an array
			const groupedAvailabilities = Object.values(availabilityCounts);

			// Sort by the top availabilities
			groupedAvailabilities.sort((a, b) => b.count - a.count);

			// Keep only the top 5 availabilities
			const topAvailabilities = groupedAvailabilities.slice(0, 5);

            setTopAvailabilities(topAvailabilities);
		} catch (error) {
			console.error("Error fetching user availabilities:", error);
		}
	};

	useEffect(() => {
		// Get the user's name from cookies
		const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
			const [key, value] = cookie.split("=");
			acc[key] = value;
			return acc;
		}, {});

		if (cookies[`hangout_${hangoutId}_user`]) {
			console.log("no redirecting");
			setName(cookies[`hangout_${hangoutId}_user`]);
		} else {
			console.log("redirecting");
			navigate(`/dashboard/${hangoutId}/login`); // Redirect to login if no name found
		}

		getUserAvailabilities();
	}, [hangoutId, navigate]);
  
    useEffect(() => {
       fetch(`http://localhost:3000/hangout/${hangoutId}`, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res)=> {
            return res.json();
        }).then((data) => {
            console.log(data.events)
            setHangout(data);
        });
    },[hangoutId])

	const shareLink = `http://localhost:5173/dashboard/${hangoutId}`;
  
    {/*TODO: This should redirect to the suggestions page.*/}
    function handleSuggestButton() {
      navigate(`/dashboard/${hangoutId}/suggestion`);
    }

    return (
        <div className="bg-[url('/DashboardPageBackground.png')] max-w-screen h-2lvh flex flex-col">
            {/*Logo*/}
            <h2 className="font-[Slackey] text-2xl text-[#F8574F] pt-20 pl-20">PalsPlan</h2>

            <h2 className="text-black text-center mt-10 mb-5 text-3xl font-[Dongle] font-bold">Meetup Location: {hangout?.location || "Loading..."}</h2>
            <h1 className="text-5xl text-black font-[Slackey] text-center">{hangout?.name || "Loading..."}</h1>
           
            <div className="collapse w-full  justify-center text-black font-[Dongle]">
                <input type="checkbox" className="w-1/2"/>
                <div className="collapse-title text-2xl pl-10 mt-5 italic">Click me to share this dashboard with your pals!</div>
                <div className="collapse-content text-2xl">
                    <p className="text-center">Copy this link: {shareLink}</p>
                </div>
            </div>

            <div className="bg-white text-black mt-8 w-3/4 shadow-lg max-h-100 rounded-3xl flex flex-col items-center mx-auto pb-15 overflow-y-scroll">
                <div className="flex mt-10">
                    <img src="/ActivityIcon.svg" className="w-8 mt-0 pb-2 mr-2"/>
                    <h1 className="font-[Dongle] text-5xl font-bold  w-full">Suggested Activities</h1>
                </div>

                <button className="btn bg-[#08BA63] mb-10  border-none rounded-3xl" onClick={handleSuggestButton}>+ Suggest an Activity</button>
                {hangout?.events?.map( (activity) =>
                    <EventBlock activityName={activity.name} locationName={activity.location} 
                                addressLink="www.google.com" totalLikes={activity.likes}/>
                )}

            </div>

            {/* Availabilities*/}
			<div className="bg-white text-black mt-15 w-3/4 shadow-md rounded-xl items-center flex mx-auto mb-10 pb-15 flex-col">
				<div className="flex items-center m-5 w-full justify-center">
					<img
						src="/AvailabilitiesIcon.svg"
						className="w-6 mt-0 pb-3 mr-4"
					/>
					<h1 className="font-[Dongle] text-5xl font-bold">
						Availabilities
					</h1>
				</div>

				{topAvailabilities.map((availability, index) => (
					<AvailabilityBlock
						availabilityDate={availability.availabilityDate}
						totalFree={availability.count}
						index={index}
						availabilityDay={availability.day}
						availabilityTime={availability.timePeriod[0]}
						totalPeople={numberOfAttendees}
					/>
				))}
			</div>

        </div>
    )
}
