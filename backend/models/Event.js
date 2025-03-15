import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    } ,
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