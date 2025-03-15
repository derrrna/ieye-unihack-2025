const mongoose = require('mongoose');
const User = require("../models/User");

const createUser = async (req, res) => { 
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: "Name is required" });
        }

        const user = new User(
            {
                name: req.body.name,
                availability: req.body.availability
            }
        );
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = { createUser };