import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    availablity: [
        {
            day: {
                type: String,
                required: true
            },
            timePeriod: {
                type: String,
                required: true
            }
        }
    ]
});

const User = mongoose.model("User", userSchema);
