const Hangout = require('../models/Hangout');


/**
 * Asynchronously retrieves a list of all hangouts from the database.
 *
 * This function handles HTTP requests and sends a response to the client.
 * If the retrieval is successful, it sends a status of 200 with the hangouts data in JSON format.
 * In case of an error during the retrieval process, it responds with a status of 500 and an error message.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
const getHangouts = async (req, res) => {
    try {
        const hangouts = await Hangout.find();
        res.status(200).json(hangouts);
    } catch (error) {
        res.status(500).json({message: 'Failed to fetch hangouts', error: error.message});
    }
};

/**
 * Asynchronous function to create a new hangout and save it in the database.
 *
 * @param {Object} req - Express request object containing data necessary to create a hangout.
 * @param {Object} req.body - The body of the request containing hangout details.
 * @param {string} req.body.name - The name of the hangout.
 * @param {string} req.body.startDate - The start date of the hangout.
 * @param {string} req.body.location - The location of the hangout.
 * @param {string} req.body.link - Optional link for the hangout.
 * @param {Array<string>} req.body.attendees - List of attendees for the hangout.
 * @param {Object} res - Express response object used to send a response back to the client.
 *
 * @returns {Promise<void>} Sends a response with the created hangout details if successful (HTTP 201),
 * or an error message if the operation fails (HTTP 500).
 */
const createHangouts = async (req, res) => {

    try {
        const {name, startDate, location, link, attendees} = req.body;

        const newHangout = new Hangout({name, startDate, location, link, attendees});

        const savedHangout = await newHangout.save();

        res.status(201).json(savedHangout);
    } catch (error) {
        res.status(500).json({message: 'Failed to create hangout', error: error.message});
    }
};


module.exports = { getHangouts, createHangouts }
