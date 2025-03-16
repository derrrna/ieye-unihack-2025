const OpenAI = require("openai");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Event = require('../models/Event');
const Hangout = require("../models/Hangout");
const axios = require('axios');
const API_KEY = process.env.GOOGLE_API_KEY;

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const createEvent = async (req,res) => {
  try {
    const hangoutId = new mongoose.Types.ObjectId(req.body.hangoutId);
    console.log(req.body)
    const event = new Event({
      name: req.body.name,
      location: req.body.location,
      likes: 0,
      suggestingUser: req.body.userId,
    })

    await event.save()
    await Hangout.findByIdAndUpdate(
      hangoutId,
      { $push: {events: event._id}},
      { new: true }
    );

    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const generateSuggestion = async (req, res) => {
  const category = req.query.category;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "system",
        content:
          "You are an idea generator for a group of friends who are not sure what to do when they hangout. Provide 5 unique ideas related to the given category. Each idea should only be one word and each idea should be seperated by a comma. For example if the catagory is sports 'vollyball,badminton,football,tennis,basketball'",
      },
      {
        role: "user",
        content: `Give me 20 ideas related to ${category}`,
      },
    ],
  });
  let result = completion.choices[0].message.content;
  let resultArray = result.split(',').map(item => item.trim());
  res.json(resultArray);
};

const getEvents = async (req, res) => {
    try{
        // location and name collected from form
        const hangoutId = req.params.id;
        const hangout = await Hangout.findById(hangoutId);
        let activityLocation = hangout.location
        const activityName = req.body.name;

        // insert location and name into Google API
        const searchQuery = `${activityName} in ${activityLocation}`;
        console.log(searchQuery)
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${API_KEY}`;

        const response = await axios.get(url);

        const places = response.data.results.map(place => ({
            name: place.name,
            address: place.formatted_address,
        }));
        console.log(places)
        res.json({ matchingPlaces: places.slice(0,5)});

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Failed to process request' });
    }
}

module.exports = {
  generateSuggestion, getEvents, createEvent
};
