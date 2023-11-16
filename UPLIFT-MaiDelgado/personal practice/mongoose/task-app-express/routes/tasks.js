const express = require("express");
const router = express.Router();

const Task = require("../models/tasks");

// GET /v1/tasks
router.get("/", async (req, res) => {
  try {
    //db.tasks
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving tasks.");
  }
});

// GET /v1/tasks/:id
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving task.");
  }
});

// POST /v1/tasks
router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    task.status = "pending";
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating task.");
  }
});

// PUT/PATCH /v1/tasks/:id
router.patch("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      { new: true }
    );
    res.json(task);
    // res.send({ message: "updated succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating task.");
  }
});

// DELETE /v1/tasks/:id
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete({ _id: req.params.id });
    res.send({ message: "Task delete successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting task.");
  }
});

module.exports = router;
