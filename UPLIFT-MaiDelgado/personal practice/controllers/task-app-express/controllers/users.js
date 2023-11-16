const User = require("../models/users");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate("tasks");
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving users.");
    }
  },
  getSingleUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.userID).populate("tasks");
      if (!user) {
        return res.status(404).send({ message: "User not found!" });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving user.");
    }
  },
};

module.exports = userController;
