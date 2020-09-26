//local config
require("dotenv").config();

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

//mongoose

const Person = require("./models/Person");

Person.create({ name: "Kielx", phone: 123456789 }, function (err, small) {
  if (err) return handleError(err);
  console.log("saved");
});

//router
const personsApiRouter = require("./router/personsApi");
app.use("/api/persons", personsApiRouter);

const commonRouter = require("./router/commonRouter");
app.use("/", commonRouter);

app.get("*", function (req, res) {
  res.status(404).send({ error: "Not found" });
});

module.exports = app;
