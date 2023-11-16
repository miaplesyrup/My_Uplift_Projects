const mongoose = require("mongoose");
// Defining a Schema
const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  counter: Number,
  done: Boolean,
  status: String,
});

// Defining a Model
module.exports = mongoose.model("Task", taskSchema);
