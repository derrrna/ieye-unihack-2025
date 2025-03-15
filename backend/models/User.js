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

export default mongoose.model("User", userSchema);