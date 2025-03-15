import React, { useState } from "react";
import Calendar from "../components/calendar.jsx";
import { useEffect } from "react";

export default function AvailabilityPage() {
  const userId = "67d51ece0ce6ae79312cfc8b";
  const [availability, setAvailability] = useState([]);

  //Get user info when component loads
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user?id=${userId}`);
        const data = await response.json();

        // Assuming the backend returns availability in the required format
        if (data.availability) {
          setAvailability(data.availability);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, [userId]);

  useEffect(() => {
    console.log("Updated availability:", availability);
  }, [availability]);

  const handleAvailabilityChange = (updatedAvailability) => {
    const formattedAvailability = Object.entries(updatedAvailability).map(
      ([day, timePeriods]) => ({
        day,
        timePeriod: timePeriods,
      })
    );
    setAvailability(formattedAvailability);
  };

  const onSubmit = async () => {
    console.log("Submitting availability for user:", userId);
    console.log("Availability:", availability);

    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, availability }),
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
          <Calendar onAvailabilityChange={handleAvailabilityChange}></Calendar>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <button
          onClick={onSubmit}
          className="btn border-0 bg-[#08BA63] text-white text-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
