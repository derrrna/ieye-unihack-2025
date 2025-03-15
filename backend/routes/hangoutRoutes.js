const express = require("express");
const hangoutController = require("../controllers/hangoutController.js");   
const router = express.Router()

router.post("/", hangoutController.createHangout);
router.get("/dates", hangoutController.dates);

module.exports = router;