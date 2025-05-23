const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

router.post("/", usersController.createUser)
router.get("/", usersController.getUser)
router.put("/", usersController.updateUser)
router.delete("/", usersController.deleteUser)

module.exports = router;