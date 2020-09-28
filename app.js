//local config
require("dotenv").config();
const errorHandlers = require("./errorHandlers");

//express server
const express = require("express");
const app = express();

//cors
const cors = require("cors");
app.use(cors());

//users
app.locals.users = require("./persons.json");

//bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//logger
const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.static("build"));

//router
const personsApiRouter = require("./router/personsApi");
app.use("/api/persons", personsApiRouter);

const commonRouter = require("./router/commonRouter");

app.use("/", commonRouter);

app.get("*", function (req, res) {
  res.status(404).send({ error: "Not found" });
});

app.use(errorHandlers.errorHandler);

module.exports = app;
