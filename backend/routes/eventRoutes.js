const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController.js");

router.get("/generate", eventController.generateSuggestion);

module.exports = router;