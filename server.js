require("dotenv").config({ path: "./conf.env" });
const port = process.env.PORT || 3001;

const users = require("./persons.json");

const express = require("express");
const app = express();

app.get("/api/persons", (req, res) => {
  res.json(users);
});

app.get("/api/persons/:id", (req, res) => {
  let foundUser = users.find((user) => user.id === req.params.id);
  if (!foundUser) {
    res.status("404").send("User not found");
  } else {
    users.delete(foundUser);
    res.status("200").json(foundUser);
  }
});

app.delete("/api/persons/:id", (req, res) => {
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
