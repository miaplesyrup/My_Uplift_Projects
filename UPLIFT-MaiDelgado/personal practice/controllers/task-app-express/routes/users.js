const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.get("/", userController.getAllUsers);
router.get("/:userID/tasks", userController.getSingleUser);

module.exports = router;
