const express = require("express");
const eventController = require("../controllers/eventController.js");
const router = express.Router()

router.get("/locations", eventController.getEvents)

module.exports = router;