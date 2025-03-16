const express = require("express");
const eventController = require("../controllers/eventController.js");
const router = express.Router()

router.post("/:id/locations", eventController.getEvents)

router.get("/generate", eventController.generateSuggestion);


module.exports = router;