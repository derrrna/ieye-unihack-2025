const mongoose = require("mongoose");

/**
 * A Mongoose schema defining the structure of a user document in a MongoDB collection.
 *
 * The userSchema consists of the following fields:
 * - `name`: Represents the name of the user, stored as a required string.
 * - `availability`: An array of objects, where each object contains:
 *    - `day`: The day of the week, stored as a required string.
 *    - `timePeriod`: The time period of availability, stored as a required string.
 */
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    availability: [
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

/**
 * Represents a Mongoose model for the User collection in the database.
 *
 * The `User` variable is created using the Mongoose `model` function
 * and is based on the `userSchema`. It facilitates interactions with
 * the User collection, such as creating, reading, updating, and
 * deleting user documents.
 *
 * This model is used as an abstraction layer for database operations
 * related to the User entity, ensuring schema enforcement and supporting
 * various useful Mongoose-provided methods for handling data.
 */
module.exports = mongoose.model("User", userSchema);