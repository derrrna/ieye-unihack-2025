const express = require("express");
const hangoutController = require("../controllers/hangoutController.js");   
const router = express.Router()


router.get("/:id", hangoutController.getHangouts);
router.post("/", hangoutController.createHangouts);
router.get("/:id/dates", hangoutController.dates);

module.exports = router;