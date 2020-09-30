//local config
require("dotenv").config();
const errorHandlers = require("./errorHandlers");

//express server
const express = require("express");
const app = express();

//cors
const cors = require("cors");
app.use(cors());

//bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//logger
const morgan = require("morgan");
app.use(morgan("dev"));

//mongoDB
const mongo = require("./mongo");

//static folder
app.use(express.static("build"));

//router
const personsApiRouter = require("./router/personsApi");
app.use("/api/persons", personsApiRouter);

const commonRouter = require("./router/commonRouter");
app.use("/", commonRouter);

app.get("*", function (req, res) {
  res.status(404).send({ error: "Not found" });
});

//errorhandler
app.use(errorHandlers.errorHandler);

module.exports = app;
