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
    /* Refer to line 48 to see where these objects are used*/
    const [topLocations, setTopLocations] = useState([]);

    const [userId, setUserId] = useState(null)
    // get cookie of user
    useEffect(() => {
        // Get the user's name from cookies
        const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
        }, {});

        setUserId(cookies[`hangout_${hangoutId}_user`]);
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const activity = e.target.name.value;

        try {
            // Send the POST request to the backend
            const response = await fetch(`http://localhost:3000/event/${hangoutId}/locations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: activity })
            });

            const data = await response.json(); 
            setTopLocations(data.matchingPlaces);
        } catch (error) {
            console.error("Error fetching locations:", error);
        }
    };
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
            {/* user know what to do */}
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
                        <form onSubmit={handleFormSubmit}>
                            <input type="text" name="name" value={suggestedActivities[currentActivityIndex]} className="bg-[#EFEFEF] input rounded-xl text-xl" autoComplete="off"/>
                            <button type="submit" className="btn ml-3 text-xl text-white bg-[#5E93E8] border-none rounded-xl"> Suggest </button>
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
                {/* location suggestions side*/}
                <div className="w-1/2 h-full text-black font-[Dongle]">
                    <h1 className="text-6xl font-semibold pt-10">We Suggest In The Area...</h1>
                    {/*NOTE: For each object in the array, it creates a LocationBlock component and fills in that location's unique details.*/}
                    <div className="bg-grey w-6/7 h-3/4 flex flex-col">
                        {topLocations.map( (location) =>
                            <LocationBlock locationName ={location.name} address={location.address} suggestingUser={userId} hangoutId={hangoutId}/>
                        )}
                    </div>
                </div>
			</div>	
	);
}
