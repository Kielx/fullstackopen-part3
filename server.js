//local config
require("dotenv").config({ path: "./conf.env" });
const port = process.env.PORT || 3001;
const users = require("./persons.json");

//express server
const express = require("express");
const app = express();

//bodyparser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const validators = require("./validators");
const { validationResult } = require("express-validator");
//routes
app.get("/api/persons", (req, res) => {
  res.json(users);
});

app.post("/api/persons", [validators.checkUsername], (req, res) => {
  console.log(req.body);
  console.log(validationResult(req));
  res.status("200").send(req.body);
});

app.delete("/api/persons/:id", (req, res) => {
  let foundUserIndex = users.findIndex((user) => user.id === req.params.id);
  if (foundUserIndex === -1) {
    res.status("404").send("User not found");
  } else {
    let deltedUser = users.splice(foundUserIndex, 1);
    res.status("200").json(deltedUser);
  }
});

app.get("/api/persons/:id", (req, res) => {
  let foundUser = users.find((user) => user.id === req.params.id);
  if (!foundUser) {
    res.status("404").send("User not found");
  } else res.json(foundUser);
});

app.get("/info", (req, res) => {
  res.send(
    `
  <p>Phonebook has info for ${users.length} persons </p> <p>${new Date()}</p>`
  );
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
