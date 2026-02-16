import path from "node:path";
import express from "express";
import mongoose from "mongoose";

// App constants
const SERVER_PORT = 3000;
const DB_URL = "mongodb://localhost/kbase";

// Setting up database
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB started successfully");
});

db.on("error", (error) => {
  console.error(error);
});

// Init app
const app = express();

// Load view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Endpoints
app.get("/", (req, res) => {
  res.render("index");
})

app.listen(SERVER_PORT, () => {
  console.log(`Server started successfully on port ${SERVER_PORT}`)
});
