const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: String,
    likes: {
        type: Number,
        default: 0
    },
    suggestingUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

});

module.exports =  mongoose.model("Event", eventSchema);