const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse incoming request bodies
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(`mongodb:`)
// Start server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
