// Basic Lib Import
const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const bodyParser = require("body-parser");
const path = require("path");
var morgan = require("morgan");

// Security Middleware Lib Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

// Database Lib Import
const mongoose = require("mongoose");

app.use(express.static("client/build"));

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser Implement
app.use(morgan("dev"));
app.use(bodyParser.json());

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

let URI = "mongodb://127.0.0.1:27017/assignment-22";
let OPTION = { autoIndex: true };
mongoose
  .connect(URI, OPTION)
  .then(() => {
    console.log("Connection Success to database");
  })
  .catch((error) => {
    console.log(error);
  });

// Routing Implement
app.use("/api/v1", router);

// Add React Front End Routing
app.get("*", function (req, res) {
  res.status(404).send("page not found");
});

module.exports = app;
