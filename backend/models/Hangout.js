const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * hangoutSchema defines the structure for storing hangout-related data in the database.
 * This schema includes properties such as the hangout name, start date, link, and participants.
 *
 * Properties:
 * - name: Represents the name of the hangout. This property is of type String and is required.
 * - startDate: Represents the date and time when the hangout starts. This property is of type Date and is required.
 * - link: Represents the URL link associated with the hangout. This property is of type String and is required.
 * - attendees: References the User model and identifies the participants of the hangout. This property is of type ObjectId and is required.
 */
let hangoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    startDate: {
        type: Date,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },

  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Hangout", hangoutSchema);
