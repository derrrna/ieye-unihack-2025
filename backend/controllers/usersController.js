const mongoose = require("mongoose");
const User = require("../models/User");
const Hangout = require("../models/Hangout");

const createUser = async (req, res) => {
  try {
    const hangoutId = new mongoose.Types.ObjectId(req.body.hangoutId);

    if (!hangoutId) {
      return res.status(400).json({ message: "Hangout ID is required" });
    }

    if (!req.body.name) {
      return res.status(400).json({ message: "Name is required" });
    }

    // Check if the hangout exists
    const hangout = await Hangout.findById(hangoutId);
    if (!hangout) {
      return res.status(404).json({ message: "Hangout not found" });
    }

    // Create a new user
    const user = new User({
      name: req.body.name,
      availability: [],
    });
    await user.save();

    // Add user to attendees
    await Hangout.findByIdAndUpdate(
      hangoutId,
      { $push: { attendees: user._id } },
      { new: true }
    );

    res.status(201).json({id:user._id});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    let id = new mongoose.Types.ObjectId(req.query.id);
    let user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, name, availability } = req.body;
    console.log(req.body)
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { ...(name !== undefined && { name }), ...(availability !== undefined && { availability }) } },
      { new: true, runValidators: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    let id = new mongoose.Types.ObjectId(req.query.id);

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    let result = await User.deleteOne({ _id: id });
    res.status(200).json({
      acknowledged: result.acknowledged,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };
