const mongoose = require("mongoose");
const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const user = new User({
      name: req.body.name,
      availability: req.body.availability,
    });
    await user.save();
    res.status(201).json(user);
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
    let id = new mongoose.Types.ObjectId(req.body.id);
    let name = req.body.name;
    let availability = req.body.availability;

    let user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.availability = availability;
    await user.save();
    res.status(200).json(user);
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
