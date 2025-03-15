const Hangout = require('../models/Hangout');


const getHangouts = async (req, res) => {
    try {
        const hangouts = await Hangout.find();
        res.status(200).json(hangouts);
    } catch (error) {
        res.status(500).json({message: 'Failed to fetch hangouts', error: error.message});
    }
};

const createHangouts = async (req, res) => {

    try {
        const {name, startDate, location, link, attendees} = req.body;

        // Validate required inputs
        // if (!name || !startDate || !location || !link || !attendees) {
        //     return res.status(400).json({message: 'Please provide name, start date, and location for the hangout.'});
        // }

        const newHangout = new Hangout({name, startDate, location, link, attendees});

        const savedHangout = await newHangout.save();

        res.status(201).json(savedHangout);
    } catch (error) {
        res.status(500).json({message: 'Failed to create hangout', error: error.message});
    }
};


module.exports = { getHangouts, createHangouts }
