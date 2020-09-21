//local config
require("dotenv").config({ path: "./conf.env" });
const port = process.env.PORT || 3001;

//express server
const express = require("express");
const app = express();

//bodyparser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router
const personsApiRouter = require("./router/personsApi");
app.use("/api/persons", personsApiRouter);

app.get("/info", (req, res) => {
  res.send(
    `
  <p>Phonebook has info for ${users.length} persons </p> <p>${new Date()}</p>`
  );
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
