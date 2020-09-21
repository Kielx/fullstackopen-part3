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

//router
const personsApiRouter = require("./router/personsApi");
app.use("/api/persons", personsApiRouter);

const commonRouter = require("./router/commonRouter");
app.use("/", commonRouter);

module.exports = app;
