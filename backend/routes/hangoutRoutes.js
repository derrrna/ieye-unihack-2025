const express = require("express");
const hangoutController = require("../controllers/hangoutController.js");   
const router = express.Router()

router.get("/", hangoutController.getHangouts);
router.post("/", hangoutController.createHangouts);

module.exports = router;