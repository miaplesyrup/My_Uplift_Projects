const Task = require("../models/tasks");

const taskController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find().populate("tasks");
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving tasks.");
    }
  },
  getSingleTask: async (req, res) => {
    try {
      const task = await Task.findOne({ _id: req.params.id });
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving task.");
    }
    },
};

module.exports = taskController;