import React, { useState, useEffect } from "react";
import LocationBlock from "../components/LocationBlock";
import { useParams } from "react-router-dom";

export default function SuggestionPage() {
	const { hangoutId } = useParams();
	const [selectedCategory, setSelectedCategory] = useState("");
	const [previousCategory, setPreviousCategory] = useState(""); // Track the previous category
	const [isError, setIsError] = useState(false); // State to track error
	const [suggestedActivities, setSuggestedActivities] = useState([]); // State to store the array of suggestions
	const [currentActivityIndex, setCurrentActivityIndex] = useState(0); // State to track the current index
	const [currentInputValue, setCurrentInputValue] = useState(""); // State to track the input value

	/*NOTE: this array should contain the top 5 locations suggested by the AI. For now this is hardcoded.*/
	const topLocations = [
		{
			locationName: "O'Brien Icehouse",
			address: "Ground/105 Pearl River Rd, Docklands VIC 3008",
		},
		{
			locationName: "Melbourne Ice Skating Centre",
			address: "98A/1-5 The Blvd, Altona North VIC 3025",
		},
		{
			locationName: "Winter Village",
			address: "Federation Square, Melbourne VIC 3000",
		},
		{
			locationName: "The Ice Arena",
			address: "6-14 Kelletts Rd, Rowville VIC 3178",
		},
		{
			locationName: "The Ice Arena",
			address: "6-14 Kelletts Rd, Rowville VIC 3178",
		},
	];

	const onSuggestForMeClick = async () => {
		if (selectedCategory === "") {
			setIsError(true); // Set error state to true
			return;
		}
		setIsError(false); // Reset error state if valid

		// Update the previous category
		setPreviousCategory(selectedCategory);

		// Check if the array has suggestions and the category hasn't changed
		if (
			suggestedActivities.length > 0 &&
			selectedCategory === previousCategory
		) {
			// Cycle to the next suggestion in the array
			setCurrentActivityIndex(
				(currentActivityIndex + 1) % suggestedActivities.length
			);
			setCurrentInputValue(
				suggestedActivities[
					(currentActivityIndex + 1) % suggestedActivities.length
				]
			); // Update the input value
			return;
		}
		try {
			const response = await fetch(
				`http://localhost:3000/event/generate?category=${selectedCategory}`
			);

			if (!response.ok) {
				throw new Error("Failed to fetch suggestions");
			}

			const data = await response.json();
			console.log("Suggestions received:", data);

			// Assuming the backend returns an array of strings
			if (data.length > 0) {
				setSuggestedActivities(data); // Store the array of suggestions
				setCurrentActivityIndex(0); // Reset to the first suggestion
				setCurrentInputValue(data[0]); // Set the input value to the first suggestion
			}
		} catch (error) {
			console.error("Error fetching suggestions:", error);
		}
	};

	return (
		<div className="w-screen h-screen flex bg-white">
			{/* generator side */}
			<div className="w-1/2 h-full text-black bg-[url('/SuggestionPageBackground.png')] bg-cover">
				<h2 className="lg:text-2xl pt-20 pl-20 font-[Slackey] text-[#F8574F]">
					PalsPlan
				</h2>

				<div className="pl-50 mt-10 font-[Dongle]">
					{/* user know what to do */}
					<h1 className="text-6xl font-bold"> Activity Generator</h1>
					<h3 className="text-4xl mt-5"> What plan you feeling? </h3>
					<div className="mt-3">
						<form
							action={`http://localhost:3000/event/${hangoutId}/locations`}
						>
							<input
								type="text"
								name="name"
								placeholder="Enter an activity..."
								value={currentInputValue} // Bind the input value to the state
								onChange={
									(e) => setCurrentInputValue(e.target.value) // Update the input value on user input
								}
								className="bg-[#EFEFEF] input rounded-xl text-xl"
							/>
							<button
								type="submit"
								className="btn ml-3 text-xl text-white bg-[#5E93E8] border-none rounded-xl"
							>
								Suggest
							</button>
						</form>
					</div>

					{/* user don't know what to do */}
					<div className="flex flex-col gap-3 w-1/2">
						<h3 className="text-4xl mt-5"> No idea? </h3>

						<select
							value={selectedCategory}
							onChange={(e) =>
								setSelectedCategory(e.target.value)
							}
							className={`select text-2xl ${
								isError ? "select-error" : ""
							}`} // Add error class if isError is true
						>
							<option value="" disabled>
								Pick a category
							</option>
							<option value="sports">Sports</option>
							<option value="chill">Chill</option>
							<option value="creative">Creativity</option>
							<option value="entertainment">Entertainment</option>
							<option value="food">Food</option>
							<option value="study">Study</option>
						</select>
						<button
							onClick={onSuggestForMeClick}
							className="btn mt-2  text-xl text-white bg-[#F8574F] border-none rounded-xl"
						>
							Suggest for me!
						</button>
					</div>
				</div>
			</div>

			{/* location suggestions side */}
			<div className="w-1/2 h-full text-black font-[Dongle]">
				<h1 className="text-6xl font-semibold pt-10">We Suggest...</h1>

				{/* NOTE: For each object in the array, it creates a LocationBlock component and fills in that location's unique details. */}
				<div className="bg-grey w-6/7 h-3/4 flex flex-col">
					{topLocations.map((location) => (
						<LocationBlock
							locationName={location.locationName}
							address={location.address}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
