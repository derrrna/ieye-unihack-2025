import React from "react";

import Calendar from "../components/calendar.jsx";

//TODO: Get user id from cookies

export default function AvailabilityPage() {
  const userId = "67d51ece0ce6ae79312cfc8b";

  const onSubmit = async () => {
    console.log("Submitting availability for user:", userId);

    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, availability: [] }), // Replace with actual availability data
      });

      const data = await response.json();
      console.log("Response from backend:", data);
    } catch (error) {
      console.error("Error submitting availability:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[url('public/AvailabilityPageBackground.png')] bg-cover">
      <div className="flex flex-col bg-[#FFCF32]  p-8 mx-50 mt-16 rounded-2xl ">
        <div>
          <h1 className="text-center text-5xl font-[Slackey]">
            My Availabilities
          </h1>
        </div>
        <div className="h-96 mt-10 mr-10">
          <Calendar></Calendar>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <button onClick={onSubmit} className="btn border-0 bg-[#08BA63] text-white text-lg">
          Submit
        </button>
      </div>
    </div>
  );
}
