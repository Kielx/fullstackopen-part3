//local config
require("dotenv").config({ path: "./conf.env" });
const port = process.env.PORT || 3001;

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
const commonRouter = require("./router/commonRouter");
app.use("/api/persons", personsApiRouter);
app.use("/", commonRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
