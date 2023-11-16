const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const { config } = require("dotenv");

config();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const port = process.env.PORT;
const database = process.env.DATABASE;

const app = express();

const taskRouter = require("./routes/tasks");
const userSchema = require("./routes/users");

app.use("/v1/tasks/", taskRouter);
app.use("/v1/users/", userouter);

// Middleware to parse incoming request bodies
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connection to MongoDB
mongoose
  .connect(`mongodb://${dbHost}:${dbPort}/${database}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// Start server
app.listen(port, () => {
  console.log("Server listening on port 3000");
});
