//local config
require("dotenv").config({ path: "./conf.env" });

//express server
const express = require("express");
const app = express();

//users
app.locals.users = require("./persons.json");

//bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//logger
const morgan = require("morgan");

morgan.token("json", function (req, res) {
  return JSON.stringify({
    url: req.url,
    method: req.method,
    httpVersion: req.httpVersion,
    body: req.body,
  });
});

app.use(
  morgan(":json :method :url :status :res[content-length]- :response-time ms")
);

//router
const personsApiRouter = require("./router/personsApi");
app.use("/api/persons", personsApiRouter);

const commonRouter = require("./router/commonRouter");
app.use("/", commonRouter);
module.exports = app;
