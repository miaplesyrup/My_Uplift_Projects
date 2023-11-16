const express = require("express");
const router = express.Router();

const User = require("../models/users");

// GET /v1/tasks
router.get("/", async (req, res) => {
    try {
      //db.tasks
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving users.");
    }
  });

  
  module.exports = router;
