import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventBlock from "../components/EventBlock";
import AvailabilityBlock from "../components/AvailabilityBlock";

const DashboardPage = () => {
  const { hangoutId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState(null);

  useEffect(() => {
    // Get the user's name from cookies
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});

    if (cookies[`hangout_${hangoutId}_user`]) {
      console.log("no redirecting")
      setName(cookies[`hangout_${hangoutId}_user`]);
    } else {
      console.log("redirecting")
      navigate(`/dashboard/${hangoutId}/login`); // Redirect to login if no name found
    }
  }, [hangoutId, navigate]);


    const hangoutName = "Hangout Name";
    const meetupLocation = "Melbourne City";
    const shareLink = "https://google.com";
    const totalPeople = 5;

    {/* array containing all activities and their details*/}
    const allActivities = [
        {id: 0,  activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 1, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 2, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 3, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3},
        {id: 3, activityName: "Ice Skating", locationName: "O'Brien IceHouse", addressLink: "https://google.com", totalLikes: 3}
    ]

    {/* array containing top 5 availabilities. SHOULD BE SORTED BY TOTALFREE THIS POINT*/}
    const topAvailabilities = [
        {availabilityDate: "13/2/25", availabilityDay: "Thursday", availabilityTime: "Afternoon", totalFree: 5},
        {availabilityDate: "13/2/25", availabilityDay: "Thursday", availabilityTime: "Afternoon", totalFree: 4},
        {availabilityDate: "13/2/25", availabilityDay: "Thursday", availabilityTime: "Afternoon", totalFree: 3},
        {availabilityDate: "13/2/25", availabilityDay: "Thursday", availabilityTime: "Afternoon", totalFree: 2},
        {availabilityDate: "13/2/25", availabilityDay: "Thursday", availabilityTime: "Afternoon", totalFree: 1}
    ]

    {/*TODO: This should redirect to the suggestions page.*/}
    function handleSuggestButton() {

    }

    return (
        <div className="bg-[url('public/DashboardPageBackground.png')] max-w-screen h-2lvh flex flex-col">
            {/*Logo*/}
            <h2 className="font-[Slackey] text-2xl text-[#F8574F] pt-20 pl-20">PalsPlan</h2>

            <h2 className="text-black text-center mt-10 mb-5 text-3xl font-[Dongle] font-bold">Meetup Location: {meetupLocation}</h2>
            <h1 className="text-5xl text-black font-[Slackey] text-center">{hangoutName}</h1>
           
            <div class="collapse w-full  justify-center text-black font-[Dongle]">
                <input type="checkbox" className="w-1/2"/>
                <div class="collapse-title text-2xl pl-10 mt-5 italic">Click me to share this dashboard with your pals!</div>
                <div class="collapse-content text-2xl">
                    <p className="text-center">Copy this link: {shareLink}</p>
                </div>
            </div>

            <div className="bg-white text-black mt-8 w-3/4 shadow-lg max-h-100 rounded-3xl flex flex-col items-center mx-auto pb-15 overflow-y-scroll">
                <div className="flex mt-10">
                    <img src="/ActivityIcon.svg" className="w-8 mt-0 pb-2 mr-2"/>
                    <h1 className="font-[Dongle] text-5xl font-bold  w-full">Suggested Activities</h1>
                </div>

                <button class="btn bg-[#08BA63] mb-10  border-none rounded-3xl" onClick={handleSuggestButton}>+ Suggest an Activity</button>
    
                {allActivities.map( (activity) =>
                    <EventBlock activityName={activity.activityName} locationName={activity.locationName} 
                                addressLink={activity.addressLink} totalLikes={activity.totalLikes}/>
                )}

            </div>

            {/* Availabilities*/}
            <div className="bg-white text-black mt-15 w-3/4 shadow-md rounded-xl items-center flex mx-auto mb-10 pb-15 flex-col">
                <div className="flex items-center m-5 w-full justify-center">
                    <img src="/AvailabilitiesIcon.svg" className="w-6 mt-0 pb-3 mr-4" />
                    <h1 className="font-[Dongle] text-5xl font-bold">Availabilities</h1>
                </div>

                {topAvailabilities.map((availability, index) => 
                        <AvailabilityBlock availabilityDate={availability.availabilityDate} totalFree={availability.totalFree} index={index}
                                            availabilityDay={availability.availabilityDay} availabilityTime={availability.availabilityTime}
                                            totalPeople={totalPeople}/>
                    )}

            </div>

        </div>
    )
}
