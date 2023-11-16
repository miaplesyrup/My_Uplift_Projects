const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  tasks: [{ type: mongoose.Types.ObjectId, ref: "Task" }],
});

module.exports = mongoose.model("User", userSchema);
