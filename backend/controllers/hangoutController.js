const mongoose = require("mongoose");
const Hangout = require("../models/Hangout");

const createHangout = async (req, res) => { 
    try {
        const text = "hello"
        res.status(201).json(text);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const dates = async (req,res) => {
    try {
        const hangoutId = new mongoose.Types.req.query.id;
        const hangout = await Hangout.findById(hangoutId);
        let currentDate = hangout.startDate;
        const dayNames = ["Sun", "Mon", "Tues","Wed","Thur","Fri","Sat"];

        const days = [];

        for (let i = 0; i < 7;i++) {
            days.push(dayNames[currentDate.getDay()]);
            currentDate = new Date(currentDate.setDate(currentDate.getDate()+1))
        }
        res.status(200).json(days);

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { createHangout, dates};