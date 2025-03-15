const Event = require('../models/Event');
const axios = require('axios');
const dotenv = require('dotenv');

const API_KEY = process.env.GOOGLE_API_KEY;

const getEvents = async (req, res) => {
    try{
        // location and name collected from form
        const activityLocation = req.query.activityLocation;
        const activityName = req.query.activityName;

        // insert location and name into Google API
        const searchQuery = `${activityName} in ${activityLocation}`;
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${API_KEY}`;

        const response = await axios.get(url);

        const places = response.data.results.map(place => ({
            name: place.name,
            address: place.formatted_address,
        }));

        res.json({ searchQuery, matchingPlaces: places});

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Failed to process request' });
    }
}

module.exports = { getEvents };